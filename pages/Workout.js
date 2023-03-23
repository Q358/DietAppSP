import { StyleSheet, Text, View } from "react-native";

export default function Workout() {
  return (
    <View style={styles.container}>
      <Text>Workout</Text>
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