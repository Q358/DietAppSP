import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { faAppleWhole, faHouse, faUserFriends } from "@fortawesome/free-solid-svg-icons"
import { faPersonRunning } from "@fortawesome/free-solid-svg-icons"
import { faBarcode } from "@fortawesome/free-solid-svg-icons"
import { Avatar, Icon, makeStyles, useTheme } from "@rneui/themed"
import { useAuth } from "../config/authContext"

export default function BottomNav({ navigation, currentPage }) {
  const styles = useStyles()
  const { theme } = useTheme()

  return (
    <View style={styles.container}>
      <NavItem page="Friends" icon={faUserFriends} currentPage={currentPage} navigation={navigation}/>
      <NavItem page="Diet" icon={faAppleWhole} currentPage={currentPage} navigation={navigation}/>
      <NavItem page="Home" icon={faHouse} currentPage={currentPage} navigation={navigation}/>
      <NavItem page="Workout" icon={faPersonRunning} currentPage={currentPage} navigation={navigation}/>
      <NavItem page="Profile" currentPage={currentPage} navigation={navigation}/>
    </View>
  )
}

function NavItem({ page, icon, currentPage, navigation }){
  const { userAvatar } = useAuth()
  const styles = useStyles()
  const { theme } = useTheme()

  return(
    <View style={styles.navButton}>
      <TouchableOpacity onPress={() => navigation.navigate(page)}>
        {page == 'Profile' ? (
          <Avatar style={styles.avatar} size={"large"} rounded source={userAvatar}/>
        ) : (
          <FontAwesomeIcon icon={icon} size={40} color={theme.colors.textPrimary}/>
        )}
      </TouchableOpacity>
      <Icon type="ionicon" name="remove-outline" color={currentPage == page ? theme.colors.textPrimary : theme.colors.primary}/>
    </View>
  )
}

const useStyles = makeStyles((theme) => ({
    container: {
      flexDirection:"row",
      backgroundColor: theme.colors.primary,
      borderTopWidth:3,
      borderColor: theme.colors.tertiary,
      marginTop:20,
      width:"80%",
      justifyContent:"space-between",
      alignItems:"center",
      paddingVertical:3
    },
    navButton: {
      marginTop:10,
      justifyContent:"center",
      alignItems:"center"
    },
    avatar:{
      width:40,
      height:40,
      borderRadius:20,
      borderWidth:1,
      borderColor:"white"
    }
  }))
