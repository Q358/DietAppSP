import { Avatar, makeStyles, useTheme } from "@rneui/themed";
import { Text, useWindowDimensions, View } from "react-native";
import nutriLogo from "../../assets/nutriIcon.jpg"

export default function Friends() {
  const styles = useStyles()
  const friends = [{name: "Ronald", score:20}, {name: "Donald", score:20},
    {name: "Bonald", score:20}, {name: "Matthew", score:20}, {name: "Jacob", score:20}]
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Friends</Text>
      <View style={{backgroundColor:"lightgray", padding:10, borderRadius:20, justifyContent:"center", flex:0}}>
        {friends.map((value, key)=>{
          return <FriendRow key={key} name={value.name} score={value.score}/>
        })}
      </View>
    </View>
  )
}

function FriendRow({ name, score }){
  const { theme } = useTheme()
  const styles = useStyles()
  const { width } = useWindowDimensions()
  return(
    <View style={{...styles.friendItem, width: 0.6 * width}}>
      <Avatar source={nutriLogo} rounded/>
      <Text style={{fontFamily:"fontRegular"}}>{name}</Text>
      <Text style={{fontFamily:"fontRegular"}}>{score}</Text>
    </View>
  )
}
  
const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title:{
    fontFamily:"fontBold",
    fontSize:35,
    color:theme.colors.primary
  },
  friendItem:{
    flexDirection:"row",
    marginVertical:5,
    backgroundColor:theme.colors.tertiary,
    borderRadius:10,
    justifyContent:"space-between",
    alignItems:"center",
    paddingVertical:10,
    paddingHorizontal:20
  }
}))