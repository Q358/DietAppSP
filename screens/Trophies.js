import { faCookieBite, faFire, faGrinBeamSweat, faRadiation, faSearch, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { makeStyles, Overlay } from "@rneui/themed";
import React, { useRef, useEffect } from "react";
import { useState } from "react";
import { Animated, View, PanResponder, LogBox, TouchableOpacity, Text } from "react-native";

export default function Trophies ({navigation}) {
  
  const [visible, setVisible] = useState(false)
  const [selected, setSelected] = useState()
  const styles = useStyles()
  
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, [])

  const pan = useRef(new Animated.ValueXY()).current;
  const touchThreshold = 20;
  const panResponder = useRef(
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

  const trophies = [
    {title: "Determined", details: "Reach a 30 day streak", progress: 3, goal: 30, completed: false, background: "red", iconColor: "orange", icon: faFire},
    {title: "Gains", details: "Complete 100 workouts", progress: 25, goal: 100, completed: false, background:"lightgreen", icon: faGrinBeamSweat}, 
    {title: "Full", details: "Eat 100 foods", progress: 3, goal: 30, completed: false, background: "lightblue",iconColor: "#906A19", icon: faCookieBite},
    {title: "Free Thinker", details: "Record 50 foods with the barcode scanner or search", progress: 5, goal: 50, completed: false, icon: faSearch}, 
    {title: "Determined", details: "Reach a 30 day streak", progress: 3, goal: 30, completed: false},
    {title: "Determined", details: "Reach a 30 day streak", progress: 3, goal: 30, completed: false},
    {title: "Determined", details: "Reach a 30 day streak", progress: 3, goal: 30, completed: false},
    {title: "Determined", details: "Reach a 30 day streak", progress: 3, goal: 30, completed: false}
  ]

  const handlePress = (trophy) => {
    setSelected(trophy)
    setVisible(true)
  }

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.firstTrophyRow , transform: [{ translateX: pan.x }, { translateY: pan.y }]
        }}
        {...panResponder.panHandlers}
      >
        {trophies.map((val, idx) => (
          <TouchableOpacity key={idx} onPress={() => handlePress(val)} style={{backgroundColor:val.background || "green", borderRadius:50, padding:10, margin:10}}>
            <FontAwesomeIcon icon={val.icon || faTrophy} size={80} color={val.iconColor || "yellow"}/>
          </TouchableOpacity>
        ))}
      </Animated.View>
      <TrophyDetails visible={visible} setVisible={setVisible} trophy={selected}/>
    </View>
  );
}

function TrophyDetails({ visible, setVisible, trophy }){
  const styles = useStyles()
  return(
    <Overlay overlayStyle={{...styles.detailBox, borderColor: "gold", borderWidth: trophy?.completed ? 2 : 0}} isVisible={visible} 
      onBackdropPress={() => setVisible(false)} animationType="fade">
      <Text style={styles.trophyTitle}>{trophy?.title}</Text>
      <Text style={styles.trophyDetails}>{trophy?.details}</Text>
      {/* <Text style={styles.trophyProgress}>{trophy?.completed ? "Completed" : "Not Completed"}</Text> */}
      <View style={{borderRadius: 150, backgroundColor: "white", padding: 10, justifyContent: "center", alignItems:"center"}}>
        <Text style={styles.trophyProgress}>{trophy?.progress}/{trophy?.goal}</Text>
      </View>
    </Overlay>
  )
}
  
const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 5
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold"
  },
  firstTrophyRow: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  detailBox: {
    borderRadius: 7,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
    padding:25,
    width: "75%"
  },
  trophyTitle: {
    fontFamily: "fontBold",
    fontSize: 25,
    color: theme.colors.textPrimary
  },
  trophyDetails: {
    fontFamily: "fontRegular",
    fontSize: 20,
    marginVertical: 20,
    color: theme.colors.textPrimary
  },
  trophyProgress: {
    fontFamily: "fontBold",
    fontSize: 22,
    color: theme.colors.textSecondary
  }
  }))