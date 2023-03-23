import { useEffect, useState } from "react"
import { BarCodeScanner } from "expo-barcode-scanner"
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, useWindowDimensions } from "react-native"
import { getFood } from "../config/fatsecret"
import BarcodeResult from "./BarcodeResultScreen"
import LoadingModal from "../components/LoadingModal"
import { StackActions } from "@react-navigation/native"

export default function BarcodeScanSceen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)
  const [visible, setVisible] = useState(false)
  const [food, setFood] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [errorText, setErrorText] = useState()
  
  const { height } = useWindowDimensions()

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    }
    
    getBarCodeScannerPermissions()
  }, [])

  useEffect(() => {
    
    (isLoading || errorText) ? setVisible(true) : setVisible(false)

  }, [isLoading, errorText])

  // TODO Make into dialogs
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Requesting camera permission...</Text>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    )  // TODO Make this look better
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No access to camera. Please allow access to use the barcode scanner.</Text>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const handleAPICall = async (data) => {
    try {
      setIsLoading(true)
      setErrorText(null)
      var foodData = await getFood(data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      setErrorText("Server error. That's probably our bad.")
      setScanned(false)
    }
    if(foodData?.error){
      setErrorText("We're unable to find a food with that barcode.")
      setScanned(false)
    }
    else{
      console.log(foodData)
      console.log(foodData?.food?.servings?.serving)
      return foodData?.food
    }
  }

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true)
    console.log("Barcode:", data)
    setVisible(true)
    let res = await handleAPICall(data)
    if(!errorText)
      navigation.dispatch(StackActions.replace("BarcodeResult", {data: res, scan: true}))
  }
  
  // Added absolute to cancel button to make it overlay over camera view
  // Added 115% width to BarcodeScanner to make it fill screen - need to check if this causes any issues other than increased zoom
  return (
    <>
      <View style={{ backgroundColor:"black", width:"100%", height: "100%", alignItems:"center" }}>
        <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={{...StyleSheet.absoluteFillObject, height:"100%", width:"115%"}}/>
        <Text style={{...styles.topText, bottom:height - 40}}>Looking for barcode...</Text>
        <TouchableOpacity style={{...styles.cancelButton, position:"absolute", top:height - 25}} onPress={() => navigation.goBack()}> 
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <LoadingModal visible={visible} setVisible={setVisible} isLoading={isLoading} errorText={errorText} setErrorText={setErrorText}/>
    </>
  )
}

const styles = StyleSheet.create({
  cancelButton:{
    backgroundColor:"red", 
    borderRadius:15, 
    alignItems:"center", 
    paddingVertical: 10,
    width:"70%"
  },
  cancelButtonText:{
    fontFamily:"fontBold",
    fontSize:20, 
    color:"white"
  },
  topText: {
    color:"white",
    fontSize:20,
    position:"absolute",
    backgroundColor:"gray",
    borderRadius:15,
    paddingVertical:5,
    paddingHorizontal:10,
    fontFamily:"fontBold"
  },
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:30,
  },
  errorText:{
    fontFamily:"fontBold",
    fontSize:30, 
    marginBottom:20,
    textAlign:"center"
  }
})

