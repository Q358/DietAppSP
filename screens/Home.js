import React, {useState, useEffect} from 'react';
import { Text, TouchableOpacity, View, ScrollView, useWindowDimensions, StatusBar } from 'react-native';
import { faTrophy, faUserGroup, faPersonRunning, faBiking, faPersonWalking, faDumbbell, faAngleLeft, faAngleRight, faWalking, faPersonSwimming } from '@fortawesome/free-solid-svg-icons';
import BottomNav from "../components/BottomNav";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Avatar, LinearProgress, makeStyles, useTheme } from "@rneui/themed";
import FoodBlock from "../components/FoodBlock"
import { useAuth } from '../config/authContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import Onboarding from 'react-native-onboarding-swiper';

export default function Home({ navigation }) {
  const [exercisePage, setExercisePage] = useState(0)
  const exercises = [[faDumbbell,faBiking,faPersonRunning], [faDumbbell,faPersonWalking,faBiking], [faPersonRunning, faBiking, faWalking], [faPersonSwimming]]

  const { user, userAvatar } = useAuth()
  const { width, height } = useWindowDimensions()
  const { theme } = useTheme()
  const styles = useStyles()

  var progress = 0.76
  const size = 30
  const day = new Date().getDay()
  const dayOfWeek = day == 0 ? "Sunday" : day == 1 ? "Monday" : day == 2 ? "Tuesday" : day == 3 ? "Wednesday" : day == 4 ? "Thursday" : day == 5 ?
    "Friday" : day == 6 ? "Saturday" : null

  const handleCarousel = (direction) => {
    let length = exercises.length
    direction == "left" ?
      (exercisePage == 0 ? setExercisePage(length - 1) : setExercisePage(exercisePage - 1))
      : (exercisePage == length - 1 ? setExercisePage(0) : setExercisePage(exercisePage + 1))
  }
  return (
    <View style={{...styles.container, justifyContent:"space-evenly", alignItems: 'center'}}>
      <StatusBar  translucent backgroundColor={"transparent"}/>
      <SafeAreaView style={{...styles.container, flex:0, width:"90%", justifyContent:"center", alignItems:"center"}}>
        <View style={{flexDirection:"row", width:"100%", marginTop:13, justifyContent:"space-between"}}>
          <View style={{flexDirection:"row"}}>
            <TouchableOpacity style = {styles.friendsButton} onPress={()=>navigation.navigate("Friends")}>
              <FontAwesomeIcon icon = {faUserGroup} size = {20} color ={"white"}/> 
            </TouchableOpacity>
            <TouchableOpacity style = {styles.trophyButton} onPress={()=>navigation.navigate("Trophies")}>
              <FontAwesomeIcon icon = {faTrophy} size = {20} color ={"white"}/> 
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Avatar style={{width:40,height:40, borderRadius:20, borderWidth:1, borderColor:"white"}} size={"large"} rounded source={userAvatar}/>
          </TouchableOpacity>
        </View>
        <Text style={styles.welcomeText}>Happy {dayOfWeek}, {user?.displayName}</Text>
      </SafeAreaView>
      <ScrollView style={{backgroundColor: theme.colors.tertiary, padding:10, borderRadius:15}}>
        <TouchableOpacity style = {{...styles.weeklyProgressButton, height:null}} onPress = {() => navigation.navigate("Diet")}>
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <View style={{marginBottom:5, justifyContent:"space-between"}}>
          <Text style = {styles.boxText}>Weekly Goal Progress </Text>
          <Text style={{fontFamily:"fontRegular",marginLeft:10, marginBottom:20, marginTop:10, color:theme.colors.textSecondary}}>On track - keep it up!</Text>
          </View>
          <Text style={{fontSize:40, marginTop:30, fontWeight:"800", color:theme.colors.textSecondary}}>{progress * 100}%</Text>
          </View>
          <LinearProgress value={progress} variant="determinate" color={theme.colors.primary}/>
        </TouchableOpacity>
        <View style = {{...styles.divider, marginHorizontal:width/20, marginVertical:height/80}}/>
        <Text style = {{fontFamily: "fontBold", color:theme.colors.textPrimary, fontSize:25, marginBottom:height/80}}>Daily Breakdown</Text>
        <TouchableOpacity style = {{...styles.weeklyProgressButton, justifyContent:"space-between"}} onPress = {() => navigation.navigate("Diet")}>
          <Text style = {styles.boxText}>Today's Diet</Text>
          <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
            <FoodBlock icons={["apple","carrot", "fish", "bread"]} size={80} onPress={() => navigation.navigate("Diet")}/>
            <FoodBlock icons={["apple","carrot", "fish", "bread"]} size={80} onPress={() => navigation.navigate("Diet")}/>
            <FoodBlock icons={["bread","carrot", "meat", "fish"]} size={80} onPress={() => navigation.navigate("Diet")}/>
            <FoodBlock icons={["wine","smoke", "cheese", "cookie"]} size={60} onPress={() => navigation.navigate("Diet")}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style = {{...styles.weeklyProgressButton, marginVertical:15}} onPress = {() => navigation.navigate("Workout")}>
          <Text style = {styles.boxText}>Today's Workout</Text>
          <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", height:"90%"}}>
            <TouchableOpacity style={{...styles.workoutButton, marginBottom:0}} onPress={() => handleCarousel("left")}>
              <FontAwesomeIcon icon={faAngleLeft} size={size}/>
            </TouchableOpacity>
            {exercises[exercisePage][0] ? (
            <>
              <FontAwesomeIcon icon={exercises[exercisePage][0]} size={size} color={theme.colors.textSecondary}/>
              {exercises[exercisePage][1] && <FontAwesomeIcon icon={exercises[exercisePage][1]} size={size} color={theme.colors.textSecondary}/>}
              {exercises[exercisePage][1] && <FontAwesomeIcon icon={exercises[exercisePage][2]} size={size} color={theme.colors.textSecondary}/>}
            </>
            ) : (null)}
            <TouchableOpacity style={styles.workoutButton} onPress={() => handleCarousel("right")}>
              <FontAwesomeIcon icon={faAngleRight} size={size}/>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <BottomNav navigation={navigation}/>
    </View>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    //backgroundColor:'rgba(73,186,81,68.0)',
    backgroundColor:theme.colors.primary,
    //marginHorizontal :16,
    maxWidth:"100%"
  },
  friendsButton:{
    backgroundColor: '#0F2135',
    borderRadius:10,
    padding:10,
    marginLeft:10,
    borderColor: theme.colors.secondary,
    borderWidth:1
  },
  trophyButton: {
    backgroundColor: '#AEB320',
    borderRadius:10,
    padding:10,
    marginLeft:20,
    borderColor: theme.colors.secondary,
    borderWidth:1
  },
  welcomeText:{
    fontFamily: "fontBold",
    color: theme.colors.textPrimary,
    fontSize:35,
    marginTop:10,
    marginBottom:10,
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius:20,
    paddingHorizontal:10
  },
  weeklyProgressButton:{
    backgroundColor: theme.colors.secondary,
    width:350,
    height:150,
    paddingVertical:15,
    paddingHorizontal:15,
    borderRadius:15,
    elevation: 5,
  },
  boxText:{
    fontFamily: "fontBold",
    color: theme.colors.textSecondary,
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
  workoutButton:{

    borderRadius:10,
    padding:3
  }

  /*title:{
    textAlign:'center',
    marginVertical:8,
    //marginHorizontal:4,
  },*/
}));

// array[i],
// array[i+1],
// array[i+2]

// map array to groups of three
// or
// useState x 


