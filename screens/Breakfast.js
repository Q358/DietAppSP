import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ScrollView, SafeAreaView} from "react-native";
import { useFonts } from 'expo-font';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft, faAppleWhole, faBreadSlice, faCarrot, faEgg, faMugSaucer, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import FoodBlock from "../components/FoodBlock"

export default function Breakfast({ navigation }) {
  const [loaded] = useFonts({
    AdidogDemo: require('../assets/fonts/AdidogDemo-RpqMo.otf'),
    UbuntuBold: require('../assets/fonts/Ubuntu-Bold.ttf')
  });
    return (
    <View style={{...styles.container}}>
        <Text style = {{marginTop: 45, textAlign: "center", marginLeft: 15, color:'white', fontFamily:'UbuntuBold', fontSize:30}}>Today's Breakfast</Text>
        <View style = {{marginRight: 300, marginTop: -30}}>
        <TouchableOpacity onPress={()=>navigation.navigate("Diet")}>
          <FontAwesomeIcon icon={faAngleLeft} size = {30} color = {'grey'}/>
        </TouchableOpacity>
        </View>
        <View style = {{marginRight: 280, marginTop: 30}}>
        <FontAwesomeIcon icon={faBreadSlice} size = {55} color = {'brown'}/>
        </View>
        <Text style = {{color:"white", fontFamily:"AdidogDemo", fontSize:9, marginTop:-25, marginLeft:70}}>A slice of multigrain toast.</Text>
        <View style = {{marginRight: 280, marginTop: 50}}>
        <FontAwesomeIcon icon = {faAppleWhole} size = {60} color = {'red'}/>
        </View>
        <Text style = {{color:"white", fontFamily:"AdidogDemo", fontSize:9, marginTop:-25, marginRight:70}}>Whole apple</Text>
        <View style = {{marginRight: 280, marginTop: 50}}>
        <FontAwesomeIcon icon = {faMugSaucer} size = {70} color = {'purple'}/>
        </View>
        <Text style = {{color:"white", fontFamily:"AdidogDemo", fontSize:9, marginTop:-30, marginRight:70}}>A cup of black coffee</Text>
        <View style = {{marginRight: 280, marginTop: 50}}>
        <FontAwesomeIcon icon = {faEgg} size = {60} color = {'blue'}/>
        </View>
        <Text style = {{color:"white", fontFamily:"AdidogDemo", fontSize:9, marginTop:-25, marginRight:70}}>A boiled egg</Text>
        <View style = {{marginRight: 280, marginTop: 50}}>
        <FontAwesomeIcon icon = {faCarrot} size = {60} color = {'orange'}/>
        </View>
        <Text style = {{color:"white", fontFamily:"AdidogDemo", fontSize:9, marginTop:-25, marginRight:70}}>Two carrot slices</Text>

        <View style = {{marginTop: 100, flexDirection:"row"}}>
        <FontAwesomeIcon icon={faSquarePlus} size = {70} color = {'grey'}/>
        </View>
        <View style={{...styles.rectangle}}></View>
    </View>
  )
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgreen',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },

    rectangle: {
      display: inline-block,
      width: 100,
      height: 100,
      background: black,
    },
  });