import { faAppleWhole, faBeer, faBreadSlice, faCarrot, faCheckSquare, faCheese, faCookieBite, faDrumstickBite, faEgg, faFish, faHollyBerry, faKiwiBird, faSmoking, faSquare, faWineGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { makeStyles, useTheme } from "@rneui/themed";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export default function FoodBlock({ icons, style, size, onPress, horizontal, text, textStyle }) {
  const styles = useStyles()
  const iconsList = getIcons(icons)
  const iconComponents = iconsList?.map(({ iconName, color }, index) => {
    return (
      <View style={{backgroundColor: color, padding: size * 0.07, margin: size * 0.03, borderRadius: 8}} key={index}>
        <FontAwesomeIcon icon = {iconName} color = {"white"} size = {size * 0.25} key={index}/>
      </View>
    )
  })

  return (
    <View>
      <TouchableOpacity  
        style = {{
        ...styles.box, width: horizontal ? null : size, height: horizontal ? null : size, 
          paddingVertical: size * 0.03, paddingHorizontal: size * 0.03, flexWrap: horizontal ? "nowrap" : "wrap",  ...style
        }} 
        onPress ={onPress}
      >
        {iconComponents}
      </TouchableOpacity>
      {text && <Text style={{textAlign:"center",fontFamily:"fontBold", fontSize: size * 0.12, ...textStyle}}>{text}</Text>}
    </View>
  )
}

export function FoodRow({ icons, onPress }){
  const [done, setDone] = useState(false)
  const styles = useStyles()
  const { theme } = useTheme()

  const iconsList = getIcons(icons)

  return(
    <View style={{...styles.rowBox, backgroundColor:done ? "lightgray" : theme.colors.secondary}}>
      <TouchableOpacity onPress={onPress} style={{flexDirection:"row", width: "80%", justifyContent: "space-evenly"}}>
        {iconsList.map(({ iconName, color }, index)=> (
          <FontAwesomeIcon icon = {iconName} color = {color} size = {30} key={index}/>
        ))}
      </TouchableOpacity>
      <TouchableOpacity style={{padding:2, width:"20%"}} onPress={() => setDone(!done)}>
        <FontAwesomeIcon icon={done ? faCheckSquare : faSquare} color={done ? "#39E53D" : theme.colors.textSecondary} size={30}/>
      </TouchableOpacity>
    </View>
  )
}

const getIcons = (icons) => {
  const iconsList = icons?.map(( icon ) => {
    let color;
    switch (icon) {
      case "apple":
        iconName = faAppleWhole
        color = "#f02c24" 
        break;
      case "carrot":
        iconName = faCarrot
        color = "#f09b24"
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
        color = "#43ccc5" 
        break;
      case "meat":
        iconName = faDrumstickBite
        color = "#cc4343" 
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
        case "egg":
          iconName = faEgg
          color = "#0080FB" 
          break;  
      default:
        break;
    }
      return {iconName, color}
    })
    return iconsList
}

const useStyles = makeStyles((theme) => ({
  box:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#4D4D4D",
    borderRadius: 15,
    flexDirection:"row",
  },
  rowBox: {
    borderWidth: 3,
    borderColor: theme.colors.tertiary,
    borderRadius: 8,
    padding: 10,
    width: "100%",
    flexDirection: "row",
    elevation: 15
  }
}))