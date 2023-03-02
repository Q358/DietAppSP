import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../config/authContext";
import { getData, setData } from "../config/firebase";

export default function Lunch() {
  const { user, userData } = useAuth()
  const d = new Date()
  const day = d.getDay()
  const week = (d.getMonth() + 1) + '_' + (d.getDate() - day) + '_' + d.getFullYear()
  console.log(week)
  const lunchMeals = userData?.dietWeekly[day]?.lunch
  console.log(lunchMeals)
  return (
    <View style={styles.container}>
      <Text>Lunch</Text>
      {Object.keys(lunchMeals).map((val, idx) => 
        <Text key={idx}>{val} - {lunchMeals[val]}</Text>
      )}
      <Text>{JSON.stringify(lunchMeals)}</Text>
      <TouchableOpacity onPress={() => setData(`diet`,week,{lunch:{food:['sandwich', 'chips']}},user)}>
        <Text>Add Data</Text>
      </TouchableOpacity>
    </View>
  )
}
  //diets/diet/day1/lunch
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
});