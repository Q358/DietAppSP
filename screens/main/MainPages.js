import Friends from "./Friends"
import Diet from "./Diet"
import Home from "./Home"
import Workout from "./Workout"
import Profile from "./Profile"
import { SceneMap, TabBar, TabView } from "react-native-tab-view"
import { useState } from "react"
import { Text, useWindowDimensions } from "react-native"
import { Avatar, Icon, makeStyles, useTheme } from "@rneui/themed"
import { useAuth } from "../../config/authContext"


export default function MainPages({ navigation }){
  const layout = useWindowDimensions()
  const { theme } = useTheme()
  const styles = useStyles()
  const { userAvatar } = useAuth()
  const FriendsScreen = () => {
    return <Friends navigation={navigation}/>
  }
  const DietScreen = () => {
    return <Diet navigation={navigation}/>
  }
  const HomeScreen = () => {
    return <Home navigation={navigation}/>
  }

  const renderScene = ({route, jumpTo}) => {
    switch (route.key) {
      case 'friends':
        return <Friends navigation={navigation} jumpTo={jumpTo}/>
      case 'diet':
        return <Diet navigation={navigation} jumpTo={jumpTo}/>
      case 'home':
        return <Home navigation={navigation} jumpTo={jumpTo}/>
      case 'workout':
        return <Workout navigation={navigation} jumpTo={jumpTo}/>
      case 'profile':
        return <Profile navigation={navigation} jumpTo={jumpTo}/>
      default:
        return null
    }
  }
//   const renderScene = SceneMap({
//     friends: FriendsScreen,
//     diet: DietScreen,
//     home: HomeScreen,
//     workout: Workout,
//     profile: Profile
//   })

  const [index, setIndex] = useState(2);
  const [routes] = useState([
    { key: 'friends', title: 'Friends', icon: 'users'},
    { key: 'diet', title: 'Diet', icon: 'apple-alt' },
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'workout', title: 'Workout', icon: 'running' },
    { key: 'profile', title: 'Profile', icon: 'user-alt' },
  ])
  const renderTabBar = props => (
    <TabBar  {...props} style={{backgroundColor: theme.colors.primary}}
      renderLabel={({ route, focused, color }) => (
        <></>
      )}
      renderIcon={({ route, focused, color }) => (
        (route.title !== 'Profile') ? (
          <Icon
            type={'font-awesome-5'}
            name={route.icon}
            color={color}
            size={30}
          />
        ) : (
          <Avatar style={styles.avatar} size={"large"} rounded source={userAvatar}/>
        )
      )}
    />
  )

  return(
    <TabView navigationState={{ index, routes }} renderScene={renderScene} onIndexChange={setIndex} 
      initialLayout={{ width: layout.width }} tabBarPosition='bottom' renderTabBar={renderTabBar}/>
  )
}

// export default function MainPages() {
//   const Tab = createMaterialBottomTabNavigator()
//   return (
//     <Tab.Navigator initialRouteName="Home" animationEnabled={true}>
//       <Tab.Screen name="Friends" component={Friends} 
//         options={{
//           tabBarIcon: ({ color }) => (
//             <FontAwesomeIcon icon={faUserFriends} size={40} color={color}/>
//         )}}
//        />
//       <Tab.Screen name="Diet" component={Diet}/>
//       <Tab.Screen name="Home" component={Home}/>
//       <Tab.Screen name="Workout" component={Workout}/>
//       <Tab.Screen name="Profile" component={Profile}/>
//     </Tab.Navigator>
//   )
// }

const useStyles = makeStyles((theme) => ({
  avatar:{
    width:30,
    height:30,
    borderRadius:20,
    borderWidth:1,
    borderColor:"white"
  }
}))