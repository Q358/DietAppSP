import { faCog, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { makeStyles, Overlay, Switch, useTheme, withTheme } from "@rneui/themed";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../config/authContext";

export default function SettingsModal({ visible, setVisible, navigation }) {
  const { logout } = useAuth()
  const { updateTheme, theme } = useTheme()
  const styles = useStyles()

  // TODO Add "Logout?" confirmation popup
  const handleLogout = async () => {
    try {
      await logout()
      navigation.navigate("Landing")
    } catch (error) {
      alert("Failed to logout:" + error)
    }
  }

  // TODO Add actual functions
  const handleDarkModeSwitch = async() => {
    let mode = (theme.mode === 'light' ? 'dark' : 'light')
    try {
      updateTheme((theme) => ({
        mode: theme.mode === 'light' ? 'dark' : 'light',
      }))
      await AsyncStorage.setItem("appTheme", JSON.stringify(mode))
    } catch (error) {
      console.log("Failed to set Dark Mode")
    }
    console.log("Set theme to", await AsyncStorage.getItem("appTheme"))
  }

  const handleNotificationsSwitch = () => {
    console.log("Notifications!")
  }

  const handleMusicSwitch = () => {
    console.log("Music!")
  }

  return (
    <Overlay overlayStyle={styles.container} isVisible={visible} onBackdropPress={() => setVisible(false)} animationType="fade">
      <View style={styles.titleView}>
        <FontAwesomeIcon icon={faCog} color="gray" size={20}/>
        <Text style={styles.headingText}>Settings</Text>
        <FontAwesomeIcon icon={faCog} color="gray"size={20}/>
      </View>
      <SettingsBar label={"Dark Mode"} onPress={handleDarkModeSwitch} state={theme.mode === 'dark'}/>
      <SettingsBar label={"Notifications"} onPress={handleNotificationsSwitch}/>
      <SettingsBar label={"Zen Music"} onPress={handleMusicSwitch}/>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
        <FontAwesomeIcon style={{marginTop:2}} icon={faRightFromBracket} color="red" size={18}/>
      </TouchableOpacity>
    </Overlay>
  )
}

function SettingsBar({ label, onPress, state }) {
  const [checked, setChecked] = useState(state)
  const { theme } = useTheme()
  const styles = useStyles()

  const handleChange = () => {
    setChecked(!checked)
    onPress ? onPress() : null
  }

  return(
    <TouchableOpacity style={styles.settingsBar} onPress={handleChange}>
      <Text style={styles.settingsBarLabel}>{label}</Text>
      <Switch value={checked} style={{flex:1,transform:[{scale:1.5}]}} trackColor={{ false: "lightgray", true: "green" }} thumbColor={!checked ? "white" : "green"}
        onValueChange={handleChange} />
    </TouchableOpacity>
  )
}
  
const useStyles = makeStyles((theme, props) => ({
  container: {
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:15,
    padding:15
  },
  titleView:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center"
  },
  headingText:{
    fontFamily:"fontBold",
    fontSize:30,
    marginHorizontal:10,
    color: theme.colors.textPrimary
  },
  logoutButton:{
    borderRadius:50,
    paddingVertical:10,
    paddingHorizontal:15,
    width: 170,
    marginHorizontal:8,
    marginVertical:10,
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
    borderColor:"red",
    borderWidth:2,
    borderStyle:"solid"
  },
  logoutText:{
    color:"red",
    marginRight:15,
    fontSize:20,
    fontFamily:"fontRegular"
  },
  settingsBar:{
    alignItems: 'center',
    justifyContent: 'center',
    flex:0, 
    width:"65%",
    flexDirection:"row", 
    borderRadius:50, 
    marginVertical:10, 
    padding:3, 
    paddingHorizontal:20,
    backgroundColor:theme.colors.secondary
  },
  settingsBarLabel:{
    flex:5,
    fontFamily:"fontBold",
    fontSize:20,
    color:theme.colors.textSecondary,
    marginRight:10,
    textShadowColor:"black",
    shadowOpacity:3,
    shadowColor:"black"
  }
}));