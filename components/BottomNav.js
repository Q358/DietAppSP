import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Alert, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";
import { faPersonRunning } from "@fortawesome/free-solid-svg-icons";
import { faBarcode } from "@fortawesome/free-solid-svg-icons";

export default function BottomNav({ navigation }) {
  const size = useWindowDimensions();
  const width = size.width;
  const height = size.height;

  const styles = StyleSheet.create({
    container: {
      flexDirection:"row",
      position: 'absolute',
      height: 90,
      top: height * .88,
      paddingTop:10
    },
    navButton: {
      marginVertical:15,
      marginHorizontal:50
      //marginHorizontal:65
    }
  })
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navButton} onPress={()=>navigation.navigate("Diet")}>
        <FontAwesomeIcon icon={faAppleWhole} size={50}/>
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:50, backgroundColor:"white", padding:15}} onPress={()=>Alert.alert("Barcode Reader!")}>
        <FontAwesomeIcon icon={faBarcode} size={50}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={()=>navigation.navigate("Workout")}>
        <FontAwesomeIcon icon={faPersonRunning} size={50}/>
      </TouchableOpacity>
    </View>
  )
}