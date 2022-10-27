import { SafeAreaView, Image, StyleSheet, TouchableOpacity, Text, View, Dimensions, ScrollView } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleDown, faAngleLeft, faAngleRight, faAppleWhole, faBarcode, faChartColumn, faHouse, faTrophy } from "@fortawesome/free-solid-svg-icons";


export default function Diet({navigation}) {
  return (
    <View style={{...styles.container, alignItems: "center"}}>
      <Text style = {{marginVertical:50, marginTop:40, color:'white', fontFamily:'AdidogDemo', fontSize:10}}>Diet</Text>
      <View style = {{...styles.leftArrowIcon, marginRight: 300}}>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
          <FontAwesomeIcon icon={faAngleLeft} size = {30} color = {'grey'}/>
      </TouchableOpacity>
      </View>
      <Text style = {{fontFamily: "BandarBold", color:"white", fontSize:40, marginTop:-15, marginBottom: 10}}>Today's Meals</Text>
      <View style = {{...styles.rectangle, marginTop: 10, marginRight:250}}/>
      <View style = {{...styles.rectangle, marginTop: -100, alignItems:"center"}}/>
      <View style = {{...styles.rectangle, marginTop: -100, marginLeft:250}}/>
      <Text style = {{marginVertical:50, marginTop: 10, marginRight:260}}>Breakfast</Text>
      <Text style = {{marginVertical:50, marginTop: -70, alignItems: "center"}}>Lunch</Text>
      <Text style = {{marginVertical:50, marginTop: -70, marginLeft:260}}>Dinner</Text>
      <Text style = {{fontFamily: "BandarBold", color:"white", fontSize:40, marginTop:-15, marginBottom: 10, marginRight:80}}>This Week</Text>
      <View style = {{...styles.rectangle2, marginTop: 10, marginRight:250}}>
        <Text style = {{marginTop:20, marginLeft: 135, color:"white", fontFamily:"AdidogDemo", fontSize:10}}>Sunday</Text>
        <View style = {{...styles.leftArrow, marginTop:30}}>
        <FontAwesomeIcon icon={faAngleLeft} size = {30} color = {'white'}/>
        </View>
        <View style = {{...styles.rightArrow, marginTop:-30, marginLeft: 320}}>
        <FontAwesomeIcon icon={faAngleRight} size = {30} color = {'white'}/>
        </View>
      </View>
    <Text style = {{fontFamily: "BandarBold", color:"white", fontSize:35, marginTop: 20}}>Cheats</Text>
    <View style = {{...styles.rectangle3, marginTop: 10, marginRight:5}}/>
    <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
    <View style = {{...styles.houseButton, marginRight:200, marginTop: 50}}>
      <FontAwesomeIcon icon={faHouse} size = {40} color = {'white'}/>
    </View>
    </TouchableOpacity>
    <TouchableOpacity style={{marginTop:-65, borderRadius:50, backgroundColor:"white", padding:15, height:80}} onPress={()=>navigation.navigate("Barcode")}>
        <FontAwesomeIcon icon={faBarcode} size={50} />
      </TouchableOpacity>
    <View style = {{...styles.chartButton, marginLeft:200, marginTop:-50}}>
      <FontAwesomeIcon icon={faChartColumn} size = {40} color = {'white'}/>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgreen',
      alignItems: 'center',
      justifyContent: 'center',
    },

    rectangle: {
      height: 100,
      width: 120,
      backgroundColor: '#333333',
      borderRadius:10
    },

    leftArrowIcon: {
      marginTop: -80, 
      marginBottom: 40
    }, 
    rectangle2: {
      height: 170,
      width: 350,
      backgroundColor: '#C1C1C1',
      borderRadius:30, 
      marginLeft: 250

    },

    smallRectangle: {
      height: 50, 
      width: 60, 
      color: 'red'
    }, 

    rectangle3: {
      height: 75,
      width: 350,
      backgroundColor: '#333333',
      borderRadius:10
    },


});

