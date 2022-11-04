import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ScrollView, SafeAreaView} from "react-native";
import { useFonts } from 'expo-font';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft, faBreadSlice } from "@fortawesome/free-solid-svg-icons";
import FoodBlock from "../components/FoodBlock"

export default function Breakfast({ navigation }) {
    const [loaded] = useFonts({  
        AdidogDemo: require('../assets/fonts/AdidogDemo-RpqMo.otf'),
        UbuntuBold: require('../assets/fonts/Ubuntu-Bold.ttf')
      });
    return (
    <View style={{...styles.container, alignItems:"center"}}>
        <Text style = {{marginVertical:50, marginTop:-650, marginLeft: 15, color:'white', fontFamily:'UbuntuBold', fontSize:30}}>Today's Breakfast</Text>
        <View style = {{marginRight: 300, marginTop: -80}}>
        <TouchableOpacity onPress={()=>navigation.navigate("Diet")}>
          <FontAwesomeIcon icon={faAngleLeft} size = {30} color = {'grey'}/>
        </TouchableOpacity>
        </View>
        
        <FontAwesomeIcon icon={faBreadSlice} size = {70} color = {'white'}/>

        
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

    //   rectangle1: {
    //     height: 100, 
    //     width: 100, 
    //     color: 'red',
    //   },
  });