import { faAppleWhole, faBreadSlice, faBullseye, faCalendar, faCarrot, faCheese, faCookieBite, faDrumstickBite, faExclamation, faFish, faPerson, faSmoking, faUtensils, faWeightScale, faWineGlass, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TouchableOpacity, Dimensions } from "react-native";
import { StyleSheet, Text, View } from "react-native";


var offWhite = "#F4F0E0";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function RegistrationTitles({ sections, style, }) {

  const sectionsList = sections?.map(( section ) => {
  let color;
  switch (section) {
    case "Begin":
      iconName = faExclamation
      color = offWhite 
      title = "Begin"
      break;
    case "Date of Birth":
      iconName = faPerson
      color = offWhite 
      title = "Date Of Birth"
      break;
    case "Height":
      iconName = faPerson
      color = offWhite 
      title = "Height"
      break;
    case "Gender":
      iconName = faPerson
      color = offWhite
      title = "Gender"
      break;
    case "Current Weight":
      iconName = faWeightScale
      color = offWhite
      title = "Current Weight"
      break;
    case "Target Weight":
      iconName = faBullseye
      color = offWhite
      title = "Target Weight"
      break;
    case "Goal Date":
      iconName = faCalendar
      color = offWhite
      title = "Goal Date"
      break;
    case "Number of Meals":
      iconName = faUtensils
      color = offWhite
      title = "Number of Meals"
      break;
    case "Restrictions":
      iconName = faX
      color = offWhite
      title = "Restrictions"

      break;
    default:
      break;
  }
    return {iconName, title}
  })

  const iconComponents = sectionsList?.map(({ iconName }, index) => {
    return (
      <View style={{...styles.topButton}} key={index}>
        <FontAwesomeIcon icon = {iconName} size = {50} style = {{...styles.largeIcon, marginTop:windowHeight/160, marginLeft: windowWidth/32}} key={index}/>
      </View>
    )
  })

  const titleComponents = sectionsList?.map(({ title }, index) => {
    return (
      <View style={{...styles.topButton}} key={index}>
        <Text style = {{...styles.topButtontext, flexDirection: "row", marginTop:-windowHeight/10.5, marginLeft: windowWidth/4.25}}>{title}</Text>
      </View>
    )
  })

  return (
    <TouchableOpacity style = {{...styles.topButton, width: windowWidth/1.2, height: 100, style, flexDirection: "row", flexWrap: 'wrap'}}>
      {iconComponents}
      {titleComponents}
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
  topButtontext: {
    color: '#F4F0E0',
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: windowWidth/6.5,
  },
  topButton:{
    borderRadius:10,
    paddingHorizontal:0,
    width: windowWidth/1.2,
    height:100,
    backgroundColor: "#00704A",
    marginTop:windowHeight/6,
    padding:10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    //alignContent: 'space-between',
    alignContent: 'stretch',
    borderWidth: 5,
    borderColor: "#F4F0E0",
    justifyContent: "space-evenly",
  },
  largeIcon:{
    borderRadius:25,
    paddingHorizontal:0,
    width: 150,
    height:75,
    backgroundColor: "#00704A",
    marginVertical:windowHeight/20,
  },
});
