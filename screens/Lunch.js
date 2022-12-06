import { StyleSheet, Text, View } from "react-native";

export default function Lunch() {
    return (
      <View style={styles.container}>
        <Text>Lunch</Text>
      </View>
    )
  }
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
});