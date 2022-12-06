import { faArrowUp, faBullseye, faCalendar, faPerson, faUtensils, faWeightScale, faX, faExclamationCircle, faRulerVertical, faTransgender, faGenderless, faMale, faChild, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
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
        </View>
        <View style={styles.slide}>
          <View style = {{...styles.titleBar, marginLeft: windowWidth/8}}>
            <Text style={{...styles.titleText}}>Demographics</Text>
          </View>
            <RegSections icon = {faPerson} title = "Date of Birth"/>
            <RegSections icon = {faRulerVertical} title = "Height"/>
            <RegSections icon = {faChild} title = "Gender"/>
            <View style = {{...styles.midButtonRow}}>
                <SelectButtons title = "Male"/>
                
                <SelectButtons title = "Female"/>

                <SelectButtons title = "Other"/>
            </View>
        </View>
        <View style={styles.slide}>
          <View style = {{...styles.titleBar, marginLeft: windowWidth/2.25}}>
            <Text style={{...styles.titleText}}>Weight</Text>
          </View>
          <RegSections icon = {faWeightScale} title = "Current Weight"/>
          <RegSections icon = {faBullseye} title = "Target Weight"/>
          <RegSections icon = {faCalendarCheck} title = "Goal Date"/>
        </View>
        <View style={styles.slide}>
          <View style = {{...styles.titleBar, marginLeft: windowWidth/1.8}}>
            <Text style={{...styles.titleText}}>Diet</Text>
          </View>
            <RegSections icon = {faUtensils} title = "Number of Meals"/>
            <RegSections icon = {faX} title = "Restrictions"/>
            <View style = {{...styles.midButtonRow}}>
                <SelectButtons title = "Vegan"/>
                <SelectButtons title = "Vegetarian"/>
                <SelectButtons title = "Gluten Free"/>
                <SelectButtons title = "Peanut-Free"/>
                <SelectButtons title = "Dairy-Free"/>
                <SelectButtons title = "Nut-Free"/>
            </View>          
        </View>
        <View style={styles.slide}>
          <View style = {{...styles.titleBar, marginLeft: windowWidth/3.33}}>
            <Text style={{...styles.titleText}}>Diagnoses</Text>
          </View>
        </View>
        <View style={styles.slide}>
          <View style = {{...styles.titleBar}}>
            <Text style={{...styles.titleText}}>All Set!</Text>
          </View>
            <View style = {styles.buttonLocation}>
              <TouchableOpacity style={{...styles.button, backgroundColor:"#1DB954", marginVertical:windowHeight/4.25,}}>
                <Text style={{...styles.text}}>Begin</Text>
              </TouchableOpacity>
            </View>
        </View>
   </Swiper>
    );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function SelectButtons ({title}){
    return (
      <TouchableOpacity style = {{...styles.button}}>
      <Text style = {{...styles.mediumButtonText}}>{title}</Text>
      </TouchableOpacity>
    )
};

function RegSections ({title, icon}){
  return (
    <TouchableOpacity style={{...styles.topButton, flexDirection: "row", justifyContent:"space-evenly", flexWrap: "wrap"}}>
      <FontAwesomeIcon icon = {icon} size = {50} color = {'#F4F0E0'} style = {{...styles.largeIcon, marginTop:10}}></FontAwesomeIcon>
      <Text style={{...styles.text, marginTop:10}}>{title}</Text>
    </TouchableOpacity>
  )

};

const styles = StyleSheet.create({
  wrapper: {
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00704A',
    paddingBottom:50,
    justifyContent: "space-between",
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
    //flexWrap: 'wrap',
    marginTop: windowWidth/6.5,
  },
  mediumButtonText: {
    color: '#F4F0E0',
    fontSize: 20,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  mediumButtonTextLong: {
    color: '#F4F0E0',
    fontSize: 25,
    fontWeight: 'regular',
    //alignItems: 'center',
    justifyContent: 'center',
    //flexDirection: 'row',
    //flexWrap: 'wrap',
    
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
    paddingHorizontal:10,
    marginHorizontal: 5,
    marginVertical:10,
    paddingVertical: 15,
    alignItems:"center",
    justifyContent: 'center',
    borderWidth:4,
    borderColor:'#F4F0E0',
    flexDirection: "row",
    alignContent: 'center',
  },
  topButton:{
    borderRadius:10,
    paddingHorizontal:0,
    width: windowWidth/1.2,
    height:100,
    backgroundColor: "#00704A",
    padding:10,
    flexDirection: 'row',
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#blue",
    width:"99%",
    flexWrap:'wrap',
  },
  inputDOB:{

  },
})



//<FontAwesomeIcon icon="fa-solid fa-calendar-circle-user" />


/*

  Allergens Section

  <TouchableOpacity style={{...styles.topButton, flexDirection: "row", justifyContent:"space-between", flexWrap: "wrap", marginTop:windowHeight/8 }} onPress={() => navigation.navigate("Home")}>
    <FontAwesomeIcon icon = {faPlateWheat} size = {50} color = {'#F4F0E0'} style = {{...styles.largeIcon, marginTop:windowHeight/160, marginLeft: windowWidth/32}}></FontAwesomeIcon>
    <Text style={{...styles.text, flexDirection: "row", marginTop:windowHeight/48, marginRight: windowWidth/4}}>Allergens</Text>
  </TouchableOpacity>

*/