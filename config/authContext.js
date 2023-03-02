import { useState, useEffect, useContext, createContext } from "react"
import { auth, getData, getDiet } from "./firebase.js"
import {
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from "firebase/auth"
import defaultAvatar from "../assets/nutriIcon.jpg"
import AsyncStorage from "@react-native-async-storage/async-storage"

const userAuthContext = createContext()

export function useAuth() {
  return useContext(userAuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState()
  const [userAvatar, setUserAvatar] = useState(user?.photoURL ?? defaultAvatar)
  const [userData, setUserData] = useState()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setUserAvatar(user?.photoURL ? {uri: user?.photoURL} : defaultAvatar)
    })

    return unsubscribe
  }, [])
  
  async function register(email, password, displayName){
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async(userCredential) =>
      {
        const user_cred = userCredential.user;
        await updateProfile(user_cred, {displayName})
      })
    //await updateProfile(user_cred, {displayName})
  }

  function login(email, password){
    return signInWithEmailAndPassword(auth, email, password)
  }

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleAuthProvider)
  }

  function logout(){
    return signOut(auth)
  }

  function resetPassword(email){
    sendPasswordResetEmail(auth, email)
  }

  async function loadUserData(){
    const d = new Date()
    // Get user data from DB
    const databaseInfo = await getData('users', user.uid)
    setUserData({...userData, databaseInfo})

    const dietVersion = (await getData('diets', databaseInfo.data.diet)).version
    console.log(dietVersion)

    // If diet has changed, query to get weeklyDiet and store locally
    if(dietVersion !== JSON.parse(await AsyncStorage.getItem('dietVersion'))){
      var dietWeekly = await getDiet(databaseInfo.data.diet, user)
      console.log(dietWeekly)
      // const exerciseWeekly = null
      await AsyncStorage.setItem('dietWeekly', JSON.stringify(dietWeekly)).catch(error => {
        console.log(error)
      })
      await AsyncStorage.setItem('dietVersion', JSON.stringify(dietVersion)).catch(error => {
        console.log(error)
      })
    // await AsyncStorage.setItem('exerciseWeekly', JSON.stringify(exerciseWeekly)).catch(error => {
    //   console.log(error)
    // })
    }
    setUserData({
      dietWeekly: JSON.parse(await AsyncStorage.getItem('dietWeekly').catch(error => {
        console.log(error)
      })),
      exerciseWeekly: JSON.parse(await AsyncStorage.getItem('exerciseWeekly').catch(error => {
        console.log(error)
      }))
    })
  }

  function syncUserData(data){
    setUserData(data)
  }
  
  const value = {
    user,
    userAvatar,
    userData,
    syncUserData,
    loadUserData,
    setUserAvatar,
    register,
    login,
    googleSignIn,
    logout,
    resetPassword
  }

  return (
    <userAuthContext.Provider value={value}>
      {children}
    </userAuthContext.Provider>
  )
}