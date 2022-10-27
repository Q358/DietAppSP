import { StyleSheet, Text, View, TouchableOpacity} from "react-native";

export default function Breakfast({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Breakfast</Text>
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