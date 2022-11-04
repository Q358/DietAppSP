import { useState, useEffect, useContext, createContext } from "react"
import { auth } from "./firebase.js"
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

const userAuthContext = createContext()

export function useAuth() {
  return useContext(userAuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState()
  const [userAvatar, setUserAvatar] = useState(user?.photoURL ?? defaultAvatar)

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
  
  const value = {
    user,
    userAvatar,
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