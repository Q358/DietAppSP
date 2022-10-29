import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, useWindowDimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { faTrophy, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import BottomNav from "../components/BottomNav";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Avatar, LinearProgress } from "@rneui/themed";
import FoodBlock from "../components/FoodBlock"
import { useAuth } from '../config/authContext';

export default function Home({ navigation }) {
  const [loaded] = useFonts({
    AdidogDemo: require('../assets/fonts/AdidogDemo-RpqMo.otf'),
    UbuntuBold: require('../assets/fonts/Ubuntu-Bold.ttf'),
    Ubuntu: require('../assets/fonts/Ubuntu-Regular.ttf')
  });

  const { user, userAvatar } = useAuth()
  const { width, height } = useWindowDimensions()

  if (!loaded) {
    return null;
  }

  var progress = 0.76

  return (
    <View style={{...styles.container, justifyContent:"space-evenly", alignItems: 'center'}}>
      <View style={{...styles.container, flex:0, width:"90%", justifyContent:"center", alignItems:"center"}}>
        <View style={{flexDirection:"row", marginTop:50, width:"100%", justifyContent:"space-between"}}>
          <View style={{flexDirection:"row"}}>
            <TouchableOpacity style = {styles.friendsButton} onPress={()=>navigation.navigate("Friends")}>
              <FontAwesomeIcon icon = {faUserGroup} size = {20} color ={'white'}/> 
            </TouchableOpacity>
            <TouchableOpacity style = {styles.trophyButton} onPress={()=>navigation.navigate("Trophies")}>
              <FontAwesomeIcon icon = {faTrophy} size = {20} color ={'white'}/> 
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Avatar style={{width:40,height:40, borderRadius:20, borderTopColor:"black", borderWidth:1, borderColor:"black"}} size={"large"} rounded source={userAvatar}/>
          </TouchableOpacity>
        </View>
        <Text style={styles.welcomeText}>Happy Saturday, {user?.displayName}</Text>
        </View>
        <ScrollView style={{backgroundColor:"#29a442", padding:10, borderRadius:15, flex:1}}>
        <TouchableOpacity style = {{...styles.weeklyProgressButton, height:null}} onPress = {() => navigation.navigate("Diet")}>
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <View style={{marginBottom:5, justifyContent:"space-between"}}>
          <Text style = {styles.boxText}>Weekly Goal Progress </Text>
          <Text style={{fontFamily:"Ubuntu",marginLeft:10, marginBottom:20, marginTop:10}}>On track - keep it up!</Text>
          </View>
          <Text style={{fontSize:40, marginTop:30, fontWeight:"800"}}>{progress * 100}%</Text>
          </View>
          <LinearProgress value={progress} variant="determinate" />
        </TouchableOpacity>
        <View style = {{...styles.divider, marginHorizontal:width/20, marginVertical:height/80}}/>
        <Text style = {{fontFamily: "UbuntuBold", color:"white", fontSize:25, marginBottom:height/80}}>Daily Breakdown</Text>
        <TouchableOpacity style = {{...styles.weeklyProgressButton, justifyContent:"space-between"}} onPress = {() => navigation.navigate("Diet")}>
          <Text style = {styles.boxText}>Diet</Text>
          <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
            <FoodBlock icons={["apple","carrot", "fish", "bread"]} size={80} onPress={() => navigation.navigate("Diet")}/>
            <FoodBlock icons={["apple","carrot", "fish", "bread"]} size={80} onPress={() => navigation.navigate("Diet")}/>
            <FoodBlock icons={["bread","carrot", "meat", "fish"]} size={80} onPress={() => navigation.navigate("Diet")}/>
            <FoodBlock icons={["wine","smoke", "cheese", "cookie"]} size={60} onPress={() => navigation.navigate("Diet")}/>
          </View>
          <View></View>
        </TouchableOpacity>
        <TouchableOpacity style = {{...styles.weeklyProgressButton, marginVertical:15}} onPress = {() => navigation.navigate("Workout")}>
          <Text style = {styles.boxText}>Workout</Text>
          <View>
            
          </View>
        </TouchableOpacity>
      </ScrollView>

      <BottomNav navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor:'rgba(73,186,81,68.0)',
      backgroundColor:'lightgreen',
      //marginHorizontal :16,
      maxWidth:"100%"
    },
    dividerStyle: {
      borderBottomColor : "lightgray", 
      borderBottomWidth:10, 
      borderRadius:30, 
      width:250
    },
    friendsButton:{
      backgroundColor: '#0F2135',
      borderRadius:10,
      padding:10,
      marginLeft:10
    },
    trophyButton: {
      backgroundColor: '#AEB320',
      borderRadius:10,
      padding:10,
      marginLeft:20
    },
    welcomeText:{
      fontFamily: "UbuntuBold",
      color:"white",
      fontSize:35,
      marginTop:10,
      marginBottom:10,
      textShadowOffset: {width: 1, height: 2},
      textShadowRadius:20,
      paddingHorizontal:10
    },
    weeklyProgressButton:{
      backgroundColor: 'white',
      //left: 75,
      width:350,
      height:150,
      paddingVertical:15,
      paddingHorizontal:15,
      borderRadius:15,
      elevation: 5,
    },
    boxText:{
      fontFamily: "UbuntuBold",
      color: "black",
      fontSize: 20,
      marginBottom:3
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    },
    divider:{
      borderBottomColor: "#C1C1C1",
      borderBottomWidth:3,
      borderRadius:30,
      width:300
    },

    /*title:{
      textAlign:'center',
      marginVertical:8,
      //marginHorizontal:4,
    },*/
});
