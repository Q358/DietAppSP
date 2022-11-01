import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useRef, useEffect } from "react";
import { Animated, StyleSheet, Text, View, PanResponder, LogBox } from "react-native";




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
          transform: [{ translateX: pan.x }, { translateY: pan.y }]
        }}
        {...panResponder1.panHandlers}
      >
        <FontAwesomeIcon icon = {faTrophy} size = {100} color = {trophy1Color} style = {styles.trophy1} ></FontAwesomeIcon>
        <View/>
      </Animated.View>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }]
        }}
        {...panResponder1.panHandlers}
      >
        <FontAwesomeIcon icon = {faTrophy} size = {100} color = {trophy2Color} style = {styles.trophy2} ></FontAwesomeIcon>
        <View/>
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

  });

  export default Trophies;