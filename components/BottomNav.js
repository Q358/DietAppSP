import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons"
import { faPersonRunning } from "@fortawesome/free-solid-svg-icons"
import { faBarcode } from "@fortawesome/free-solid-svg-icons"
import { makeStyles } from "@rneui/themed"

export default function BottomNav({ navigation }) {
  const styles = useStyles()

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navButton} onPress={()=>navigation.navigate("Diet")}>
        <FontAwesomeIcon icon={faAppleWhole} size={50} color="white"/>
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop:5, borderRadius:50, backgroundColor:"white", padding:15, height:80}} onPress={()=>navigation.navigate("Barcode")}>
        <FontAwesomeIcon icon={faBarcode} size={50} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={()=>navigation.navigate("Workout")}>
        <FontAwesomeIcon icon={faPersonRunning} size={50} color="white"/>
      </TouchableOpacity>
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
      justifyContent:"center",
      paddingVertical:3
    },
    navButton: {
      marginVertical:20,
      marginHorizontal:40
    }
  }))
