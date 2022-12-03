import { SafeAreaView, Image, StyleSheet, TouchableOpacity, Text, View, Dimensions, ScrollView } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleDown, faAngleLeft, faAngleRight, faAppleWhole, faBarcode, faChartColumn, faHouse, faTrophy } from "@fortawesome/free-solid-svg-icons";
import FoodBlock from "../components/FoodBlock"
import React from "react";
import { makeStyles, useTheme } from "@rneui/themed";

export default function Diet({ navigation }) {
  const { theme } = useTheme()
  const styles = useStyles()
  return (
    <SafeAreaView style={{...styles.container, justifyContent:"space-between"}}>
      <View style={{flexDirection:"row", justifyContent:"space-between", width:"85%", alignItems:"center"}}>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
          <FontAwesomeIcon icon={faAngleLeft} size = {30} color = {'grey'}/>
        </TouchableOpacity>
        <Text style = {{color:'white', fontFamily:'fontBold', fontSize:20}}>Diet</Text>
        <FontAwesomeIcon icon={faAngleLeft} size = {30} color = {theme.colors.primary}/>
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
        <FoodBlock icons={["wine", "smoke", "cheese", "cookie"]} size={120}  onPress={() => navigation.navigate("Cheats")} horizontal/>
      </View>
      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-evenly", width:"100%"}}>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
          <FontAwesomeIcon icon={faHouse} size = {40} color = {'white'}/>
        </TouchableOpacity>
        <TouchableOpacity style={{borderRadius:50, backgroundColor:"white", padding:15, height:80}} onPress={()=>navigation.navigate("Barcode")}>
          <FontAwesomeIcon icon={faBarcode} size={50} />
        </TouchableOpacity>
          <FontAwesomeIcon icon={faChartColumn} size = {40} color = {'white'}/>
      </View>
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

