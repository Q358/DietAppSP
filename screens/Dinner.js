import { StyleSheet, Text, View } from "react-native";

export default function Dinner() {
    return (
      <View style={styles.container}>
        <Text>Dinner</Text>
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