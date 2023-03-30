import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { registerRootComponent } from 'expo'
import { AuthProvider } from './config/authContext'
import BarcodeScanSceen from './screens/BarcodeScanScreen'
import Landing from './screens/Landing'
import LoadingScreen from './screens/LoadingScreen'
import ForgotPassword from './screens/signIn/ForgotPassword'
import Login from './screens/signIn/Login'
import SignUp from './screens/signIn/SignUp'
import Trophies from './screens/Trophies'
import Breakfast from './screens/Breakfast'
import Cheats from './screens/Cheats'
import Lunch from './screens/Lunch'
import Dinner from './screens/Dinner'
import Registration from './screens/Registration'
import Progress from './screens/Progress'
import { createTheme, ThemeConsumer, ThemeProvider, useTheme } from '@rneui/themed'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useColorScheme } from 'react-native'
import { useEffect, useState } from "react"
import MainPages from './screens/main/MainPages'
import BarcodeResult from './screens/BarcodeResultScreen'
import SearchResult from './screens/SearchResultsScreen'
import Morning_Snack from './screens/Morning_Snack'
import Snacks from './screens/Snacks'


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
      primary: '#29a442', // #68CC68?
      secondary: 'white',
      tertiary: "#68CC68",
      textPrimary: "white",
      textSecondary:"black"
    },
    darkColors: {
      primary: '#161618',
      secondary: '#013220',
      tertiary: '#1a2421',
      textPrimary:"white",
      textSecondary:"#d5d5d5"
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
              <Stack.Screen name="Main" component={MainPages}/>
              <Stack.Screen name="Trophies" component={Trophies}/>
              <Stack.Screen name="Barcode" component={BarcodeScanSceen}/>
              <Stack.Screen name="BarcodeResult" component={BarcodeResult}/>
              <Stack.Screen name="Forgot" component={ForgotPassword}/>
              <Stack.Screen name="Breakfast" component={Breakfast}/>
              <Stack.Screen name="Cheats" component={Cheats}/>
              <Stack.Screen name="Lunch" component={Lunch}/>
              <Stack.Screen name="Dinner" component={Dinner}/>
              <Stack.Screen name="Registration" component={Registration}/>
              <Stack.Screen name="Progress" component={Progress}/>
              <Stack.Screen name="SearchResult" component={SearchResult}/>
              <Stack.Screen name="Morning_Snack" component={Morning_Snack}/>
              <Stack.Screen name="Snacks" component={Snacks}/>
            </Stack.Navigator>
          </NavigationContainer>
          )}
        </ThemeConsumer>
      </AuthProvider>
    </ThemeProvider>
  );
}
