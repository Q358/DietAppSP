import React from "react";
import { StyleSheet, Text, View, Button, Image, Dimensions } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBiking, faDumbbell, faPersonRunning, faTrophy, faWalking} from '@fortawesome/free-solid-svg-icons';
import { useFonts } from "expo-font";



export default function Workout({ navigation }) {
  const [workoutFonts] = useFonts({
    ModernRoyale : require('../assets/fonts/ModernRoyale-51wPZ.ttf'),
  });
  return (
    <View style={styles.container}>
      <Onboarding
      onSkip={() => navigation.navigate("Home")}
      onDone= {() => navigation.navigate("Home")}
      pages={[
        {
          backgroundColor: '#fff',
          image: <FontAwesomeIcon icon = {faPersonRunning} size = {100} color = {'#BC62FF'} ></FontAwesomeIcon>,
          //title: 'Running',
          title : <Text style={{fontFamily:"ModernRoyale", fontSize:50, marginTop:-40}}>Running</Text>,
          //subtitle: '3 miles at 75% maximum effort',
          subtitle: <Text style={{fontFamily:"ModernRoyale", fontSize:25, marginTop:20}}>3 miles</Text>
        },
        {
          backgroundColor: '#fff',
          image: <FontAwesomeIcon icon = {faDumbbell} size = {100} color = {'#BC62FF'} style = {styles.secondIconStyle}></FontAwesomeIcon>,
          title: <Text style={{fontFamily:"ModernRoyale", fontSize:50, marginTop:-40, marginLeft:(Dimensions.get('window').width)/4}}>Dumbbell Press</Text>,
          subtitle: <Text style={{fontFamily:"ModernRoyale", fontSize:25, marginTop:20, marginLeft:(Dimensions.get('window').width)/4}}>3x10 reps</Text>, // no subtitle, just for testing purposes
        },
        {
          backgroundColor: '#fff',
          image: <FontAwesomeIcon icon = {faBiking} size = {100} color = {'#BC62FF'} style = {styles.thirdIconStyle}></FontAwesomeIcon>,
          title: <Text style={{fontFamily:"ModernRoyale", fontSize:50, marginTop:-40, marginLeft:(Dimensions.get('window').width)/3}}>Station Bike</Text>,
          subtitle: <Text style={{fontFamily:"ModernRoyale", fontSize:25, marginTop:20, marginLeft:(Dimensions.get('window').width)/3}}>30 mins</Text>,
        },
        {
          backgroundColor: '#fff',
          image: <FontAwesomeIcon icon = {faWalking} size = {100} color = {'#BC62FF'}></FontAwesomeIcon>,
          title: 'Walk',
          subtitle: '3 x 10 mins',
        },
      ]}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    secondIconStyle: {
      flex:1,
      backgroundColor:'white',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: (Dimensions.get('window').width)/4 ,
    },
    thirdIconStyle: {
      flex:1,
      backgroundColor:'white',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: (Dimensions.get('window').width)/3 ,
    }
});