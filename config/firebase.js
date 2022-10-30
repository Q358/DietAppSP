import { firebase, getApp, getApps, initializeApp } from "firebase/app"
import { getAuth, initializeAuth, updateProfile } from "firebase/auth"
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import { getReactNativePersistence } from 'firebase/auth/react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Constants from "expo-constants"

let app
let firebaseAuth
if (getApps().length === 0){
  app = initializeApp({
    apiKey: Constants.manifest.extra.apiKey,
    authDomain: Constants.manifest.extra.authDomain,
    projectId: Constants.manifest.extra.projectId,
    storageBucket: Constants.manifest.extra.storageBucket,
    messagingSenderId: Constants.manifest.extra.messagingSenderId,
    appId: Constants.manifest.extra.appId,
  })
  firebaseAuth = initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) }) // Done to avoid import warning
}
else{
  app = getApp()
  firebaseAuth = getAuth() 
}

const storage = getStorage()
export async function upload(file, currentUser, setIsLoading, fileType){
  const fileRef = ref(storage, "users/"+ currentUser.uid + "/" + fileType + ".jpg")
  console.log(fileRef)

  setIsLoading(true)
  const snapshot = await uploadBytes(fileRef, file)
  const photoURL = await getDownloadURL(fileRef)
  updateProfile(currentUser, {photoURL}) // ES6 Syntax makes this equivalent to photoURL:photoURL
  setIsLoading(false)
}

export const auth = firebaseAuth
export default app