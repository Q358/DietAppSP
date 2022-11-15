import React from "react";
import { StyleSheet, Text, View, Button, Image, Dimensions, TouchableOpacity, Alert, SafeAreaView, StatusBar } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBiking, faAngleLeft, faCheckSquare, faDumbbell, faFaceGrinBeamSweat, faPersonBiking, faPersonRunning, faPersonShelter, faPersonWalking, faSquare, faTrophy, faWalking, faX} from '@fortawesome/free-solid-svg-icons';
import { useFonts } from "expo-font";
import { useState } from "react";
import WorkoutDB from "../components/WorkoutDB";
import { ListItem } from "@rneui/base";



export default function Workout({ navigation }) {
  const exercises = WorkoutDB(["Running", "Indoor Biking", "Dumbell Press", "Pushups"])
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent/>
      <View style={{flexDirection:"row", alignItems:"center", marginTop:20, width:"85%", justifyContent:"space-between"}}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <FontAwesomeIcon icon={faAngleLeft} color="gray" size={30}/>
        </TouchableOpacity>
        <Text style={{color:"white", fontFamily:"UbuntuBold", fontSize:30}}>Workouts</Text>
        <FontAwesomeIcon icon={faAngleLeft} color="lightgreen" />
      </View>
      {exercises.map((item, key)=>
        <WorkoutItem exercise={item} key={key} size={30}/>
      )}
    </SafeAreaView>
  )
}

function WorkoutItem({ exercise, size }){
  const [done, setDone] = useState(false)
  return(
    <View style={{...styles.exerciseBox, backgroundColor:done ? "lightgray" : "white"}} >
      <View style={{backgroundColor:done ? "#39E53D" : "#BC62FF", padding:5, borderRadius:10 }}>
        <FontAwesomeIcon icon={exercise.iconName} color={"white"} size={size}/>
      </View>
      <View style={{width:"70%"}}>
        <Text style={{...styles.exerciseTitle, fontSize:size*0.6}}>{exercise.title}</Text>
        <Text style={{...styles.exerciseSubtitle, fontSize:size*0.4, color:"gray"}}>{exercise.subtitle}</Text>
      </View>
      <TouchableOpacity onPress={() => setDone(!done)}>
        <FontAwesomeIcon icon={done ? faCheckSquare : faSquare} color={done ? "#39E53D" : null} size={size}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgreen',
      alignItems: 'center',
      paddingVertical:30
    },
    exerciseBox:{
      borderRadius:20,
      backgroundColor:"white",
      flexDirection:"row",
      paddingHorizontal:15,
      paddingVertical:20,
      alignItems:"center",
      justifyContent:"space-between",
      marginVertical:20,
      width:"85%"
    },
    exerciseTitle:{
      marginHorizontal:5,
      fontFamily:"UbuntuMedium"
    },
    exerciseSubtitle:{
      marginHorizontal:5,
      justifyContent: "space-between",
      fontFamily:"Ubuntu"
    },
});
