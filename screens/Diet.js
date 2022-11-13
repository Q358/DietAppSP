import { SafeAreaView, Image, StyleSheet, TouchableOpacity, Text, View, Dimensions, ScrollView } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleDown, faAngleLeft, faAngleRight, faAppleWhole, faBarcode, faChartColumn, faHouse, faTrophy } from "@fortawesome/free-solid-svg-icons";
import FoodBlock from "../components/FoodBlock"
import React from "react";

export default function Diet({ navigation }) {
  return (
    <View style={{...styles.container, alignItems: "center"}}>
      <Text style = {{marginVertical:50, marginTop:30, color:'white', fontFamily:'fontBold', fontSize:20}}>Diet</Text>
      <View style = {{...styles.leftArrowIcon, marginRight: 300}}>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
          <FontAwesomeIcon icon={faAngleLeft} size = {30} color = {'grey'}/>
      </TouchableOpacity>
      </View>
      <Text style = {{fontFamily: "fontLogo", color:"white", fontSize:40, marginTop:-15, marginBottom: 10}}>Today's Meals</Text>
      <View style = {{marginTop: 10, marginRight:250}}>
        <FoodBlock icons={["apple", "cookie", "bread"]} size={110} onPress={() => navigation.navigate("Breakfast")}/>
      </View>
      <View style = {{marginTop: -110, alignItems:"center"}}>
        <FoodBlock icons={["meat", "carrot", "bread"]} size={110} onPress={() => navigation.navigate("Breakfast")}/>
      </View>
      <View style = {{marginTop: -110, marginLeft:250}}>
        <FoodBlock icons={["fish", "carrot", "bread"]} size={110} onPress={() => navigation.navigate("Breakfast")}/>
      </View>
      <Text style = {{marginVertical:50, marginTop: 10, marginRight:260}}>Breakfast</Text>
      <Text style = {{marginVertical:50, marginTop: -70, alignItems: "center"}}>Lunch</Text>
      <Text style = {{marginVertical:50, marginTop: -70, marginLeft:260}}>Dinner</Text>
      <Text style = {{fontFamily: "fontLogo", color:"white", fontSize:40, marginTop:-25, marginBottom: 10, marginRight:80}}>This Week</Text>
      <View style = {{...styles.rectangle2, marginTop: 10, marginRight:250}}>
        <Text style = {{marginTop:20, marginLeft: 135, color:"black", fontFamily:"fontRegular", fontSize:10}}>Sunday</Text>
        <View style = {{...styles.leftArrow, marginTop:30}}>
        <FontAwesomeIcon icon={faAngleLeft} size = {30} color = {'black'}/>
        </View>
        <View style = {{...styles.rightArrow, marginTop:-30, marginLeft: 320}}>
        <FontAwesomeIcon icon={faAngleRight} size = {30} color = {'black'}/>
        <View style = {{marginLeft:-290, marginTop:-50}}>
        <FoodBlock icons={["apple", "cookie", "bread"]} size={80} onPress={() => navigation.navigate("Breakfast")}/>
        </View>
        <View style = {{marginLeft:-320, marginTop:-80, alignItems: "center"}}>
          <FoodBlock icons={["meat", "carrot", "bread"]} size={80} onPress={() => navigation.navigate("Breakfast")}/>
        </View>
        <View style = {{marginLeft: -80, marginTop:-80}}>
          <FoodBlock icons={["fish", "carrot", "bread"]} size={80} onPress={() => navigation.navigate("Breakfast")}/>
        </View>
        </View>
        <Text style = {{marginVertical:50, marginTop: 5, marginLeft: 40, fontSize:13}}>Breakfast</Text>
        <Text style = {{marginVertical:50, marginTop: -66, marginLeft: 160, fontSize:13}}>Lunch</Text>
        <Text style = {{marginVertical:50, marginTop: -66, marginLeft: 260, fontSize:13}}>Dinner</Text>
      </View>
    <Text style = {{fontFamily: "fontLogo", color:"white", fontSize:35, marginTop: 20}}>Cheats</Text>
    <View style = {{marginTop:10, marginBottom:-15}}>
      <FoodBlock icons={["wine", "smoke", "cheese", "cookie"]} size={100}  onPress={() => navigation.navigate("Breakfast")}/>
    </View>
    <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
    <View style = {{...styles.houseButton, marginRight:200, marginTop: 50}}>
      <FontAwesomeIcon icon={faHouse} size = {40} color = {'white'}/>
    </View>
    </TouchableOpacity>
    <TouchableOpacity style={{marginTop:-65, borderRadius:50, backgroundColor:"white", padding:15, height:80}} onPress={()=>navigation.navigate("Barcode")}>
        <FontAwesomeIcon icon={faBarcode} size={50} />
      </TouchableOpacity>
    <View style = {{...styles.chartButton, marginLeft:200, marginTop:-50}}>
      <FontAwesomeIcon icon={faChartColumn} size = {40} color = {'white'}/>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgreen',
      alignItems: 'center',
      justifyContent: 'center',
    },

    leftArrowIcon: {
      marginTop: -80, 
      marginBottom: 40
    }, 
    rectangle2: {
      height: 170,
      width: 350,
      backgroundColor: 'white',
      borderRadius:30, 
      marginLeft: 250

    },

    smallRectangle: {
      height: 50, 
      width: 60, 
      color: 'red'
    }, 
});

