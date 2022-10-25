import { useFonts } from "expo-font";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login({ navigation }) {
  const [email, onChangeEmail] = useState()
  const [password, onChangePassword] = useState()
  const [loaded] = useFonts({
    BandarBold: require('../../assets/fonts/BandarBold-1GZ2g.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>login</Text>
      <TextInput style={styles.textInput} onChangeText={onChangeEmail} value={email} placeholder="email"/>
      <TextInput style={styles.textInput} onChangeText={onChangePassword} value={password} placeholder="password" secureTextEntry={true}/>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
        <Text style={{fontWeight:"500", color:"lightgreen"}}>submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"lightgreen"
    },
    text: {
      fontSize: 50,
      color:"white",
      fontFamily:"BandarBold"
    },
    textInput: {
      padding: 10,
      borderWidth: 1,
      borderRadius: 20,
      width: 300,
      margin: 15,
      borderColor:"white"
    },
    button: {
      borderRadius:50,
      padding:15,
      width: 170,
      marginHorizontal:8,
      marginVertical:15,
      alignItems:"center",
      backgroundColor: "white"
    },
});