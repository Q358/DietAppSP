import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Diet from './pages/Diet';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Login from './pages/sign in/Login';
import SignUp from './pages/sign in/SignUp';
import Trophies from './pages/Trophies';
import Workout from './pages/Workout';
//import Sandbox from './pages/sandbox';

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
        <Stack.Screen name="Diet" component={Diet}/>
        <Stack.Screen name="Workout" component={Workout}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
