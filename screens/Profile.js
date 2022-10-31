import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { Avatar } from "@rneui/themed"
import { ActivityIndicator, Alert, Image, Modal } from "react-native"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useAuth } from "../config/authContext"
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { upload } from "../config/firebase"
import * as ImagePicker from 'expo-image-picker'
import { useEffect, useState } from "react"
import LoadingModal from "../components/LoadingModal"

export default function Profile({ navigation }) {
  const { user, logout, userAvatar, setUserAvatar } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [errorText, setErrorText] = useState()
  const [visible, setVisible] = useState(false)

  useEffect(() => {

    setVisible((isLoading || errorText) ? true : false)

    if(errorText)
      setIsLoading(false)


  }, [isLoading, errorText])
  

  const componentDidMount = async () => {
    if (Platform.OS !== "web") {
      const {
        status,
      } = await ImagePicker.requestMediaLibraryPermissionsAsync()
      if (status !== "granted") {
        setErrorText("Media library access is required to upload profile picture")
        return 0
      }
      return 1
    }
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result)

    if(!result.cancelled) {
      return result.uri
    }
    return null
  };

  const handleUpload = async () => {
    let permission = await componentDidMount() // TODO Turn on once done setting up
    if(!permission) // !permission
      return 0
    else{
      let uri = await pickImage()
      if(uri){
      try {
        const blob = await new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest()
          xhr.onload = function () {
            resolve(xhr.response)
          }
          xhr.onerror = function (e) {
            console.log(e)
            reject(new TypeError("Network request failed"))
          }
          xhr.responseType = "blob"
          xhr.open("GET", uri, true)
          xhr.send(null)
        })
        await upload(blob, user, setIsLoading, "avatar")
        blob.close()
        setUserAvatar({uri:uri})
      } catch (error) {
        console.log(error)
        setErrorText("There was a problem uploading your file. Check your phone for any weasels that may have snuck in.") // Should this be changed?
      }
    }
    }
  }

  // TODO Add "Logout?" confirmation popup
  const handleLogout = async () => {
    try {
      await logout()
      navigation.navigate("Landing")
    } catch (error) {
      Alert.alert("Failed to logout:" + error)
    }
  }

  return (
    <View style={styles.container}>
<Avatar source={{...userAvatar, cache: "reload"}} size={150} rounded/>

      <Text>{user?.displayName}</Text>
      <TouchableOpacity style={styles.button} onPress={handleUpload}>
        <Text style={{marginHorizontal:10}}>Change Avatar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={{marginHorizontal:10}}>Logout</Text>
        <FontAwesomeIcon icon={faRightFromBracket} />
      </TouchableOpacity>
      <LoadingModal visible={visible} setVisible={setVisible} errorText={errorText} setErrorText={setErrorText} isLoading={isLoading}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  button:{
    borderRadius:50,
    padding:15,
    width: 170,
    marginHorizontal:8,
    marginVertical:15,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"green",
    flexDirection:"row"
  }
})
