import { StyleSheet, Text, View } from "react-native";

export default function Diet() {
  return (
    <View style={{...styles.container, justifyContent:"space-between", alignItems: "center"}}>
      <Text style = {{marginVertical:50}}>Diet</Text>
      <Text style = {{fontFamily: "AdidogDemo", color:"white", fontSize:20, marginBottom:750, marginRight:70, marginTop:-15}}>Today's Meal</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgreen',
      alignItems: 'center',
      justifyContent: 'center',
    },
});