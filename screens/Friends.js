import { StyleSheet, Text, View } from "react-native";

export default function Friends() {
    return (
      <View style={styles.container}>
        <Text>Friends</Text>
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