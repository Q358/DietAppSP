import { faArrowUp, faBullseye, faCalendar, faPerson, faUtensils, faWeightScale, faX, faExclamationCircle, faRulerVertical, faCancel, faGenderless, faMale, faChild, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Icon, Input } from '@rneui/themed';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';
import BottomNav from "../components/BottomNav";
import RegistrationTitles from '../components/RegistrationTitles';
import RNDateTimePicker from '@react-native-community/datetimepicker';


export default function Registration ({navigation}) {
  const [userData, setUserData] = useState({
    dob: null,
    height: null,
    gender: null,
    currentWeight: null,
    goalWeight: null,
    goalDate: null,
    numMeals: null,
    restrictions: [],
  })
  const [dateOpen, setDateOpen] = useState(false)

  const handleSelectDate = () => {

    setDateOpen(false)
    console.log(userData.dob, dateOpen)
  }

  const [mydate, setDate] = useState(new Date())
  const changeSelectedDate = (event, selectedDate) => {
    setUserData({...userData, dob: selectedDate.toISOString().split("T")[0].replace(/-/g,'/') || mydate})
    setDateOpen(false)
    console.log(userData.dob, dateOpen)
  }

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
    return (
    <Swiper style={styles.wrapper} showsButtons={true} loop={false} >
      <View style={styles.slide}>
        <Text style={{...styles.titleText}}>Registration</Text>
      </View>
      <View style={styles.slide}>
        <Text style={{...styles.titleText}}>Demographics</Text>
        <RegistrationTitle title="Date of Birth" icon={faPerson} children={
          <TouchableOpacity onPress={() => setDateOpen(true)} style={styles.dateInput}>
            <FontAwesomeIcon icon={faCalendar} size={40} color={"#F4F0E0"}/>
            <Text style={{fontFamily:"fontRegular", color:"#F4F0E0", fontSize:20}}>{userData.dob ?? "Select Date"}</Text>
          </TouchableOpacity>
        }/>
        {dateOpen ? (
          <RNDateTimePicker
            value={mydate}
            display="default"
            onChange={changeSelectedDate}
          />
          ) : (null)
        }
        <RegistrationTitle title="Height" icon={faRulerVertical}/>
        <RegistrationTitle title="Gender" icon={faPerson}/>
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
        <Text style={{...styles.titleText}}>Weight</Text>
        <RegistrationTitle title="Current Weight" icon={faWeightScale}/>
        <RegistrationTitle title="Target Weight" icon={faBullseye}/>
        <RegistrationTitle title="Goal Date" icon={faCalendar} children={
          <TouchableOpacity onPress={() => setDateOpen(true)} style={styles.dateInput}>
            <FontAwesomeIcon icon={faCalendar} size={40} color={"#F4F0E0"}/>
            <Text style={{fontFamily:"fontRegular", color:"#F4F0E0", fontSize:20}}>{userData.dob ?? "Select Date"}</Text>
          </TouchableOpacity>
        }/>
      </View>
      <View style={styles.slide}>
          <Text style={{...styles.titleText}}>Diet</Text>
          <RegistrationTitle title="Number of Meals" icon={faUtensils} />
          <RegistrationTitle title="Restrictions" icon={faCancel} />
      </View>
      <View style={styles.slide}>
        <View style = {{...styles.titleBar, marginLeft: windowWidth/3.33}}>
          <Text style={{...styles.titleText}}>All Set!</Text>
        </View>
          <View style = {styles.buttonLocation}>
          <TouchableOpacity style={{...styles.button, backgroundColor:"#1DB954"}} onPress={() => navigation.navigate("Home")}>
            <Text style={{...styles.text}}>Begin</Text>
          </TouchableOpacity>
          </View>
      </View>
   </Swiper>
    );
}

function RegistrationTitle({icon, title, children}) {
  return(
    <View style={{ justifyContent:"space-between", width:"100%", alignItems:"center" }}>
      <View style={styles.regTitle}>
        <FontAwesomeIcon icon={icon} color={'#F4F0E0'} size={50}/>
        <Text style={styles.regTitleText}>{title}</Text>
      </View>
      {children}
    </View>
  )
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
  regTitle:{
    flexDirection:"row",
    alignItems:"center",
    borderColor:'#F4F0E0',
    borderWidth:5,
    borderRadius:10,
    padding:10,
    width:"80%",
    marginBottom:10
  },
  regTitleText:{
    fontFamily:"fontBold",
    color:'#F4F0E0',
    fontSize:25,
    marginLeft:25
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00704A',
    paddingTop:10,
    justifyContent:"space-evenly"
  },
  buttonLocation:{
    marginVertical:windowHeight/12,
  },
  titleText: {
    color: '#F4F0E0',
    fontSize: 40,
    //marginTop: windowHeight/12,
    fontWeight: 'bold',
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
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    width: "99%",
    height:75,
    backgroundColor: "#00704A",
  },
  dateInput:{
    flexDirection:"row",
    borderWidth:1,
    borderColor:"#F4F0E0",
    width:"50%", padding:1,
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:10
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