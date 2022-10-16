import React, {useState, useEffect} from 'react';
import { SafeAreaView, Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFonts } from 'expo-font';
import { faTrophy, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import BottomNav from "../components/BottomNav";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Divider, LinearProgress } from "@rneui/themed";

export default function Home({ navigation }) {
  const [loaded] = useFonts({
    AdidogDemo: require('../assets/fonts/AdidogDemo-RpqMo.otf'),
  });
  // const [count, setCount] = useState(0);
  // const onPress = () => setCount(prevCount => prevCount + 1);
  if (!loaded) {
    return null;
  }
  
  var progress = 0.76
  return (
    <View style={styles.container}>
      <View style={{flexDirection:"row", marginTop:50, justifyContent:"flex-start", width:"100%"}}>
        <TouchableOpacity style = {styles.friendsButton} onPress={()=>navigation.navigate("Diet")}>
          <FontAwesomeIcon icon = {faUserGroup} size = {20} color ={'white'}/> 
        </TouchableOpacity>
        <TouchableOpacity style = {styles.trophyButton} onPress={()=>navigation.navigate("Trophies")}>
          <FontAwesomeIcon icon = {faTrophy} size = {20} color ={'white'}/> 
        </TouchableOpacity>
      </View>
      <Text style = {{fontFamily: "AdidogDemo", color:"white", fontSize:20, marginVertical:20}}>Happy Saturday,</Text>
      <TouchableOpacity style = {styles.weeklyProgressButton} onPress = {() => navigation.navigate("Diet")}>
        <Text style = {styles.boxText}>Weekly Goal Progress </Text>
        <Text style={{marginLeft:5, marginBottom:30}}>On track - keep it up!</Text>
        <Text style={{fontSize:20, marginBottom:5}}>{progress * 100}%</Text>
        <LinearProgress value={progress} variant="determinate" />
      </TouchableOpacity>
      <Divider style = {styles.dividerStyle} width ={10}/>
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
      //marginHorizontal :16
    },
    dividerStyle: {
      width : 300,
      marginVertical: 45,
      marginHorizontal: 20,
      borderRadius:30,
      color: 'white',
      borderColor: 'white'
    },
    friendsButton:{
      backgroundColor: '#0F2135',
      borderRadius:10,
      padding:10,
      marginLeft:30
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
