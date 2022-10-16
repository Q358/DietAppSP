import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { SafeAreaView, Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFonts } from 'expo-font';
import { faTrophy, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import BottomNav from "../components/BottomNav";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default function Home({ navigation }) {
  // const [count, setCount] = useState(0);
  // const onPress = () => setCount(prevCount => prevCount + 1);
  return (
    <View style={styles.container}>
      <TouchableOpacity style = {styles.Friendsbutton} onPress={()=>navigation.navigate("Diet")}>
        <FontAwesomeIcon icon = {faUserGroup} size = {20} color ={'white'}/> 
      </TouchableOpacity>
      <TouchableOpacity style = {styles.Trophybutton} onPress={()=>navigation.navigate("Trophies")}>
        <FontAwesomeIcon icon = {faTrophy} size = {20} color ={'white'}/> 
      </TouchableOpacity>
      <Text style = {{fontFamily: "DamascusBold", color:"white", fontSize:45, bottom:290}}>Happy Saturday,</Text>
      <TouchableOpacity style = {styles.weeklyProgressbutton} onPress = {() => navigation.navigate("Diet")}>
        <Text style = {styles.boxText}>Weekly Goal Progress </Text>
      </TouchableOpacity>
      <BottomNav navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor:'rgba(73,186,81,68.0)',
      backgroundColor:'lightgreen',
      alignItems: 'center',
      justifyContent: 'center',
      //marginHorizontal :16
    },
    Friendsbutton:{
      //color:'#1DA664',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      backgroundColor: '#0F2135',
      borderRadius:10,
      padding:10,
      left: 20,
      top: 60,
    },
    Trophybutton: {
      //color:'#1DA664',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      backgroundColor: '#AEB320',
      borderRadius:10,
      padding:10,
      left: 75,
      top: 60,
    },
    weeklyProgressbutton:{
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      backgroundColor: 'white',
      top: 250,
      //left: 75,
      paddingHorizontal:150,
      paddingVertical: 66,
      borderRadius: 15
    },
    boxText:{
      fontFamily: "DamascusBold",
      color: "black",
      fontSize: "15",
      right:120,
      top: -30,
      marginHorizontal: -15,
      alignSelf:"Center",
      width: 100
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
