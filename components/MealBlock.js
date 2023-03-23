import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Text, View } from "react-native";
import { Avatar, LinearProgress, makeStyles, useTheme } from "@rneui/themed";

//const styles = useStyles()
export default function MealBlock({ icon, color, meal, portion, backColor }) {
  const styles = useStyles()
  return (
    <View style = {{flexDirection:"row", marginTop:30}}>
      <View style={{ backgroundColor: backColor, padding: 20, borderRadius:40, }}>
      <FontAwesomeIcon icon={icon} color={color} size={20}/>
      </View>
      <Text style={{fontFamily:"fontMedium", fontSize:15,  marginLeft:20, marginRight:0 , width:"100%", flex:1, marginTop:20,}}>{meal}</Text>
      <Text style={{fontFamily:"fontMedium", fontSize:15,  marginLeft:10, width:"100%", flex:1, marginTop:20}}>{portion}</Text>
    </View>
  )  
}

const useStyles = makeStyles((theme) => ({
  icon:{
    borderColor:"green",
  },
}));