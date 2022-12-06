import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Text, View } from "react-native";

export default function FoodItem({ icon, color, text }) {
  return (
    <View style={{backgroundColor:"white",flexDirection:"row", alignItems:"center", borderColor:"white", 
      borderRadius:15, borderWidth:1, padding:5, paddingHorizontal:10, width:"80%", marginVertical:10}}>
      <FontAwesomeIcon icon={icon} color={color} size={60}/>
      <Text style={{fontFamily:"fontMedium", fontSize:15,  marginLeft:20}}>{text}</Text>
    </View>
  )  
}