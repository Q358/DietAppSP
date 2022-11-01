import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import LoadingModal from "../components/LoadingModal";
import { getFood } from "../config/fatsecret";

export default function BarcodeResult({ data, visible, setVisible, setScanned, isLoading, errorText, setErrorText }) {
  // const [isLoading, setIsLoading] = useState(false) // Maybe have this handle calling?
  const [modalVisible, setModalVisible] = useState(false)
  // const [errorText, setErrorText] = useState()
  // const [food, setFood] = useState()
  // const [servings, setServings] = useState()
  const servings = data?.servings?.serving

  useEffect(() => {
  
    if(visible){
      // awaithandleAPICall()
      console.log("|",data, servings, "|")
    }

  }, [visible])
  

  useEffect(() => {
    
    (isLoading || errorText) ? setModalVisible(true) : setModalVisible(false)

  }, [isLoading, errorText])

  if(data){
    return (
      <Modal style={styles.container} visible={visible}  
        onRequestClose={() => {
          console.log("Barcode result has been closed.")
          setVisible(false)
          setScanned(false)
        }}>
        <StatusBar backgroundColor="white"/>
        <View style={styles.innerContainer}>
          <Text style={{ fontFamily:"UbuntuBold", fontSize:20 }}>Item scanned!</Text>
          <Text style={{ fontFamily:"UbuntuBold", fontSize:30, marginVertical:5 }}>{data?.brand_name} {data?.food_name}</Text>
          <Text>Per serving, this food contains:</Text>
          <View style={styles.divider}/>
          {servings && Object.keys(servings).map(function(key, value){return <Text key={key}>- {key}: {value} </Text>})}
        </View>
      </Modal>
    )
  }
  else{
    return(
      <LoadingModal visible={modalVisible} setVisible={setModalVisible} isLoading={isLoading} errorText={errorText} setErrorText={setErrorText}/>
    )
  }
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