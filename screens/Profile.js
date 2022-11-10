import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { Avatar, Divider } from "@rneui/themed"
import { Alert, SafeAreaView, useWindowDimensions } from "react-native"
import { StyleSheet, Text, TouchableOpacity, Switch, View, Share } from "react-native"
import { useAuth } from "../config/authContext"
import { faCog, faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { upload } from "../config/firebase"
import * as ImagePicker from 'expo-image-picker'
import { useEffect, useState } from "react"
import LoadingModal from "../components/LoadingModal"

export default function Profile({ navigation }) {
  const { user, logout, userAvatar, setUserAvatar } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [errorText, setErrorText] = useState()
  const [visible, setVisible] = useState(false)

  const {width, height} = useWindowDimensions()

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
    <SafeAreaView style={styles.container}>
      <Avatar source={{...userAvatar, cache: "reload"}} size={150} rounded/>
      <Text style={{fontFamily:"UbuntuBold", fontSize:30, marginVertical:5}}>{user?.displayName}</Text>
      <Text style={{fontFamily:"Ubuntu", fontSize:15, color:"gray", marginBottom:5}}>living nutrifully since 11/4/22</Text>
      <Divider width={3} style={{marginVertical:5, width:"70%"}} color="lightgray"/>
      <SettingsBar label={"Dark Mode"}/>
      <SettingsBar label={"Notifications"}/>
      <SettingsBar label={"Zen Music"}/>
      <TouchableOpacity style={{padding:20, borderRadius:20, backgroundColor:"lightgreen", marginVertical:10}} onPress={async() => {
        try{ 
          await Share.share({message: "Check out this app called nutri for easy diet and fitness plans! It's really, really, really cool."}) // TODO Add link to respective app store
        }
        catch(error){
          console.log(error)
        } 
        }}>
        <Text style={{fontFamily:"UbuntuBold", fontSize:20, color:"white"}}>Invite Some Amigos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleUpload}>
        <Text style={{marginHorizontal:10}}>Change Avatar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={{color:"red", marginHorizontal:10}}>Logout</Text>
        <FontAwesomeIcon icon={faRightFromBracket} color="red"/>
      </TouchableOpacity>
      <LoadingModal visible={visible} setVisible={setVisible} errorText={errorText} setErrorText={setErrorText} isLoading={isLoading}/>
      <TouchableOpacity style={{position:"absolute", left:width-70, bottom:height-50}} onPress={() => navigation.navigate("Settings")}>
        <FontAwesomeIcon icon={faCog} color="#808180" size={45}></FontAwesomeIcon>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

function SettingsBar({ label }) {
  const [checked, setChecked] = useState()
  return(
    <View style={{...styles.container, flex:0, width:"60%",flexDirection:"row", backgroundColor:"lightgreen", borderRadius:50, marginVertical:10, padding:3, paddingHorizontal:20}}>
      <Text style={{flex:5,fontFamily:"UbuntuBold", fontSize:20, marginRight:10, color:"white"}}>{label}</Text>
      <Switch value={checked} style={{flex:1,transform:[{scale:1.5}]}} trackColor={{ false: "lightgray", true: "green" }} thumbColor={!checked ? "white" : "green"}
        onValueChange={(value) => setChecked(value)} />
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
  },
  logoutButton:{
    borderRadius:50,
    padding:15,
    width: 170,
    marginHorizontal:8,
    marginVertical:15,
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
    borderColor:"red",
    borderWidth:2,
    borderStyle:"dotted"
  },
  cog:{
    position:"absolute",
    left:100,
    top:10
  }
})
