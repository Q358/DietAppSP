import { useFonts } from "expo-font";
import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../config/authContext";

export default function SignUp({ navigation }) {
  const [email, onChangeEmail] = useState()
  const [name, onChangeName] = useState()
  const [password, onChangePassword] = useState()
  const [loaded] = useFonts({
    BandarBold: require('../../assets/fonts/BandarBold-1GZ2g.ttf'),
  });
  const { register } = useAuth()

  if (!loaded) {
    return null;
  }

  const handleSubmit = async () => {
    if (!email || !name || !password) {
      Alert.alert("Please fill out all fields")
      return 0
    }
    else{
      try {
        await register(email, password, name)
        navigation.navigate("Home")
      } catch (error) {
        Alert.alert("Failed to sign up:" + error)
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>sign up</Text>
      <TextInput style={styles.textInput} onChangeText={onChangeEmail} value={email} placeholder="email"/>
      <TextInput style={styles.textInput} onChangeText={onChangeName} value={name} placeholder="name"/>
      <TextInput style={styles.textInput} onChangeText={onChangePassword} value={password} placeholder="password" secureTextEntry={true}/>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
    underText: {
      fontSize: 20,
      color:"#b7b7b2",
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