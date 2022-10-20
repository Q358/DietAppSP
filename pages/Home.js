import React, {useState, useEffect} from 'react';
import { SafeAreaView, Image, StyleSheet, Text, TouchableOpacity, View, Dimensions, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { faTrophy, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import BottomNav from "../components/BottomNav";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Avatar, LinearProgress } from "@rneui/themed";
import profilePic from "../assets/favicon.png"

export default function Home({ navigation }) {
  const [loaded] = useFonts({
    AdidogDemo: require('../assets/fonts/AdidogDemo-RpqMo.otf'),
  });

  if (!loaded) {
    return null;
  }
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get('window').height;
  var progress = 0.76

  return (
    <View style={{...styles.container, justifyContent:"space-between", alignItems: 'center'}}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={{flexDirection:"row", marginTop:50, width:"100%"}}>
          <TouchableOpacity style = {styles.friendsButton} onPress={()=>navigation.navigate("Diet")}>
            <FontAwesomeIcon icon = {faUserGroup} size = {20} color ={'white'}/> 
          </TouchableOpacity>
          <TouchableOpacity style = {styles.trophyButton} onPress={()=>navigation.navigate("Trophies")}>
            <FontAwesomeIcon icon = {faTrophy} size = {20} color ={'white'}/> 
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Avatar style={{marginLeft:210, width:40,height:40, border:"solid 1px black", borderBottomColor:"black"}} size={"large"} rounded source={profilePic}/>
          </TouchableOpacity>
        </View>
        <Text style = {{fontFamily: "AdidogDemo", color:"white", fontSize:20, marginVertical:20}}>Happy Saturday,</Text>
        <TouchableOpacity style = {styles.weeklyProgressButton} onPress = {() => navigation.navigate("Diet")}>
          <Text style = {styles.boxText}>Weekly Goal Progress </Text>
          <Text style={{marginLeft:5, marginBottom:30}}>On track - keep it up!</Text>
          <Text style={{fontSize:20, marginBottom:5}}>{progress * 100}%</Text>
          <LinearProgress value={progress} variant="determinate" />
        </TouchableOpacity>
        <View style = {{...styles.dividerStyle, marginHorizontal:windowWidth/9, marginVertical:windowHeight/45, }}/>
        <Text style = {{fontFamily: "AdidogDemo", color:"white", fontSize:12, marginBottom:5}}>Daily Breakdown</Text>
        <TouchableOpacity style = {styles.weeklyProgressButton} onPress = {() => navigation.navigate("Diet")}>
          <Text style = {styles.boxText}>Diet</Text>
          <View></View>
        </TouchableOpacity>
        <TouchableOpacity style = {{...styles.weeklyProgressButton, marginTop:10}} onPress = {() => navigation.navigate("Diet")}>
          <Text style = {styles.boxText}>Workout</Text>
          <View></View>
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
      //marginHorizontal :16
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
    },
    trophyButton: {
      backgroundColor: '#AEB320',
      borderRadius:10,
      padding:10,
      marginLeft:20
    },
    weeklyProgressButton:{
      backgroundColor: 'white',
      //left: 75,
      width:350,
      height:150,
      paddingVertical:15,
      paddingHorizontal:15,
      borderRadius:15
    },
    boxText:{
      fontFamily: "AdidogDemo",
      color: "black",
      fontSize: 10,
      //fontWeight: "500"
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    }  
    /*title:{
      textAlign:'center',
      marginVertical:8,
      //marginHorizontal:4,
    },*/
});
