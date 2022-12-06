import { StackActions } from "@react-navigation/native";
import { makeStyles } from "@rneui/themed";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAuth } from "../config/authContext";
import  Constants  from "expo-constants";

export default function LoadingScreen({ navigation }) {
    const [loaded] = useFonts({
      fontLogo: require('../assets/fonts/BandarBold-1GZ2g.ttf'),
    });
    const [fontsLoaded] = useFonts({ 
      fontBold: require('../assets/fonts/Ubuntu-Bold.ttf'),
      fontRegular: require('../assets/fonts/Ubuntu-Regular.ttf'),
      fontMedium: require('../assets/fonts/Ubuntu-Medium.ttf')
    })

    //console.log(Constants.manifest.extra.apiKey);

    const { user } = useAuth()
    const styles = useStyles()

    useEffect(() => {

      if(fontsLoaded) // After fonts load, if user is logged in, go to home, else go to landing page
        user !== undefined ? navigation.dispatch(user ? StackActions.replace("Main") : StackActions.replace("Landing")) : null

    }, [user])
 
    if (!loaded) {
     return null
    }

    return (
      <View style={styles.container}>
        <Text style={styles.logo}>nutri</Text>
      </View>
    )
  }
  
const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontFamily:"fontLogo",
    fontSize:70,
    color: theme.colors.textSecondary
  }
}))