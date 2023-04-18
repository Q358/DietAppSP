import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ScrollView, SafeAreaView} from "react-native";
import { useFonts } from 'expo-font';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAppleWhole, faBreadSlice, faCarrot, faCoffee, faEgg, faMugSaucer, faPlus } from "@fortawesome/free-solid-svg-icons";
import FoodBlock from "../components/FoodBlock"
import { makeStyles, useTheme } from "@rneui/themed";
import FoodItem, { BackButton } from "../components/FoodItem";
import { useAuth } from "../config/authContext";
import MealBlock from "../components/MealBlock";

export default function Dinner({ navigation }) {

  const {userData} = useAuth()
  const {theme} = useTheme()
  const styles = useStyles()
  const day = new Date().getDay()
  const dinnerMeals = userData?.dietWeekly[day]?.dinner

  return (
    <View style={{...styles.container}}>
      <BackButton navigation={navigation} title={"Today's Dinner"}/>
      <View style={{backgroundColor:"white", alignItems:"center", borderColor:"white", flexGrow:1,
        borderRadius:15, borderWidth:1, padding:5, paddingHorizontal:10, width:"80%", marginVertical:10, overflow:"scroll",flex:1}}>
        {dinnerMeals && Object.keys(dinnerMeals).map((val, idx) => 
        <FoodItem icon={faAppleWhole} color="white" backColor="green" meal={val} portion={dinnerMeals[val]} key={idx}/>
        )}
      </View>
      <TouchableOpacity style={{...styles.addFoodButton}}>
        <FontAwesomeIcon icon = {faPlus} size = {40} color = {'white'}/>
      </TouchableOpacity>
    </View>
  )
}
  
const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: '#29a442',
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
