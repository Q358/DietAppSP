import React from "react";
import { StyleSheet, Text, View, Button, Image, Dimensions, TouchableOpacity, Alert } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBiking, faDumbbell, faFaceGrinBeamSweat, faPersonBiking, faPersonRunning, faPersonShelter, faPersonWalking, faTrophy, faWalking} from '@fortawesome/free-solid-svg-icons';
import { useFonts } from "expo-font";
import { useState } from "react";
import WorkoutDB from "../components/WorkoutDB";
import { ListItem } from "@rneui/base";



export default function Workout({ navigation }) {
  const [loaded] = useFonts({
    Ubuntu : require('../assets/fonts/Ubuntu-Medium.ttf'),
  });

  if (!loaded) {
    return null
  }

  var completedMessage = () => {
    Alert.alert("Completed");
  }



  const iconNames = new Map();
  iconNames.set(1, faPersonRunning);
  iconNames.set(2, faDumbbell);
  iconNames.set(3, faBiking);
  iconNames.set(4, faPersonWalking);

  const titleNames = new Map();
  titleNames.set(1, 'Running');
  titleNames.set(2, 'Dumbbell Press');
  titleNames.set(3, 'Station Bike');
  titleNames.set(4, 'Walking');
  
  const subtitleNames = new Map();
  subtitleNames.set(1, '3 miles');
  subtitleNames.set(2, '3x10 reps');
  subtitleNames.set(3, '30 Mins');
  subtitleNames.set(4, '3x10 Mins');


  return (
    <View style={styles.container}>
      <Onboarding bottomBarColor= {"white"}
      //onSkip={() => navigation.navigate("Home")}
      onDone= {() => navigation.navigate("Home")}
      
      pages={[
        {
          backgroundColor: '#fff',
          image:  <TouchableOpacity onPress={completedMessage}>
          <FontAwesomeIcon icon = {iconNames.get(1)} size = {100} color ={'#BC62FF'}/> 
        </TouchableOpacity>,
          title : <Text style={{fontFamily:"Ubuntu", fontSize:40, marginTop:-40}}>{titleNames.get(1)}</Text>,
          subtitle: <Text style={{fontFamily:"Ubuntu", fontSize:25, marginTop:20}}>{subtitleNames.get(1)}</Text>,
        },
        {
          backgroundColor: '#fff',
          image: <FontAwesomeIcon icon = {iconNames.get(2)} size = {100} color = {'#BC62FF'} style = {styles.secondIconStyle}></FontAwesomeIcon>,
          title: <Text style={{fontFamily:"Ubuntu", fontSize:40, marginTop:-40, marginLeft:(Dimensions.get('window').width)/4.5}}>{titleNames.get(2)}</Text>,
          subtitle: <Text style={{fontFamily:"Ubuntu", fontSize:25, marginTop:20, marginLeft:(Dimensions.get('window').width)/4.5}}>{subtitleNames.get(2)}</Text>, 
        },
        {
          backgroundColor: '#fff',
          image: <FontAwesomeIcon icon = {iconNames.get(3)} size = {100} color = {'#BC62FF'} style = {styles.thirdIconStyle}></FontAwesomeIcon>,
          title: <Text style={{fontFamily:"Ubuntu", fontSize:40, marginTop:-40, marginLeft:(Dimensions.get('window').width)/2.75}}>{titleNames.get(3)}</Text>,
          subtitle: <Text style={{fontFamily:"Ubuntu", fontSize:25, marginTop:20, marginLeft:(Dimensions.get('window').width)/2.75}}>{subtitleNames.get(3)}</Text>,
        },
        {
          backgroundColor: '#fff',
          image: <FontAwesomeIcon icon = {iconNames.get(4)} size = {100} color = {'#BC62FF'} style = {styles.fourthIconStyle}></FontAwesomeIcon>,
          title : <Text style={{fontFamily:"Ubuntu", fontSize:40, marginTop:-40, marginRight: (Dimensions.get('window').width)/8}}>{titleNames.get(4)}</Text>,
          subtitle: <Text style={{fontFamily:"Ubuntu", fontSize:25, marginTop:20, marginRight: (Dimensions.get('window').width)/8}}> {subtitleNames.get(4)}</Text>
        },
      ]}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    secondIconStyle: {
      flex:1,
      backgroundColor:'white',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: (Dimensions.get('window').width)/5 ,
    },
    thirdIconStyle: {
      flex:1,
      backgroundColor:'white',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: (Dimensions.get('window').width)/2.75 ,
    },
    fourthIconStyle: {
      flex:1,
      backgroundColor:'white',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: (Dimensions.get('window').width)/8 ,
    },

});