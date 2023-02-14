import { StyleSheet, Text, View } from "react-native";

export default function Cheats() {
    return (
      <View style={styles.container}>
        <Text>Cheats</Text>
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