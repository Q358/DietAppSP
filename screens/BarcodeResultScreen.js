import { StatusBar } from "expo-status-bar";
import { Modal, StyleSheet, Text, View } from "react-native";

export default function BarcodeResult({ food, visible, setVisible, setScanned }) {
    const servings = food?.servings.serving
    return (
      <Modal style={styles.container} visible={visible}  
        onRequestClose={() => {
          console.log("Modal has been closed.")
          setVisible(false)
          setScanned(false)
        }}>
        <StatusBar backgroundColor="white"/>
        <View style={styles.innerContainer}>
          <Text style={{ fontFamily:"UbuntuBold", fontSize:20 }}>Item scanned!</Text>
          <Text style={{ fontFamily:"UbuntuBold", fontSize:30, marginVertical:5 }}>{food?.brand_name} {food?.food_name}</Text>
          <Text>Per serving, this food contains:</Text>
          <View style={styles.divider}/>
          {servings && Object.keys(servings).map(function(key, value){return <Text key={key}>- {key}: {value} </Text>})}
        </View>
      </Modal>
    )
  }
  
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height:"100%"
  },
  innerContainer: {
    borderWidth:2,
    borderRadius:15,
    justifyContent:'center',
    padding:10,
    margin:10
  }
});