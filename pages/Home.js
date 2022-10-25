import React, {useState, useEffect} from 'react';
import { SafeAreaView, Button, Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { faTrophy, faUserGroup, faAppleWhole, faFish, faCarrot, faBreadSlice, faWineGlass, faCheese, faCookieBite, faSmoking } from '@fortawesome/free-solid-svg-icons';
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
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get('window').height;
  var progress = 0.76
  return (

    <View style={{...styles.container, justifyContent:"space-between", alignItems: 'center'}}>
      <View style={styles.container}>
      <View style={{flexDirection:"row", marginTop:50, width:"100%"}}>
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
      <View style = {{borderBottomColor : "#C1C1C1", marginHorizontal:windowWidth/20, marginVertical:windowHeight/40, borderBottomWidth:10, borderRadius:30, width:300}}/>
      <Text style = {{fontFamily: "AdidogDemo", color:"white", fontSize:12, marginBottom:20, marginTop:-15}}>Daily Breakdown</Text>
      <TouchableOpacity style = {styles.weeklyProgressButton} onPress = {() => navigation.navigate("Diet")}>
        <Text style = {styles.boxText}>Diet</Text>
        <TouchableOpacity style = {{...styles.dietIconBoxes, marginTop:10}} onPress ={() => navigation.navigate("Diet")}>
          <View style = {{...styles.redDietIcon, marginLeft:-7.5, marginTop:-5}} onPress = {() => navigation.navigate("Diet")}>
            <FontAwesomeIcon icon = {faAppleWhole} size = {20} color = {'white'}></FontAwesomeIcon>
          </View>
          <View style = {{...styles.blueDietIcon, marginLeft:-7.5, marginTop:2}} onPress = {() => navigation.navigate("Diet")}>
            <FontAwesomeIcon icon = {faFish} size = {20} color = {'white'}></FontAwesomeIcon>
          </View>
          <View style = {{...styles.orangeDietIcon, marginLeft:27.5, marginTop:-62}} onPress = {() => navigation.navigate("Diet")}>
            <FontAwesomeIcon icon = {faCarrot} size = {20} color = {'white'}></FontAwesomeIcon>
          </View>
          <View style = {{...styles.lightBrownDietIcon, marginLeft:27.5, marginTop:2}} onPress = {() => navigation.navigate("Diet")}>
            <FontAwesomeIcon icon = {faBreadSlice} size = {20} color = {'white'}></FontAwesomeIcon>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style = {{...styles.dietIconBoxes, marginTop:-79, marginHorizontal:85}} onPress ={() => navigation.navigate("Diet")}>
        <View style = {{...styles.redDietIcon, marginLeft:-7.5, marginTop:-5}} onPress = {() => navigation.navigate("Diet")}>
            <FontAwesomeIcon icon = {faAppleWhole} size = {20} color = {'white'}></FontAwesomeIcon>
          </View>
          <View style = {{...styles.blueDietIcon, marginLeft:-7.5, marginTop:2}} onPress = {() => navigation.navigate("Diet")}>
            <FontAwesomeIcon icon = {faFish} size = {20} color = {'white'}></FontAwesomeIcon>
          </View>
          <View style = {{...styles.orangeDietIcon, marginLeft:27.5, marginTop:-62}} onPress = {() => navigation.navigate("Diet")}>
            <FontAwesomeIcon icon = {faCarrot} size = {20} color = {'white'}></FontAwesomeIcon>
          </View>
          <View style = {{...styles.lightBrownDietIcon, marginLeft:27.5, marginTop:2}} onPress = {() => navigation.navigate("Diet")}>
            <FontAwesomeIcon icon = {faBreadSlice} size = {20} color = {'white'}></FontAwesomeIcon>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style = {{...styles.dietIconBoxes, marginTop:-79, marginHorizontal:170}} onPress ={() => navigation.navigate("Diet")}>
        <View style = {{...styles.redDietIcon, marginLeft:-7.5, marginTop:-5}} onPress = {() => navigation.navigate("Diet")}>
            <FontAwesomeIcon icon = {faAppleWhole} size = {20} color = {'white'}></FontAwesomeIcon>
          </View>
          <View style = {{...styles.blueDietIcon, marginLeft:-7.5, marginTop:2}} onPress = {() => navigation.navigate("Diet")}>
            <FontAwesomeIcon icon = {faFish} size = {20} color = {'white'}></FontAwesomeIcon>
          </View>
          <View style = {{...styles.orangeDietIcon, marginLeft:27.5, marginTop:-62}} onPress = {() => navigation.navigate("Diet")}>
            <FontAwesomeIcon icon = {faCarrot} size = {20} color = {'white'}></FontAwesomeIcon>
          </View>
          <View style = {{...styles.lightBrownDietIcon, marginLeft:27.5, marginTop:2}} onPress = {() => navigation.navigate("Diet")}>
            <FontAwesomeIcon icon = {faBreadSlice} size = {20} color = {'white'}></FontAwesomeIcon>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style = {{...styles.cheatIconBox, marginTop:-71, marginHorizontal:255}} onPress ={() => navigation.navigate("Diet")}>
          <View style = {{...styles.purpleCheatIcon, marginLeft:-10, marginTop: -7.5}} onPress = {() => navigation.navigate("Diet")}>
            <FontAwesomeIcon icon = {faWineGlass} size = {18} color = {'white'}></FontAwesomeIcon>
          </View>
          <View style = {{...styles.lightYellowCheatIcon, marginLeft:-10, marginTop: 2.5}} onPress = {() => navigation.navigate("Diet")}>
            <FontAwesomeIcon icon = {faCheese} size = {18} color = {'white'}></FontAwesomeIcon>
          </View>
          <View style = {{...styles.darkBrownCheatIcon, marginLeft: 20, marginTop: -27.5}} onPress = {() => navigation.navigate("Diet")}>
            <FontAwesomeIcon icon = {faCookieBite} size = {18} color = {'white'}></FontAwesomeIcon>
          </View>
          <View style = {{...styles.greyCheatIcon, marginLeft: 20, marginTop: -57.5}} onPress = {() => navigation.navigate("Diet")}>
            <FontAwesomeIcon icon = {faSmoking} size = {18} color = {'white'}></FontAwesomeIcon>
          </View>
        </TouchableOpacity>
        <View></View>
      </TouchableOpacity>
      <TouchableOpacity style = {{...styles.weeklyProgressButton, marginTop:15}} onPress = {() => navigation.navigate("Workout")}>
        <Text style = {styles.boxText}>Workout</Text>
        <View></View>
      </TouchableOpacity>
      </View>
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
      width : 250,
      marginVertical: 25,
      //marginHorizontal: 20,
      borderRadius:30,
      color: 'white',
      borderColor: 'white'
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
    redDietIcon: {
      backgroundColor: '#FF0005',
      borderRadius:10,
      padding:5,
      marginLeft:-5,
      width: 30,
      height:30
    },
    blueDietIcon: {
      backgroundColor: '#009EE2',
      borderRadius:10,
      padding:5,
      marginLeft:-5,
      width: 30,
      height:30
    },
    orangeDietIcon: {
      backgroundColor: '#FF8C00',
      borderRadius:10,
      padding:5,
      marginLeft:-5,
      width: 30,
      height:30
    },
    lightBrownDietIcon: {
      backgroundColor: '#906A19',
      borderRadius:10,
      padding:5,
      marginLeft:-5,
      width: 30,
      height:30
    },
    purpleCheatIcon: {
      backgroundColor: '#6306AB',
      borderRadius:8,
      padding:5,
      marginLeft:-5,
      width: 27.5,
      height:27.5
    },
    lightYellowCheatIcon: {
      backgroundColor: '#E0DA00',
      borderRadius:8,
      padding:5,
      marginLeft:-5,
      width: 27.5,
      height:27.5
    },
    darkBrownCheatIcon: {
      backgroundColor: '#3C2000',
      borderRadius:8,
      padding:5,
      marginLeft:-5,
      width: 27.5,
      height:27.5
    },
    greyCheatIcon: {
      backgroundColor: '#74625A',
      borderRadius:8,
      padding:5,
      marginLeft:-5,
      width: 27.5,
      height:27.5
    },
    dietIconBoxes:{
      backgroundColor: '#4D4D4D',
      width: 78,
      height: 79,
      paddingVertical: 15,
      paddingHorizontal: 15,
      borderRadius: 15
    },
    cheatIconBox: {
      backgroundColor: '#4D4D4D',
      width: 67,
      height: 71,
      paddingVertical: 15,
      paddingHorizontal: 15,
      borderRadius: 15
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
