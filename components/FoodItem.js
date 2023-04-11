import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useTheme } from "@rneui/themed";
import { Text, View, TouchableOpacity } from "react-native";

// Should this file be renamed?
export default function FoodItem({ icon, color, meal, portion, backColor }) {
  return (
    <View style={{backgroundColor:"#e0e0e0",flexDirection:"row", alignItems:"center", borderColor:"white", 
      borderRadius:15, borderWidth:1, padding:5, paddingHorizontal:10, paddingVertical:10, width:"100%", marginVertical:10}}>
      <View style={{backgroundColor: backColor, padding: 10, borderRadius:40}}>
        <FontAwesomeIcon icon={icon} color={color} size={30}/>
      </View>
      <View style={{width:"80%", marginLeft: 10,justifyContent:"center"}}>
        <Text style={{fontFamily:"fontMedium", fontSize:20, flexGrow:1, flexWrap:"wrap"}}>{meal}</Text>
        <Text style={{fontFamily:"fontMedium", fontSize:18}}>  {portion}</Text>
      </View>
    </View>
  )  
}

export function BackButton({ navigation, title }){
  const { theme } = useTheme()
  return(
    <View style={{flexDirection:"row", marginTop: 75, alignItems:"center", justifyContent:"space-between", width:"80%", marginBottom: 10}}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <FontAwesomeIcon icon={faAngleLeft} size = {30} color = {'grey'}/>
      </TouchableOpacity>
      <Text style = {{textAlign: "center", color:'white', fontFamily:'fontBold', fontSize:30}}>{title}</Text>
      <FontAwesomeIcon icon={faAngleLeft} size = {30} color = {theme.colors.primary}/>
    </View>
  )
}