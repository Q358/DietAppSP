import { faAppleWhole, faBreadSlice, faCarrot, faCheese, faCookieBite, faDrumstickBite, faFish, faSmoking, faWineGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export default function FoodBlock({ icons, style, size, onPress }) {

  const iconsList = icons?.map(( icon ) => {
  let color;
  switch (icon) {
    case "apple":
      iconName = faAppleWhole
      color = "red" 
      break;
    case "carrot":
      iconName = faCarrot
      color = "orange" 
      break;
    case "cheese":
      iconName = faCheese
      color = "#E0DA00" 
      break;
    case "bread":
      iconName = faBreadSlice
      color = "#906A19" 
      break;
    case "fish":
      iconName = faFish
      color = "blue" 
      break;
    case "meat":
      iconName = faDrumstickBite
      color = "pink" 
      break;
    case "wine":
      iconName = faWineGlass
      color = "purple" 
      break;
    case "smoke":
      iconName = faSmoking
      color = "#74625A" 
      break;
    case "cookie":
      iconName = faCookieBite
      color = "#3C2000" 
      break;
    default:
      break;
  }
    return {iconName, color}
  })

  const iconComponents = iconsList?.map(({ iconName, color }, index) => {
    return (
      <View style={{backgroundColor: color, padding: size * 0.07, margin: size * 0.03, borderRadius: 8}} key={index}>
        <FontAwesomeIcon icon = {iconName} color = {"white"} size = {size * 0.25} key={index}/>
      </View>
    )
  })

  return (
    <TouchableOpacity style = {{...styles.box, width: size, height: size, paddingVertical: size * 0.03, paddingHorizontal: size * 0.03, style}} 
      onPress ={onPress}>
      {iconComponents}
    </TouchableOpacity>
  )
}
  
const styles = StyleSheet.create({
  box:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#4D4D4D",
    borderRadius: 15,
    flexWrap:"wrap",
    flexDirection:"row",
  },
});