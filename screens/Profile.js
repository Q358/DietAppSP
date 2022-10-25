import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Avatar } from "@rneui/themed";
import { Alert } from "react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../config/authContext";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";


export default function Profile({ navigation }) {

  const { user, logout } = useAuth()

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
      <Text>{user?.displayName}</Text>
      <Avatar />
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={{marginHorizontal:10}}>Logout</Text>
        <FontAwesomeIcon icon={faRightFromBracket} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  button: {
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
})