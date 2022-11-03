import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useRef, useEffect } from "react";
import { Animated, StyleSheet, View, PanResponder, LogBox } from "react-native";
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

const Trophies = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, [])
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder1 = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: pan.x, dy: pan.y }
      ]),
    
      onPanResponderRelease: () => {
        Animated.spring(pan, { toValue: { x: 0, y: 0 } }).start();
      }
    })
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.trophy1 , transform: [{ translateX: pan.x }, { translateY: pan.y }]
        }}
        {...panResponder1.panHandlers}
      > 
        <TrophiesDB icons = {["trophy1"]} size = {100} /> 
      </Animated.View>
      
      <Animated.View
        style={{
          ...styles.trophy2 , transform: [{ translateX: pan.x }, { translateY: pan.y }]
        }}
        {...panResponder1.panHandlers}
      >
        <TrophiesDB icons = {["trophy2"]} size = {100} /> 
      </Animated.View>

      <Animated.View
        style={{
          ...styles.trophy3 , transform: [{ translateX: pan.x }, { translateY: pan.y }]
        }}
        {...panResponder1.panHandlers}
      >
        <TrophiesDB icons = {["trophy3"]} size = {100} /> 
      </Animated.View>

      <Animated.View
        style={{
          ...styles.trophy4 , transform: [{ translateX: pan.x }, { translateY: pan.y }]
        }}
        {...panResponder1.panHandlers}
      >
        <TrophiesDB icons = {["trophy4"]} size = {100} /> 
      </Animated.View>
      
    </View>
  );
}

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold"
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
  trophy3: {
    marginHorizontal: horizontalMarginMovementTrophy3,
    marginTop: -0.5* topMarginmovementTrophy3
  },
  trophy4: {
    marginRight: Math.floor(Math.random()*100),
    marginTop: 0.5* topMarginmovementTrophy3
  },
  



  });

  export default Trophies;