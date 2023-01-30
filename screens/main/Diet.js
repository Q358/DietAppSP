import { SafeAreaView, Image, StyleSheet, TouchableOpacity, Text, View, Dimensions, ScrollView, useWindowDimensions } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleDown, faAngleLeft, faAngleRight, faAppleWhole, faBarcode, faChartColumn, faHouse, faTrophy } from "@fortawesome/free-solid-svg-icons";
import FoodBlock from "../../components/FoodBlock"
import React, { useState } from "react";
import { makeStyles, SpeedDial, useTheme } from "@rneui/themed";
import LeafBorder from "../../assets/leaf_border.png"

export default function Diet({ navigation }) {
  const { width, height } = useWindowDimensions()
  const { theme } = useTheme()
  const styles = useStyles()
  const [open, setOpen] = useState()
  return (
    <SafeAreaView style={{...styles.container, justifyContent:"space-evenly"}}>
      <View style={{width:width, position:"absolute",top:-height * 0.2}}>
        <Image style={{ width:"100%" }} source={LeafBorder} resizeMode="contain"/>
      </View>
      <View style={{alignItems:"center", justifyContent:"space-evenly", height:"80%"}}>
        <Text style = {{fontFamily: "fontBold", color:"white", fontSize:35}}>Today's Meals</Text>
        <View style={{flexDirection:"row", width:"100%", justifyContent:"space-evenly"}}>
          <FoodBlock icons={["apple", "cookie", "bread"]} size={110} onPress={() => navigation.navigate("Breakfast")} text="Breakfast"/>
          <FoodBlock icons={["meat", "carrot", "bread"]} size={110} onPress={() => navigation.navigate("Lunch")} text="Lunch"/>
          <FoodBlock icons={["fish", "carrot", "bread"]} size={110} onPress={() => navigation.navigate("Dinner")} text="Dinner"/>
        </View>
        <Text style = {{fontFamily: "fontBold", color:"white", fontSize:35, marginTop:30}}>This Week</Text>
        <View style = {{...styles.weeklyContainer}}>
          <Text style = {{fontSize:18, marginBottom:10}}>Sunday</Text>
          <View style={styles.innerWeeklyContainer}>
            <FontAwesomeIcon icon={faAngleLeft} size = {30} color = {'black'}/>
            <FoodBlock icons={["apple", "cookie", "bread"]} size={80} onPress={() => navigation.navigate("Breakfast")} text="Breakfast"/>
            <FoodBlock icons={["meat", "carrot", "bread"]} size={80} onPress={() => navigation.navigate("Lunch")} text="Lunch"/>
            <FoodBlock icons={["fish", "carrot", "bread"]} size={80} onPress={() => navigation.navigate("Dinner")} text="Dinner"/>
            <FontAwesomeIcon icon={faAngleRight} size = {30} color = {'black'}/>
          </View>
        </View>
        <Text style = {{fontFamily: "fontBold", color:"white", fontSize:35, marginTop: 20}}>Cheats</Text>
        <FoodBlock icons={["wine", "smoke", "cheese", "cookie"]} size={125} style={{justifyContent:"space-evenly", width:"80%"}}  onPress={() => navigation.navigate("Cheats")} horizontal/>
      </View>
      <SpeedDial isOpen={open} icon={{ name: 'add', color: theme.colors.tertiary }} openIcon={{ name: 'close', color: theme.colors.tertiary }}
        onOpen={() => setOpen(!open)} onClose={() => setOpen(!open)} labelPressable style={{}}>
          <SpeedDial.Action
            icon={{ name: 'search', color: theme.colors.tertiary }}
            title="Search Food"
            onPress={() => console.log("Add something")}
          />
          <SpeedDial.Action
            icon={{ name: 'barcode-scan', type: 'material-community', color: theme.colors.tertiary }}
            title="Scan Food"
            onPress={() => {
              setOpen(false)
              navigation.navigate('Barcode')
            }}
          />
      </SpeedDial>
    </SafeAreaView>
  )
}

const useStyles = makeStyles((theme) => ({
    container: {
      flex: 1,
      backgroundColor: theme.colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal:20,
      paddingTop:40,
      paddingBottom:10
    },
    weeklyContainer: {
      maxHeight: 170,
      maxWidth: 350,
      backgroundColor: theme.colors.secondary,
      borderRadius:30,
      alignItems:"center",
      padding:10
    },
    innerWeeklyContainer:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      width:"100%",
      marginBottom:10
    } 
}))

