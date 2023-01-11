import { CommonActions, StackActions } from "@react-navigation/native";
import { Input } from "@rneui/themed/dist";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../config/authContext";

export default function SignUp({ navigation }) {
  const [email, onChangeEmail] = useState()
  const [name, onChangeName] = useState()
  const [password, onChangePassword] = useState()
  const [errorText, setErrorText] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const { register } = useAuth()

  useEffect(() => {

    setErrorText()
  
  }, [email, name, password])
  
  const handleSubmit = async () => {

    if (!email || !name || !password) {
      setErrorText("Please fill out all fields")
      return 0
    }
    if(!email.match(/\S+@\S+\.\S+/)){
      setErrorText("Please enter a valid email address")
      return 0
    }
    if(!(password.length >= 8)){
      setErrorText("Password must be longer than 8 characters")
      return 0
    }
    if(name.length >= 30){
      setErrorText("Name must be shorter than 30 characters")
      return 0
    }

    try {
      setIsLoading(true)
      await register(email, password, name)
      navigation.navigate("Registration")
    } catch (error) {
      setIsLoading(false)
      setErrorText( 
        error.code === "auth/email-already-in-use" ? "An account with this email already exists"
          : error.code === "auth/invalid-email" ? "Please enter a valid email address"
            : "There was a problem signing up. Please try again later"
      )
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>sign up</Text>
      <TextInput style={styles.textInput} onChangeText={onChangeEmail} value={email} placeholder="email" autoComplete="email" on/>
      <TextInput style={styles.textInput} onChangeText={onChangeName} value={name} placeholder="name" autoComplete="name"/>
      <TextInput style={styles.textInput} onChangeText={onChangePassword} value={password} placeholder="password" secureTextEntry={true} autoComplete="password-new"/>
      <Text style={{color:"red", marginTop:8}}>
        {errorText ? errorText : null}
      </Text>
      <TouchableOpacity style={{...styles.button, backgroundColor:isLoading ? "lightgray" : "white"}} onPress={handleSubmit} disabled={isLoading}>
        <Text style={{fontWeight:"500", color:"lightgreen"}}>submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"#9ce979"
    },
    text: {
      fontSize: 50,
      color:"white",
      fontFamily:"fontLogo",

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
      marginTop:30,
      borderColor:"white"
    },
    button: {
      borderRadius:50,
      padding:15,
      width: 170,
      marginHorizontal:8,
      marginTop:8,
      marginBottom:15,
      alignItems:"center",
      backgroundColor: "white"
    },
});