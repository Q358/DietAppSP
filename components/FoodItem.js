import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Text, View } from "react-native";

export default function FoodItem({ icon, color, meal, portion }) {
  return (
    <View style={{backgroundColor:"white",flexDirection:"row", alignItems:"center", borderColor:"white", 
      borderRadius:15, borderWidth:1, padding:5, paddingHorizontal:10, paddingVertical:10, width:"80%", marginVertical:10}}>
      <FontAwesomeIcon icon={icon} color={color} size={60}/>
      <Text style={{fontFamily:"fontMedium", fontSize:15,  marginLeft:20, width:"100%",flex:1, flexWrap:"wrap"}}>{meal}</Text>
      <Text style={{fontFamily:"fontMedium", fontSize:15,  marginLeft:20, width:"100%",flex:1, flexWrap:"wrap"}}>{portion}</Text>
    </View>
  )  
}