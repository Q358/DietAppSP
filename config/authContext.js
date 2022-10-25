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

const userAuthContext = createContext()

export function useAuth() {
  return useContext(userAuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

    return unsubscribe
  }, [])
  
  function register(email, password, displayName){
    createUserWithEmailAndPassword(auth, email, password)
    return  updateProfile(user, {displayName})
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