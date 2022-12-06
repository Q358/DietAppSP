import { faArrowUp, faBullseye, faCalendar, faPerson, faUtensils, faWeightScale, faX, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';
import BottomNav from "../components/BottomNav";
import RegistrationTitles from '../components/RegistrationTitles';


export default function Registration ({navigation}) {
  const [text, onChangeText] = useState()
  const [number, onChangeNumber] = useState()

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
    return (
    <Swiper style={styles.wrapper} 
        showsButtons = { true }>
        <View style={styles.slide}>
          <View style = {{...styles.titleBar, marginLeft: windowWidth/5}}>
            <Text style={{...styles.titleText}}>Registration</Text>
          </View>
          <View style={{...styles.topButton, flexDirection: "row", justifyContent:"space-between", flexWrap: "wrap", marginTop:windowHeight/8}}>
              <FontAwesomeIcon icon = {faExclamationCircle} size = {50} color = {'#F4F0E0'} style = {{...styles.largeIcon, marginTop:windowHeight/160, marginLeft: windowWidth/32}}></FontAwesomeIcon>
              <Text style={{...styles.text, flexDirection: "row", marginTop:windowHeight/60, marginRight: windowWidth/2.5}}>Begin</Text>
          </View>
        
        </View>
        <View style={styles.slide}>
          <View style = {{...styles.titleBar, marginLeft: windowWidth/8}}>
            <Text style={{...styles.titleText}}>Demographics</Text>
          </View>
            <View style={{...styles.topButton, flexDirection: "row", justifyContent:"space-between", flexWrap: "wrap", marginTop:windowHeight/8}}>
              <FontAwesomeIcon icon = {faPerson} size = {50} color = {'#F4F0E0'} style = {{...styles.largeIcon, marginTop:windowHeight/160, marginLeft: windowWidth/32}}></FontAwesomeIcon>
              <Text style={{...styles.text, flexDirection: "row", marginTop:-windowHeight/10.5, marginLeft: windowWidth/4.25}}>Date of Birth</Text>
            </View>
            <View style={{...styles.topButton, flexDirection: "row", justifyContent:"space-between", flexWrap: "wrap", marginTop:windowHeight/8 }} onPress={() => navigation.navigate("Home")}>
              <FontAwesomeIcon icon = {faPerson} size = {50} color = {'#F4F0E0'} style = {{...styles.largeIcon, marginTop:windowHeight/160, marginLeft: windowWidth/32}}></FontAwesomeIcon>
              <Text style={{...styles.text, flexDirection: "row", marginTop:windowHeight/48 , marginRight: windowWidth/2.75}}>Height</Text>
            </View>
            <View style={{...styles.topButton, flexDirection: "row", justifyContent:"space-between", flexWrap: "wrap", marginTop:windowHeight/8 }} onPress={() => navigation.navigate("Home")}>
              <FontAwesomeIcon icon = {faPerson} size = {50} color = {'#F4F0E0'} style = {{...styles.largeIcon, marginTop:windowHeight/160, marginLeft: windowWidth/32}}></FontAwesomeIcon>
              <Text style={{...styles.text, flexDirection: "row", marginTop:windowHeight/48, marginRight: windowWidth/3}}>Gender</Text>
            </View>
            <View style = {{...styles.midButtonRow}}>
              <TouchableOpacity style={{...styles.button, flexDirection: "row", justifyContent: "flex-start", flexWrap: "wrap", marginTop:windowHeight/32, backgroundColor: "#0096D6", marginLeft: -windowWidth/3}} onPress={() => navigation.navigate("Home")}>
                <Text style={{...styles.mediumButtonText, flexDirection: "row", marginTop:windowHeight/48}}> Male</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{...styles.button, flexDirection: "row", justifyContent:"space-evenly", flexWrap: "wrap", backgroundColor: "#FF00BF", marginTop:windowHeight/32,}} onPress={() => navigation.navigate("Home")}>
                <Text style={{...styles.mediumButtonText, flexDirection: "row", marginTop:windowHeight/48, marginLeft:-windowWidth/800}}>Female</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{...styles.button, flexDirection: "row", justifyContent:"space-evenly", flexWrap: "wrap", backgroundColor: "#F46D25", marginTop:-windowHeight/16, marginLeft: windowWidth/1.75 }} onPress={() => navigation.navigate("Home")}>
                <Text style={{...styles.mediumButtonText, flexDirection: "row", marginTop:windowHeight/48, marginLeft:windowWidth/800}}>Other</Text>
              </TouchableOpacity>
            </View>
        </View>
        <View style={styles.slide}>
          <View style = {{...styles.titleBar, marginLeft: windowWidth/2.25}}>
            <Text style={{...styles.titleText}}>Weight</Text>
          </View>
            <View style={{...styles.topButton, flexDirection: "row", justifyContent:"space-between", flexWrap: "wrap", marginTop:windowHeight/8}} onPress={() => navigation.navigate("Home")}>
              <FontAwesomeIcon icon = {faWeightScale} size = {50} color = {'#F4F0E0'} style = {{...styles.largeIcon, marginTop:windowHeight/160, marginLeft: windowWidth/32}}></FontAwesomeIcon>
              <Text style={{...styles.text, flexDirection: "row", marginTop:-windowHeight/10.5, marginLeft: windowWidth/5.5}}> Current Weight</Text>
            </View>
            <TouchableOpacity style={{...styles.topButton, flexDirection: "row", justifyContent:"space-between", flexWrap: "wrap", marginTop:windowHeight/8 }} onPress={() => navigation.navigate("Home")}>
              <FontAwesomeIcon icon = {faBullseye} size = {50} color = {'#F4F0E0'} style = {{...styles.largeIcon, marginTop:windowHeight/160, marginLeft: windowWidth/32}}></FontAwesomeIcon>
              <Text style={{...styles.text, flexDirection: "row", marginTop:-windowHeight/10.5, marginLeft: windowWidth/5.5}}> Target Weight</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.topButton, flexDirection: "row", justifyContent:"space-between", flexWrap: "wrap", marginTop:windowHeight/8 }} onPress={() => navigation.navigate("Home")}>
              <FontAwesomeIcon icon = {faCalendar} size = {50} color = {'#F4F0E0'} style = {{...styles.largeIcon, marginTop:windowHeight/160, marginLeft: windowWidth/32}}></FontAwesomeIcon>
              <Text style={{...styles.text, flexDirection: "row", marginTop:windowHeight/48, marginRight: windowWidth/4}}>Goal Date</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.slide}>
          <View style = {{...styles.titleBar, marginLeft: windowWidth/1.8}}>
            <Text style={{...styles.titleText}}>Diet</Text>
          </View>
            <TouchableOpacity style={{...styles.topButton, flexDirection: "row", justifyContent:"space-between", flexWrap: "wrap", marginTop:windowHeight/8}} onPress={() => navigation.navigate("Home")}>
              <FontAwesomeIcon icon = {faUtensils} size = {50} color = {'#F4F0E0'} style = {{...styles.largeIcon, marginTop:windowHeight/160, marginLeft: windowWidth/32}}></FontAwesomeIcon>
              <Text style={{...styles.text, flexDirection: "row", marginTop:-windowHeight/10.5, marginLeft: windowWidth/5.5}}> Number of Meals</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.topButton, flexDirection: "row", justifyContent:"space-between", flexWrap: "wrap", marginTop:windowHeight/8 }} onPress={() => navigation.navigate("Home")}>
              <FontAwesomeIcon icon = {faX} size = {50} color = {'#F4F0E0'} style = {{...styles.largeIcon, marginTop:windowHeight/80, marginLeft: windowWidth/32}}></FontAwesomeIcon>
              <Text style={{...styles.text, flexDirection: "row", marginTop:windowHeight/48 , marginRight: windowWidth/5.5}}> Restrictions</Text>
            </TouchableOpacity>
            
        </View>
        <View style={styles.slide}>
          <View style = {{...styles.titleBar, marginLeft: windowWidth/3.33}}>
            <Text style={{...styles.titleText}}>Diagnoses</Text>
          </View>
        </View>
        <View style={styles.slide}>
          <View style = {{...styles.titleBar, marginLeft: windowWidth/3.33}}>
            <Text style={{...styles.titleText}}>All Set!</Text>
          </View>
            <View style = {styles.buttonLocation}>
            <TouchableOpacity style={{...styles.button, backgroundColor:"#1DB954", marginVertical:windowHeight/4.25,}} onPress={() => navigation.navigate("Home")}>
              <Text style={{...styles.text}}>Begin</Text>
            </TouchableOpacity>
            </View>
        </View>
   </Swiper>
    );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  wrapper: {
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00704A',
  },
  buttonLocation:{
    marginVertical:windowHeight/12,
  },
  titleText: {
    color: '#F4F0E0',
    fontSize: 40,
    //marginTop: windowHeight/12,
    fontWeight: 'bold',
    marginVertical: windowHeight/12,
    width:windowWidth/1.2,
    height:windowHeight/12,
    marginHorizontal: -windowWidth/5,
    /*
    borderWidth:5,
    borderRadius:10,
    borderColor: '#F4F0E0',
    */
  },
  text: {
    color: '#F4F0E0',
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: windowWidth/6.5,
  },
  mediumButtonText: {
    color: '#F4F0E0',
    fontSize: 25,
    fontWeight: 'bold',
    //alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: windowWidth/6.5,
    marginLeft: windowWidth/24,
  },
  submitButton: {
    borderRadius:50,
    paddingHorizontal:0,
    width: 200,
    height:100,
    alignItems:"center",
    backgroundColor: "#1DB954",
    marginVertical:windowHeight/5,
  },
  button: {
    borderRadius:50,
    paddingHorizontal:0,
    width: windowWidth/4,
    height:windowHeight/16,
    //marginLeft: -windowWidth/3,
    alignItems:"center",
    //backgroundColor: 'blue',
    justifyContent: "center",
    //marginVertical:windowHeight/3.5,
    borderWidth:2,
    borderColor:'#F4F0E0',
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: 'center',
    //marginVertical:windowHeight/4,
  },
  topButton:{
    borderRadius:10,
    paddingHorizontal:0,
    width: windowWidth/1.2,
    height:100,
    backgroundColor: "#00704A",
    marginTop:windowHeight/6,
    padding:10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    //alignContent: 'space-between',
    borderWidth: 5,
    borderColor: "#F4F0E0",
    justifyContent: "space-between",
  },
  largeIcon:{
    borderRadius:25,
    paddingHorizontal:0,
    width: 150,
    height:75,
    backgroundColor: "#00704A",
    marginVertical:windowHeight/20,
  },
  titleBar:{
    //borderRadius:25,
    width: 150,
    height:75,
    //borderColor: '#F4F0E0',
    backgroundColor: "#00704A",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: 'center',
    //borderColor: 
  },
  midButtonRow:{
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    width: 150,
    height:75,
    backgroundColor: "#00704A",
  }
})



//<FontAwesomeIcon icon="fa-solid fa-calendar-circle-user" />


/*

  Allergens Section

  <TouchableOpacity style={{...styles.topButton, flexDirection: "row", justifyContent:"space-between", flexWrap: "wrap", marginTop:windowHeight/8 }} onPress={() => navigation.navigate("Home")}>
    <FontAwesomeIcon icon = {faPlateWheat} size = {50} color = {'#F4F0E0'} style = {{...styles.largeIcon, marginTop:windowHeight/160, marginLeft: windowWidth/32}}></FontAwesomeIcon>
    <Text style={{...styles.text, flexDirection: "row", marginTop:windowHeight/48, marginRight: windowWidth/4}}>Allergens</Text>
  </TouchableOpacity>

*/