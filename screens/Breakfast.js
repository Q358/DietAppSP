import { Text, View, TouchableOpacity, SafeAreaView, ScrollView} from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft, faAppleWhole, faBreadSlice, faCarrot, faCoffee, faEgg, faMugSaucer, faPlus } from "@fortawesome/free-solid-svg-icons";
import FoodBlock from "../components/FoodBlock"
import { makeStyles } from "@rneui/themed";
import FoodItem from "../components/FoodItem";
import { useAuth } from "../config/authContext";
import MealBlock from "../components/MealBlock";

export default function Breakfast({ navigation }) {

  const {userData} = useAuth()
  const styles = useStyles()
  const day = new Date().getDay()
  const breakfastMeals = userData?.dietWeekly[day]?.breakfast

  return (
    <View style={{...styles.container}}>
      <Text style = {{marginTop: 45, textAlign: "center", marginLeft: 15, color:'white', fontFamily:'fontBold', fontSize:30}}>Today's Breakfast</Text>
      <View style = {{marginRight: 300, marginTop: -30, marginBottom:10}}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <FontAwesomeIcon icon={faAngleLeft} size = {30} color = {'grey'}/>
      </TouchableOpacity>
      </View>
    <ScrollView contentContainerStyle={{backgroundColor:"white", alignItems:"center", borderColor:"white", flexGrow:1,
      borderRadius:15, borderWidth:1, padding:5, paddingHorizontal:10, width:"80%", marginVertical:10, flex:1}}>
        {Object.keys(breakfastMeals).map((val, idx) => 
        <MealBlock backColor = "#0080FB" icon={faEgg} color="white" meal={val} portion={breakfastMeals[val]} key={idx}/>
        )}
    </ScrollView>
      {/* <FoodItem icon={faBreadSlice} color="brown" text="A slice of multigrain toast"/> */}
      {/* <FoodItem icon={faAppleWhole} color="red" text="A whole apple"/>
      <FoodItem icon={faCoffee} color="purple" text="A cup of black coffee"/>
      <FoodItem icon={faEgg} color="blue" text="A boiled egg"/>
      <FoodItem icon={faCarrot} color="orange" text="Two carrot sticks"/> */}
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
