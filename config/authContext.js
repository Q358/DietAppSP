import { useState, useEffect, useContext, createContext } from "react"
import { auth, getData } from "./firebase.js"
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
    return updateProfile(user, {displayName})
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
    const day = new Date(d.setDate(d.getDate() - d.getDay())).getDate()
    const week = (d.getMonth() + 1) + '_' + (day) + '_' + d.getFullYear()
    console.log(week + " || " + d.getDate())
    const dietWeekly = await getData('diet', week, user)
    const exerciseWeekly = await getData('exercise', week, user)
    console.log("!!!!!!!" + dietWeekly + "!!!!!!!" + exerciseWeekly)
    await AsyncStorage.setItem('dietWeekly', JSON.stringify(dietWeekly)).catch(error => {
      console.log(error);
    })
    await AsyncStorage.setItem('exerciseWeekly', JSON.stringify(exerciseWeekly)).catch(error => {
      console.log(error);
    })
    setUserData({
      dietWeekly: JSON.parse(await AsyncStorage.getItem('dietWeekly').catch(error => {
        console.log(error);
      })),
      exerciseWeekly: JSON.parse(await AsyncStorage.getItem('exerciseWeekly').catch(error => {
        console.log(error);
      }))
    })
  }
  
  const value = {
    user,
    userAvatar,
    userData,
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