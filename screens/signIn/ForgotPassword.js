import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../config/authContext";

export default function ForgotPassword() {
  const [email, onChangeEmail] = useState()
  const [sent, setSent] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [incomplete, setIncomplete] = useState(false)

  const { resetPassword } = useAuth()

  useEffect(() => {

    setIncomplete(false)

  }, [email])

  const handleSubmit = async () => {
    
    if (!email || !email.match(/\S+@\S+\.\S+/)) {
      setIncomplete(true)
      return 0
    }

    try {
      setIsLoading(true)
      await resetPassword(email)
      setSent(true)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>no password?</Text>
      <Text style={styles.text}>no problem.</Text>
      <View style = {{borderBottomColor : "white", borderBottomWidth:3, borderRadius:30, width:300}}/>
      <TextInput style={styles.textInput} onChangeText={onChangeEmail} value={email} placeholder="email" autoComplete="email"/>
      <Text style={{color:"red", marginVertical:5}}>
        {incomplete ? "Please enter a valid email address" : null}
      </Text>
      <TouchableOpacity style={{...styles.button, backgroundColor:isLoading ? "lightgray" : "white" }} onPress={handleSubmit} disabled={isLoading}>
        <Text style={{fontSize:15,fontWeight:"500", color:"lightblue"}}>reset password</Text>
      </TouchableOpacity>
      <Text style={styles.sentText}>
        {sent ? "email sent!" : null}
      </Text>      
    </View>
  )
}
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5
    },
    text:{
      fontSize: 40,
      color:"white",
      fontFamily:"fontLogo",
      marginBottom:10
    },
    sentText: {
      fontSize: 30,
      color:"#b0fe8d",
      fontWeight:"800"
    },
    button: {
      borderRadius:50,
      padding:15,
      width: 170,
      marginHorizontal:8,
      marginBottom:20,
      alignItems:"center"
    },
    textInput: {
      padding: 10,
      borderWidth: 1,
      borderRadius: 20,
      width: 300,
      borderColor:"white",
      marginTop:30
    },
  });