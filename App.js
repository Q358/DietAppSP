import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BarcodeScanSceen from './screens/BarcodeScanScreen'
import Diet from './screens/Diet'
import Home from './screens/Home'
import Landing from './screens/Landing'
import Profile from './screens/Profile'
import Login from './screens/signIn/Login'
import SignUp from './screens/signIn/SignUp'
import Trophies from './screens/Trophies'
import Workout from './screens/Workout'


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
