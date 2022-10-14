import { StyleSheet, Text, View } from "react-native";
import BottomNav from "../components/BottomNav";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <BottomNav navigation={navigation}/>
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