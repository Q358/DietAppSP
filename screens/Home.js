import React, {useState, useEffect} from 'react';
import { SafeAreaView, Image, StyleSheet, Text, TouchableOpacity, View, Dimensions, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { faTrophy, faUserGroup, faAppleWhole, faFish, faCarrot, faBreadSlice, faWineGlass, faCheese, faCookieBite, faSmoking, faPersonRunning, faBiking, faPersonWalking, faWalking, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import BottomNav from "../components/BottomNav";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Avatar, LinearProgress } from "@rneui/themed";
import FoodBlock from "../components/FoodBlock"
import profilePic from "../assets/favicon.png"
import { useAuth } from '../config/authContext';
import moment from 'moment';
import Onboarding from "react-native-onboarding-swiper";
import Carousel from 'react-native-banner-carousel';



export default function Home({ navigation }) {
  const [loaded] = useFonts({
    AdidogDemo: require('../assets/fonts/AdidogDemo-RpqMo.otf'),
    UbuntuBold: require('../assets/fonts/Ubuntu-Bold.ttf'),
    Ubuntu : require('../assets/fonts/Ubuntu-Medium.ttf'),
  });

  const { user } = useAuth()


  const iconNames = new Map();
  iconNames.set(1, faPersonRunning);
  iconNames.set(2, faDumbbell);
  iconNames.set(3, faBiking);
  iconNames.set(4, faPersonWalking);

  


  if (!loaded) {
    return null;
  }
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get('window').height;
  var progress = 0.76;
  var dayOfWeek = moment().format('dddd');

  return (
    <View style={{...styles.container, justifyContent:"space-between", alignItems: 'center'}}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={{flexDirection:"row", marginTop:50, width:"100%"}}>
          <TouchableOpacity style = {styles.friendsButton} onPress={()=>navigation.navigate("Friends")}>
            <FontAwesomeIcon icon = {faUserGroup} size = {20} color ={'white'}/> 
          </TouchableOpacity>
          <TouchableOpacity style = {styles.trophyButton} onPress={()=>navigation.navigate("Trophies")}>
            <FontAwesomeIcon icon = {faTrophy} size = {20} color ={'white'}/> 
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Avatar style={{marginLeft:210, width:40,height:40, border:"solid 1px black", borderBottomColor:"black"}} size={"large"} rounded source={profilePic}/>
          </TouchableOpacity>
        </View>
        <Text style = {{fontFamily: "UbuntuBold", color:"white", fontSize:35, marginVertical:20}}>Happy {dayOfWeek},</Text>
        <Text style = {{fontFamily: "UbuntuBold", color:"white", fontSize:35, marginVertical:-10,marginBottom:10}}>{user?.displayName}</Text>
        <TouchableOpacity style = {styles.weeklyProgressButton} onPress = {() => navigation.navigate("Diet")}>
          <Text style = {styles.boxText}>Weekly Goal Progress </Text>
          <Text style={{marginLeft:5, marginBottom:30}}>On track - keep it up!</Text>
          <Text style={{fontSize:20, marginBottom:5}}>{progress * 100}%</Text>
          <LinearProgress value={progress} variant="determinate" />
        </TouchableOpacity>
        <View style = {{borderBottomColor : "#C1C1C1", marginHorizontal:windowWidth/20, marginVertical:windowHeight/80, borderBottomWidth:3, borderRadius:30, width:300}}/>
        <Text style = {{fontFamily: "UbuntuBold", color:"white", fontSize:25, marginBottom:windowHeight/80}}>Daily Breakdown</Text>
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
          <Onboarding
          pages={[
            {
              backgroundColor: '#fff',
              image: <FontAwesomeIcon icon = {faPersonRunning} size = {20} color = {'#BC62FF'} ></FontAwesomeIcon>,
              //title: 'Running',
              title : <Text style={{fontFamily:"Ubuntu", fontSize: 2, marginTop:-2}}></Text>,
              subtitle: <Text style={{fontFamily:"Ubuntu", fontSize:2, marginTop:-1}}></Text>
            },
            {
              backgroundColor: '#fff',
              image: <FontAwesomeIcon icon = {faDumbbell} size = {20} color = {'#BC62FF'} style = {styles.secondCarouselIconStyle}></FontAwesomeIcon>,
              title: <Text style={{fontFamily:"Ubuntu", fontSize:10, marginTop:-8, marginLeft:(Dimensions.get('window').width)/4}}></Text>,
              subtitle: <Text style={{fontFamily:"Ubuntu", fontSize:5, marginTop:4, marginLeft:(Dimensions.get('window').width)/4}}></Text>, // no subtitle, just for testing purposes
            },
            {
              backgroundColor: '#fff',
              image: <FontAwesomeIcon icon = {faBiking} size = {20} color = {'#BC62FF'} style = {styles.thirdCarouselIconStyle}></FontAwesomeIcon>,
              title: <Text style={{fontFamily:"Ubuntu", fontSize:10, marginTop:-8, marginLeft:(Dimensions.get('window').width)/3}}>Station Bike</Text>,
              subtitle: <Text style={{fontFamily:"Ubuntu", fontSize:5, marginTop:4, marginLeft:(Dimensions.get('window').width)/3}}>30 mins</Text>,
            },
            {
              backgroundColor: '#fff',
              image: <FontAwesomeIcon icon = {faWalking} size = {20} color = {'#BC62FF'} style = {styles.fourthCarouselIconStyle}></FontAwesomeIcon>,
              title : <Text style={{fontFamily:"Ubuntu", fontSize:10, marginTop:-8, marginRight: (Dimensions.get('window').width)/8}}>Walking</Text>,
              subtitle: <Text style={{fontFamily:"Ubuntu", fontSize:5, marginTop:4, marginRight: (Dimensions.get('window').width)/8}}> 3x10 mins</Text>
            },
          ]}/>
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
      fontFamily: "UbuntuBold",
      color: "black",
      fontSize: 20,
      marginBottom:3
    },
    workoutCarouselcontainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    secondCarouselIconStyle: {
      flex:1,
      backgroundColor:'white',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: (Dimensions.get('window').width)/4 ,
    },
    thirdCarouselIconStyle: {
      flex:1,
      backgroundColor:'white',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: (Dimensions.get('window').width)/3 ,
    },
    fourthCarouselIconStyle: {
      flex:1,
      backgroundColor:'white',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: (Dimensions.get('window').width)/8 ,
    },
    
    /*title:{
      textAlign:'center',
      marginVertical:8,
      //marginHorizontal:4,
    },*/
});
