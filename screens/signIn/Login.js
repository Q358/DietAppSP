import { CommonActions, StackActions } from "@react-navigation/native"
import { useFonts } from "expo-font"
import { useEffect, useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useAuth } from "../../config/authContext"

export default function Login ({ navigation }) {
  const [loaded] = useFonts({
    BandarBold: require('../../assets/fonts/BandarBold-1GZ2g.ttf'),
  });
  const [email, onChangeEmail] = useState()
  const [password, onChangePassword] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [errorText, setErrorText] = useState()
  
  const { login } = useAuth()

  useEffect(() => {
    
    setErrorText()

  }, [email, password])
  

  if (!loaded) {
    return null;
  }
  
  // TODO Improve Alert and add input validation
  const handleSubmit = async () => {
    if (!email || !password) {
      setErrorText("Please fill out all fields")
      return 0
    }
    if(!email.match(/\S+@\S+\.\S+/)){
      setErrorText("Please enter a valid email address")
      return 0
    }
    try {
      setIsLoading(true)
      await login(email, password)
      navigation.dispatch(CommonActions.reset(({ // Stops users from going back to Login page
        index: 0,
        routes: [
          { name: 'Home' },
        ],
      })))
    } catch (error) {
      setIsLoading(false)
      setErrorText( 
        error.code === "auth/user-not-found"  || "auth/wrong-password" ? "We can't find a user with that email and password"
          : error.code === "auth/invalid-email" ? "Please enter a valid email address"
            : error.code === "auth/user-disabled" ? "This account has been disabled. Please contact support"
              : "There was a problem logging in. Please try again later"
      )
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>login</Text>
      <TextInput style={{...styles.textInput, marginVertical:15}} onChangeText={onChangeEmail} value={email} placeholder="email" autoComplete="email"/>
      <TextInput style={{...styles.textInput, marginTop:15}} onChangeText={onChangePassword} value={password} placeholder="password" secureTextEntry={true} autoComplete="password"/>
      <Text style={{color:"red", marginVertical:7.5, justifyContent:"center"}}>
        {errorText ? errorText : null}
      </Text>
      <TouchableOpacity style={{...styles.button, backgroundColor:isLoading ? "lightgray" : "white" }} onPress={handleSubmit} disabled={isLoading}>
        <Text style={{fontWeight:"500", color:"lightgreen"}}>submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{paddingHorizontal:20, paddingVertical:5}} onPress={() => navigation.navigate("Forgot")}>
        <Text style={{color:"white"}}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"lightgreen",
    padding:15
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
    borderColor:"white"
  },
  button: {
    borderRadius:50,
    padding:15,
    width: 170,
    marginHorizontal:8,
    marginBottom:20,
    alignItems:"center"
  },
});