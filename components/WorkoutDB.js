import React from "react";
import { StyleSheet, Text, View, Button, Image, Dimensions, TouchableOpacity, Alert } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBiking, faDumbbell, faFaceGrinBeamSweat, faHourglass, faPersonBiking, faPersonRunning, faTrophy, faWalking} from '@fortawesome/free-solid-svg-icons';
import Onboarding from "react-native-onboarding-swiper";
import { text } from "@fortawesome/fontawesome-svg-core";


export default function WorkoutDB(workouts){
    return (workouts?.map(( Exercise ) => 
    {
        let backgroundColor, iconName, color, title, subtitle;
        switch(Exercise){
        case "Running":
          backgroundColor = '#fff'
          iconName = faPersonRunning
          color = '#BC62FF'
          title = "Running"
          subtitle = "3 Miles"
        break;
        case "Indoor Biking":
          backgroundColor = '#fff'
          iconName = faPersonBiking
          color = '#BC62FF'
          title = "Indoor Biking"
          subtitle = "30 Mins"
        break;
        case "Dumbell Press":
          backgroundColor = '#fff'
          iconName = faDumbbell
          color = '#BC62FF'
          title = "Dumbell Press"
          subtitle = "3x10 Reps"
        break;
        case "Pushups":
          backgroundColor = '#fff'
          iconName = faFaceGrinBeamSweat
          color = '#BC62FF'
          title = "Pushups"
          subtitle = "Until Failure"
        default:
        break;
        }
        return {backgroundColor, iconName, color, title, subtitle}
    }))

    

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
      marginLeft: (Dimensions.get('window').width)/4 ,
    },
    thirdIconStyle: {
      flex:1,
      backgroundColor:'white',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: (Dimensions.get('window').width)/3 ,
    },
    fourthIconStyle: {
      flex:1,
      backgroundColor:'white',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: (Dimensions.get('window').width)/8 ,
    },

});