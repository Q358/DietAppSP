import React from "react";
import { StyleSheet, Text, View, Button, Image, Dimensions, TouchableOpacity, Alert } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBiking, faDumbbell, faFaceGrinBeamSweat, faHourglass, faPersonBiking, faPersonRunning, faTrophy, faWalking} from '@fortawesome/free-solid-svg-icons';
import Onboarding from "react-native-onboarding-swiper";

var  trophyColorSymbols;
var trophy1Color, trophy2Color, trophy3Color, trophy4Color, trophy5Color, trophy6Color, trophy7Color, trophy8Color, trophy9Color;

trophyColorSymbols = "0123456789ABCDEF";
trophy1Color = "#";
trophy2Color = "#";
trophy3Color = '#';
trophy4Color = '#';
trophy5Color = "#";
trophy6Color = "#";
trophy7Color = '#';
trophy8Color = '#';
trophy9Color = '#';


for (var i=0; i<6; i++)
{
    trophy1Color += trophyColorSymbols[Math.floor(Math.random()*16)];
    trophy2Color += trophyColorSymbols[Math.floor(Math.random()*16)];
    trophy3Color += trophyColorSymbols[Math.floor(Math.random()*16)];
    trophy4Color += trophyColorSymbols[Math.floor(Math.random()*16)];
    trophy5Color += trophyColorSymbols[Math.floor(Math.random()*16)];
    trophy6Color += trophyColorSymbols[Math.floor(Math.random()*16)];
    trophy7Color += trophyColorSymbols[Math.floor(Math.random()*16)];
    trophy8Color += trophyColorSymbols[Math.floor(Math.random()*16)];
    trophy9Color += trophyColorSymbols[Math.floor(Math.random()*16)];
}

var leftMarginMovementTrophy2;

leftMarginMovementTrophy2 = Math.floor(Math.random()*200);

var bottomMarginmovementTrophy2;

bottomMarginmovementTrophy2 = Math.floor(Math.random()*200);

export default function TrophiesDB({icons, style, size, onPress}){
    const trophiesList = icons?.map((icon) => {
    let color;
    switch(icon) {
        case "trophy1":
            trophyIcon = faTrophy
            color = trophy1Color 
            break;
        case "trophy2":
            trophyIcon = faTrophy
            color = trophy2Color 
            break;
        case "trophy3":
            trophyIcon = faTrophy
            color = trophy3Color 
            break;
        case "trophy4":
          trophyIcon = faTrophy
          color = trophy4Color 
          break;
        case "trophy5":
          trophyIcon = faTrophy
          color = trophy5Color 
          break;
        case "trophy6":
            trophyIcon = faTrophy
            color = trophy6Color 
            break;
        case "trophy7":
            trophyIcon = faTrophy
            color = trophy7Color 
            break;
        case "trophy8":
          trophyIcon = faTrophy
          color = trophy8Color 
          break;
        
        case "trophy9":
          trophyIcon = faTrophy
          color = trophy9Color 
          break;
            default:
            break;
    }
    return {trophyIcon, color}
    })
    const trophyComponents = trophiesList?.map(({ trophyIcon, color }, index) => {
        return (
          
            <FontAwesomeIcon icon = {trophyIcon} size = {size} color = {color} key={index}></FontAwesomeIcon>
            
        )
        
    })
        return (
          <TouchableOpacity 
            onPress ={() => onPress()}>
            {trophyComponents}
          </TouchableOpacity>
        )
    

}

const styles = StyleSheet.create({
    container: {
      //flex: 1,
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
    trophy1: {
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center"
    },
    trophy2: {
      marginLeft: leftMarginMovementTrophy2,
      marginBottom: bottomMarginmovementTrophy2
    },

});