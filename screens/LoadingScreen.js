import { StackActions } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAuth } from "../config/authContext";

export default function LoadingScreen({ navigation }) {
    const [loaded] = useFonts({
      BandarBold: require('../assets/fonts/BandarBold-1GZ2g.ttf'),
    });

    const { user } = useAuth()

    useEffect(() => {

      // If user is logged in, go to home, else go to landing page
      user !== undefined ? navigation.dispatch(user ? StackActions.replace("Home") : StackActions.replace("Landing")) : null

    }, [user])
 
    if (!loaded) {
     return null
    }

    return (
      <View style={styles.container}>
        <Text style={{fontFamily:"BandarBold", fontSize:70}}>nutri</Text>
      </View>
    )
  }
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
  });