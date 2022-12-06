import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { registerRootComponent } from 'expo'
import { AuthProvider } from './config/authContext'
import BarcodeScanSceen from './screens/BarcodeScanScreen'
import Diet from './screens/Diet'
import Friends from './screens/Friends'
import Home from './screens/Home'
import Landing from './screens/Landing'
import LoadingScreen from './screens/LoadingScreen'
import Profile from './screens/Profile'
import ForgotPassword from './screens/signIn/ForgotPassword'
import Login from './screens/signIn/Login'
import SignUp from './screens/signIn/SignUp'
import Trophies from './screens/Trophies'
import Workout from './screens/Workout'
import Breakfast from './screens/Breakfast'
import Cheats from './screens/Cheats'
import Lunch from './screens/Lunch'
import Dinner from './screens/Dinner'
import { createTheme, ThemeConsumer, ThemeProvider, useTheme } from '@rneui/themed'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useColorScheme } from 'react-native'
import { useEffect, useState } from "react"


const Stack = createNativeStackNavigator();
// registerRootComponent(App);

export default function App() {
  const [mode, setMode] = useState()
  const colorScheme = useColorScheme()

  useEffect(() => {

    const initMode = async () => {
      await AsyncStorage.getItem("appTheme").then(value => setMode(JSON.parse(value)))
      mode ? null : colorScheme ? setMode(colorScheme) : setMode("light")
    }
    initMode()
    
  }, [])

  const mainTheme = createTheme({
    lightColors: {
      primary: 'lightgreen', // #68CC68?
      secondary: 'white',
      tertiary: "#29a442",
      textPrimary: "white",
      textSecondary:"black"
    },
    darkColors: {
      primary: '#3c3c3c',
      secondary: '#013220',
      tertiary: '#1a2421',
      textPrimary:"white",
      textSecondary:"white"
    },
    mode: mode,
  });

  if(!mode){
    return null
  }
  return (
    <ThemeProvider theme={mainTheme}>
      <AuthProvider>
        <ThemeConsumer>
          {({ theme }) => (
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false,}}>
              <Stack.Screen name="Loading" component={LoadingScreen}/>
              <Stack.Screen name="Landing" component={Landing}/>
              <Stack.Screen name="Login" component={Login}/>
              <Stack.Screen name="SignUp" component={SignUp}/>
              <Stack.Screen name="Home" component={Home}/>
              <Stack.Screen name="Friends" component={Friends}/>
              <Stack.Screen name="Trophies" component={Trophies}/>
              <Stack.Screen name="Profile" component={Profile}/>
              <Stack.Screen name="Diet" component={Diet}/>
              <Stack.Screen name="Barcode" component={BarcodeScanSceen}/>
              <Stack.Screen name="Workout" component={Workout}/>
              <Stack.Screen name="Forgot" component={ForgotPassword}/>
              <Stack.Screen name="Breakfast" component={Breakfast}/>
              <Stack.Screen name="Cheats" component={Cheats}/>
              <Stack.Screen name="Lunch" component={Lunch}/>
              <Stack.Screen name="Dinner" component={Dinner}/>
            </Stack.Navigator>
          </NavigationContainer>
          )}
        </ThemeConsumer>
      </AuthProvider>
    </ThemeProvider>
  );
}
