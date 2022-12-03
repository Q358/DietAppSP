import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { Avatar, Divider, makeStyles, useTheme } from "@rneui/themed"
import { Alert, SafeAreaView, useWindowDimensions } from "react-native"
import { StyleSheet, Text, TouchableOpacity, Switch, View, Share } from "react-native"
import { useAuth } from "../config/authContext"
import { faAppleWhole, faBreadSlice, faCarrot, faCog, faPen, faRightFromBracket, faUserPlus } from "@fortawesome/free-solid-svg-icons"
import { upload } from "../config/firebase"
import * as ImagePicker from 'expo-image-picker'
import { useEffect, useState } from "react"
import LoadingModal from "../components/LoadingModal"
import SettingsModal from "./SettingsModal"

export default function Profile({ navigation }) {
  const { user, userAvatar, setUserAvatar } = useAuth()
  const creationDate = new Date(user?.metadata.creationTime)
  const accountDate = `${creationDate.getMonth()}/${creationDate.getDate()}/${creationDate.getFullYear()}` // May need to change this based on locale if targeting international audience
  const [isLoading, setIsLoading] = useState(false)
  const [errorText, setErrorText] = useState()
  const [visible, setVisible] = useState(false)
  const [settingsVisible, setSettingsVisible] = useState(false)

  const {width, height} = useWindowDimensions()
  const { theme } = useTheme()
  const styles = useStyles()

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

  const handleInvite = async() => {
    try{ 
      await Share.share({message: "Check out this app called nutri for easy diet and fitness plans! It's really, really, really cool."}) // TODO Add link to respective app store
    }
    catch(error){
      console.log(error)
    }
  }

  const streak = 112
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop:30}}/>
      <Avatar source={{...userAvatar, cache: "reload"}} size={170} rounded>
        <View style={styles.streakCounter}>
          <Text style={{fontFamily:"fontBold", fontSize:20, color:theme.colors.primary}}>{streak}</Text>
        </View>
        <TouchableOpacity style={{backgroundColor:"#1E90FF", borderRadius:10, padding:5, position:"absolute", right:"5%", top:"5%"}} onPress={handleUpload}>
          <FontAwesomeIcon icon={faPen} color={theme.colors.primary} size={20}/>
        </TouchableOpacity>
      </Avatar>
      <Text style={{fontFamily:"fontBold", fontSize:35, marginBottom:5, marginTop:20, color:theme.mode === 'dark' ? theme.colors.textPrimary : theme.colors.primary}}>{user?.displayName}</Text>
      <Text style={{fontFamily:"fontRegular", fontSize:15, color:"gray", marginBottom:10}}>living nutrifully since {accountDate}</Text>
      {/* <Divider width={3} style={{marginVertical:5, width:"70%"}} color="lightgray"/> */}
      <View style={{backgroundColor:"#ACACAC50", borderRadius:20, paddingVertical:10, paddingHorizontal:20, justifyContent:"space-evenly", marginBottom:10}}>
        <ProfileRow statLabel={"Longest Streak"} statCount={112} icon={faCarrot} iconColor={"#f09b24"}/>
        <ProfileRow statLabel={"Total NutriScore"} statCount={9350} icon={faAppleWhole} iconColor={"#f02c24"} iconLeft/>
        <ProfileRow statLabel={"Avg. NutriScore"} statCount={93} icon={faBreadSlice} iconColor={"#906A19"}/>
      </View>
      <TouchableOpacity style={styles.inviteButton} onPress={handleInvite}>
        <Text style={{fontFamily:"fontBold", fontSize:20, color:theme.colors.textPrimary, marginRight:10}}>Invite Amigos</Text>
        <FontAwesomeIcon icon={faUserPlus} color={theme.colors.textPrimary} size={20}/>
      </TouchableOpacity>
      <LoadingModal visible={visible} setVisible={setVisible} errorText={errorText} setErrorText={setErrorText} isLoading={isLoading}/>
      <TouchableOpacity style={{position:"absolute", left:width-70, bottom:height-60}} onPress={() => setSettingsVisible(true)}>
        <FontAwesomeIcon icon={faCog} color="#808180" size={45}/>
      </TouchableOpacity>
      <SettingsModal visible={settingsVisible} setVisible={setSettingsVisible} navigation={navigation}/>
    </SafeAreaView>
  )
}

function ProfileRow({ statLabel, statCount, icon, iconColor, iconLeft}) {
  const size = 55
  const { theme } = useTheme()
  return(
    <View style={{flexDirection:"row", alignItems:"center"}}>
      {iconLeft && (
        <View style={{backgroundColor:iconColor, padding:10, borderRadius:15, marginRight:20}}>
          <FontAwesomeIcon icon={icon} size={size} color="white"/>
        </View>
      )}
      <View style={{backgroundColor:"#1E90FF", borderRadius:40, padding:15, paddingHorizontal:20, marginVertical:15}}>
        <Text style={{fontFamily:"fontRegular", fontSize:20, color:"white", textAlign:"center"}}>{statLabel}</Text>
        <Text style={{fontFamily:"fontBold", fontSize:35, color:theme.colors.primary, textAlign:"center"}}>{statCount}</Text>
      </View>
      {!iconLeft && (
      <View style={{backgroundColor:iconColor, padding:10, borderRadius:15, marginLeft:20}}>
        <FontAwesomeIcon icon={icon} size={size} color="white"/>
      </View>
      )}
    </View>
  )
}

const useStyles = makeStyles((theme) => ({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: theme.colors.secondary
  },
  cog:{
    position:"absolute",
    left:100,
    top:10
  },
  streakCounter:{
    borderRadius:30,
    backgroundColor:"#1E90FF",
    borderWidth:2,
    borderColor:theme.colors.primary,
    paddingVertical:5,
    paddingHorizontal:20,
    position:"absolute",
    top:"85%",
    right:"25%"
  },
  inviteButton:{
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:20,
    backgroundColor:theme.colors.primary,
    flexDirection:"row",
    alignItems:"center"
  }
}))


// Notes:
// Could add long-term graph or more info trackers? Info on weight lost, possibly in ridiculous units such as elephants?