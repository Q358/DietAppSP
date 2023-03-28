import { Text, View, TouchableOpacity, ScrollView, SafeAreaView} from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAppleWhole, faBreadSlice, faCarrot, faCoffee, faEgg, faMugSaucer, faPlus } from "@fortawesome/free-solid-svg-icons";
import FoodBlock from "../components/FoodBlock"
import { makeStyles } from "@rneui/themed";
import FoodItem, { BackButton } from "../components/FoodItem";
import { useAuth } from "../config/authContext";
import MealBlock from "../components/MealBlock";

export default function Lunch({ navigation }) {

  const {userData} = useAuth()
  const styles = useStyles()
  const day = new Date().getDay()
  const lunchMeals = userData?.dietWeekly[day]?.lunch
  
  return (
    <View style={{...styles.container}}>
      <BackButton navigation={navigation} title={"Today's Lunch"}/> 
      <ScrollView contentContainerStyle={{backgroundColor:"white", alignItems:"center", borderColor:"white", flexGrow:1,
        borderRadius:15, borderWidth:1, padding:5, paddingHorizontal:10, width:"80%", marginVertical:10, height:500}}>
          {lunchMeals && Object.keys(lunchMeals).map((val, idx) => 
          <FoodItem backColor = "#00704A" icon={faAppleWhole} color="white" meal={val} portion={lunchMeals[val]} key={idx}/>
          )}
      </ScrollView>
      <TouchableOpacity style={{...styles.addFoodButton}}>
        <FontAwesomeIcon icon = {faPlus} size = {40} color = {'white'}/>
      </TouchableOpacity>
    </View>
  )
}
  
const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center'
  },
  addFoodButton: {
    width: 300,
    height: 60,
    backgroundColor: 'grey',
    marginTop: 80,
    borderRadius: 12, 
    paddingVertical:10,
    alignItems:"center"
  },
}))
