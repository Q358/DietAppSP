import { SafeAreaView, Image, StyleSheet, TouchableOpacity, Text, View, Dimensions, ScrollView } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import BottomNav from "../components/BottomNav";
import React from "react";

export default function Diet({navigation}) {
  return (
    <View style={{...styles.container, justifyContent:"space-between", alignItems: "center"}}>
      <Text style = {{marginVertical:50}}>Diet</Text>
      <Text style = {{fontFamily: "BandarBold", color:"white", fontSize:40, marginBottom:750, marginTop:-15}}>Today's Meal</Text>
      {/* <View style = {{...styles.rectangle, alignItems: "center"}}><Text style = {{marginVertical:50}}>Test</Text></View> */}
      <View style = {{height:50, width:50, backgroundColor:'red'}}/>
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

    // rectangle: {
    //   height: 70,
    //   width: 70,
    //   backgroundColor: '#333333'
    // },

    // dividerStyle: {
    //   borderBottomColor : "lightgray", 
    //   borderBottomWidth:10, 
    //   borderRadius:30, 
    //   width:250
    // },
});

