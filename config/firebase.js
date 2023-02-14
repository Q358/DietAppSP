import { getApp, getApps, initializeApp } from "firebase/app"
import { getAuth, initializeAuth, updateProfile } from "firebase/auth"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import { getReactNativePersistence } from 'firebase/auth/react-native'
import { getFirestore, doc, setDoc, updateDoc, getDoc, getDocs, collection, QuerySnapshot } from "firebase/firestore"; 
import AsyncStorage from '@react-native-async-storage/async-storage'
import Constants, { UserInterfaceIdiom } from "expo-constants"
import { getFoodData } from "./fatsecret"

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

const db = getFirestore(app)
export async function getData(folder, document, currentUser){
  // let userCollection = collection(db, "users/" + currentUser.uid + "/" + folder)
  // let userSnapshot = await getDocs(userCollection)
  // return userSnapshot.docs.map(doc => doc.data)
  /////
  const docRef = doc(db,`users/${(currentUser.uid).toString()}/${folder.toString()}`, document.toString())
  try {
    const docSnap = await getDoc(docRef)
    console.log("//"+docSnap.data())
    if(!docSnap.exists)
      console.log("Document not found.")
    else
      return docSnap.data()
  } catch (error) {
    console.log(error)
  }
}

export async function setData(folder, docName, data, currentUser){
  // AsyncStorage.setItem(localKey, data)
  const document = doc(db,`users/${(currentUser.uid).toString()}/${folder.toString()}`, docName.toString())
  try {
    await setDoc(document,{data})
  } catch (error) {
    console.log(error)
  }
}


export async function setRegistrationData(data, currentUser){ // Could be combined with setData
  
  const document = doc(db,"users", currentUser.uid)
  try {
    await setDoc(document,{data})
   
  } catch (error) {
    console.log(error)
  }
}

export async function getDiet(path)
{
  const querySnapshot = await getDocs(collection(db, diets))
  querySnapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data())
  })
}

export const auth = firebaseAuth

export default app