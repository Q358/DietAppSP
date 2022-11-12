import { faCog, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Overlay, Switch } from "@rneui/themed";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../config/authContext";

export default function SettingsModal({ visible, setVisible }) {
  const { logout } = useAuth()

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
  const handleDarkModeSwitch = () => {
    console.log("Dark Mode!")
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
      <SettingsBar label={"Dark Mode"} onPress={handleDarkModeSwitch}/>
      <SettingsBar label={"Notifications"} onPress={handleNotificationsSwitch}/>
      <SettingsBar label={"Zen Music"} onPress={handleMusicSwitch}/>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={{color:"red", marginHorizontal:10}}>Logout</Text>
        <FontAwesomeIcon icon={faRightFromBracket} color="red"/>
      </TouchableOpacity>
    </Overlay>
  )
}

function SettingsBar({ label, onPress }) {
  const [checked, setChecked] = useState()

  const handleChange = () => {
    setChecked(!checked)
    onPress ? onPress() : null
  }

  return(
    <TouchableOpacity style={styles.settingsBar} onPress={handleChange}>
      <Text style={{flex:5,fontFamily:"UbuntuBold", fontSize:20, marginRight:10, color:"white", marginRight:10}}>{label}</Text>
      <Switch value={checked} style={{flex:1,transform:[{scale:1.5}]}} trackColor={{ false: "lightgray", true: "green" }} thumbColor={!checked ? "white" : "green"}
        onValueChange={handleChange} />
    </TouchableOpacity>
  )
}
  
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
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
    fontFamily:"UbuntuBold",
    fontSize:30,
    marginHorizontal:10
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
  settingsBar:{
    alignItems: 'center',
    justifyContent: 'center',
    flex:0, 
    width:"65%",
    flexDirection:"row", 
    backgroundColor:"lightgreen", 
    borderRadius:50, 
    marginVertical:10, 
    padding:3, 
    paddingHorizontal:20}
});