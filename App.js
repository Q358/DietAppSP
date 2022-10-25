import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BarcodeScanSceen from './pages/BarcodeScanScreen'
import Diet from './pages/Diet'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Profile from './pages/Profile'
import Login from './pages/sign in/Login'
import SignUp from './pages/sign in/SignUp'
import Trophies from './pages/Trophies'
import Workout from './pages/Workout'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false,}}>
        <Stack.Screen name="Landing" component={Landing}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name= "Trophies" component={Trophies}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Diet" component={Diet}/>
        <Stack.Screen name="Barcode" component={BarcodeScanSceen}/>
        <Stack.Screen name="Workout" component={Workout}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
