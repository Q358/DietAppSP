import { firebase, initializeApp } from "firebase/app"
import { getAuth, updateProfile } from "firebase/auth"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"

let app;
if (firebase.apps.length === 0){
  app = initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  })
}

const storage = getStorage()
export async function upload(file, currentUser, setLoading, fileType){
  const fileRef = ref(storage, "users/"+ currentUser.uid + "/" + fileType + ".jpg")
  console.log(fileRef)

  setLoading(true)
  const snapshot = await uploadBytes(fileRef, file)
  const photoURL = await getDownloadURL(fileRef)
  updateProfile(currentUser, {photoURL}) // ES6 Syntax makes this equivalent to photoURL:photoURL
  setLoading(false)
} 

export const auth = getAuth(app)
export default app