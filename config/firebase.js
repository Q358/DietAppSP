import { firebase, getApp, getApps, initializeApp } from "firebase/app"
import { getAuth, updateProfile } from "firebase/auth"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import Constants from "expo-constants"

let app;
if (getApps().length === 0){
  app = initializeApp({
    apiKey: Constants.manifest.extra.apiKey,
    authDomain: Constants.manifest.extra.authDomain,
    projectId: Constants.manifest.extra.projectId,
    storageBucket: Constants.manifest.extra.storageBucket,
    messagingSenderId: Constants.manifest.extra.messagingSenderId,
    appId: Constants.manifest.extra.appId,
  })
}
else
  getApp()

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