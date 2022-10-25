import { SafeAreaView, Image, StyleSheet, TouchableOpacity, Text, View, Dimensions, ScrollView } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


export default function Diet({navigation}) {
  return (
    <View style={{...styles.container, alignItems: "center"}}>
      <Text style = {{marginVertical:50, marginTop:-400}}>Diet</Text>
      <Text style = {{fontFamily: "BandarBold", color:"white", fontSize:40, marginTop:-15, marginBottom: 10}}>Today's Meals</Text>
      <View style = {{...styles.rectangle, marginTop: 10, marginRight:250}}/>
      <View style = {{...styles.rectangle, marginTop: -100, alignItems:"center"}}/>
      <View style = {{...styles.rectangle, marginTop: -100, marginLeft:250}}/>
      <Text style = {{marginVertical:50, marginTop: 10, marginRight:260}}>Breakfast</Text>
      <Text style = {{marginVertical:50, marginTop: -70, alignItems: "center"}}>Lunch</Text>
      <Text style = {{marginVertical:50, marginTop: -70, marginLeft:260}}>Dinner</Text>
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
      width: 115,
      backgroundColor: '#333333',
      borderRadius:10
    },

    // dividerStyle: {
    //   borderBottomColor : "lightgray", 
    //   borderBottomWidth:10, 
    //   borderRadius:30, 
    //   width:250
    // },
});

