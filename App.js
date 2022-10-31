import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { registerRootComponent } from 'expo'
import { AuthProvider } from './config/authContext'
import BarcodeScanSceen from './screens/BarcodeScanScreen'
import Diet from './screens/Diet'
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


const Stack = createNativeStackNavigator();
// registerRootComponent(App);

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false,}}>
          <Stack.Screen name="Loading" component={LoadingScreen}/>
          <Stack.Screen name="Landing" component={Landing}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="SignUp" component={SignUp}/>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name= "Trophies" component={Trophies}/>
          <Stack.Screen name="Profile" component={Profile}/>
          <Stack.Screen name="Diet" component={Diet}/>
          <Stack.Screen name="Barcode" component={BarcodeScanSceen}/>
          <Stack.Screen name="Workout" component={Workout}/>
          <Stack.Screen name="Forgot" component={ForgotPassword}/>
          <Stack.Screen name="Breakfast" component={Breakfast}/>
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
