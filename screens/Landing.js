import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useAuth } from '../config/authContext';
import FatSecretBadge from '../components/FatSecretBadge';

export default function Landing({ navigation }) {
  const [loaded] = useFonts({
    BandarBold: require('../assets/fonts/BandarBold-1GZ2g.ttf'),
  });

  const { user } = useAuth()

  if (!loaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={{fontFamily:"BandarBold", fontSize:70}}>nutri</Text>
      <Text style={{fontSize:20, color:"gray", marginBottom:50}}>healthify yourself</Text>
      <View style={styles.rowContainer}>
        <TouchableOpacity style={{...styles.button, backgroundColor:"#befea2"}} onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.button, backgroundColor:"lightgreen"}} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
      <FatSecretBadge style={{marginTop:100}} size={8}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 300
    },
    rowContainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',

      // flexDirection: "row"
    },
    button: {
      borderRadius:50,
      padding:15,
      width: 170,
      marginHorizontal:8,
      marginVertical:15,
      alignItems:"center"
    },
    buttonText: {
      fontSize: 25,
      fontWeight: "500"
    }
  });