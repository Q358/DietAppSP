import { faRadiation, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useRef, useEffect, useFonts } from "react";
import { Animated, StyleSheet, View, PanResponder, LogBox, TouchableOpacity, Dimensions, useWindowDimensions } from "react-native";
import TrophiesDB from "../components/TrophiesDB";




var  trophyColorSymbols;
var trophy1Color, trophy2Color;

trophyColorSymbols = "0123456789ABCDEF";
trophy1Color = "#";
trophy2Color = "#";

for (var i=0; i<6; i++)
{
	trophy1Color += trophyColorSymbols[Math.floor(Math.random()*16)];
  trophy2Color += trophyColorSymbols[Math.floor(Math.random()*16)];
}

var leftMarginMovementTrophy2;
leftMarginMovementTrophy2 = Math.floor(Math.random()*200);
var bottomMarginmovementTrophy2;
bottomMarginmovementTrophy2 = Math.floor(Math.random()*200);

var horizontalMarginMovementTrophy3;
horizontalMarginMovementTrophy3 = Math.floor(Math.random()*100);
var topMarginmovementTrophy3;
topMarginmovementTrophy3 = Math.floor(Math.random()*100);

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Trophies = ({navigation}) => {
  
  

  var completedMessage = () => {
    Alert.alert("Completed");
  }
  
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, [])
  const pan = useRef(new Animated.ValueXY()).current;
  const touchThreshold = 20;
  const panResponder1 = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder : () => false,
    onMoveShouldSetPanResponder : (e, {dx, dy} ) => {
        // const = gestureState;

        return (Math.abs(dx) > touchThreshold) || (Math.abs(dy) > touchThreshold);
    },
      onPanResponderMove: Animated.event([
        null,
        { dx: pan.x, dy: pan.y }
      ], {useNativeDriver: false}
      ),
    
      onPanResponderRelease: () => {
        Animated.spring(pan, { toValue: { x: 0, y: 0 } }).start();
      }
      
    })
  
  ).current;

  const size = 80
  return (
    <View style={styles.container}>

      
      <Animated.View
        style={{
          ...styles.firstTrophyRow , transform: [{ translateX: pan.x }, { translateY: pan.y }]
        }}
        {...panResponder1.panHandlers}
      >
        <View style={{flexDirection:"row"}}>
          <Trophy background="green" color="yellow" onPress={()=> navigation.navigate("Registration")} size={size} icon={faRadiation}/>
          <Trophy background="green" color="yellow" onPress={()=> navigation.navigate("Diet")} size={size}/>
          <Trophy background="green" color="yellow" onPress={()=> navigation.navigate("Diet")} size={size}/>
        </View>
        <View style={{flexDirection:"row"}}>
          <Trophy background="orange" color="green" onPress={()=> navigation.navigate("Diet")} size={size}/>
          <Trophy background="orange" color="green" onPress={()=> navigation.navigate("Diet")} size={size}/>
          <Trophy background="orange" color="green" onPress={()=> navigation.navigate("Diet")} size={size}/>
        </View>
        <View style={{flexDirection:"row"}}>
          <Trophy background="black" color="white" onPress={()=> navigation.navigate("Diet")} size={size}/>
          <Trophy background="black" color="white" onPress={()=> navigation.navigate("Diet")} size={size}/>
          <Trophy background="black" color="white" onPress={()=> navigation.navigate("Diet")} size={size}/>
        </View>
      </Animated.View>
    </View>
  );
}

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop:windowHeight/4, 
    margin: 17.5
  },

  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold"
  },
  firstTrophyRow: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-between",
       
  },

  secondTrophyRow: {
    marginTop: windowHeight/6,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"    
  },
  
  thirdTrophyRow: {
    marginTop:0,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"

  },


  });

  export default Trophies;

function Trophy({ background, color, onPress, size, icon }) {
  return(
    <TouchableOpacity onPress={onPress ? () => onPress() : null} style={{backgroundColor:background, color:color, borderRadius:50, padding:10, margin:10}}>
      <FontAwesomeIcon icon={icon ? icon : faTrophy} size={size} color={color}/>
    </TouchableOpacity>
  )
}