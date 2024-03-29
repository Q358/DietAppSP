import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ScrollView, SafeAreaView} from "react-native";
import { useFonts } from 'expo-font';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft, faAppleWhole, faBreadSlice, faCarrot, faCoffee, faEgg, faMugSaucer, faPlus } from "@fortawesome/free-solid-svg-icons";
import FoodBlock from "../components/FoodBlock"
import { makeStyles } from "@rneui/themed";
import FoodItem from "../components/FoodItem";
import { useAuth } from "../config/authContext";
import MealBlock from "../components/MealBlock";

export default function Snacks({ navigation }) {

  const {userData} = useAuth()
  const styles = useStyles()
  const day = new Date().getDay()
  const morning_snack = userData?.dietWeekly[day]?.morning_snack
  const afternoon_snack = userData?.dietWeekly[day]?.afternoon_snack
  
  return (
    <View style={{...styles.container}}>
      <Text style = {{marginTop: 75, textAlign: "center", marginLeft: 15, color:'white', fontFamily:'fontBold', fontSize:30}}>Today's Snacks</Text>
      <View style = {{marginRight: 300, marginTop: -30, marginBottom:10}}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <FontAwesomeIcon icon={faAngleLeft} size = {30} color = {'grey'}/>
      </TouchableOpacity>
    </View>
    <Text style = {{marginBottom: 0, marginTop:20 ,color:'white', fontFamily:'fontBold', fontSize:30, marginRight:150}}>Morning</Text>
    <ScrollView contentContainerStyle={{backgroundColor:"white", alignItems:"center", borderColor:"white", flexGrow:1,
      borderRadius:15, borderWidth:1, padding:5, paddingHorizontal:10, width:"80%", marginVertical:10, height:300}}>
        {Object.keys(morning_snack).map((val, idx) => 
        <MealBlock backColor = "#00704A" icon={faAppleWhole} color="white" meal={val} portion={morning_snack[val]} key={idx}/>
        )}
    </ScrollView>
    <Text style = {{marginBottom: 0, marginTop:20 ,color:'white', fontFamily:'fontBold', fontSize:30, marginRight:150}}>Afternoon</Text>
    <ScrollView contentContainerStyle={{backgroundColor:"white", alignItems:"center", borderColor:"white", flexGrow:1,
      borderRadius:15, borderWidth:1, padding:5, paddingHorizontal:10, width:"80%", marginVertical:10, height:300}}>
        {Object.keys(afternoon_snack).map((val, idx) => 
        <MealBlock backColor = "#00704A" icon={faAppleWhole} color="white" meal={val} portion={afternoon_snack[val]} key={idx}/>
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
