import { useEffect, useState } from "react"
import { BarCodeScanner } from "expo-barcode-scanner"
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, useWindowDimensions } from "react-native"

export default function BarcodeScanSceen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)
  
  const { height } = useWindowDimensions()

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    }
    
    getBarCodeScannerPermissions()
  }, [])

  // TODO Make into dialogs
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Requesting camera permission...</Text>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    )  // TODO Make this look better
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No access to camera. Please allow access to use the barcode scanner.</Text>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    )
  }

  // TODO Query FatSecret API with code number, navigate user to loading page
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true)
    alert(`Bar code with type ${type} and data ${data} has been scanned!`)
  }

  // Added absolute to cancel button to make it overlay over camera view
  // Added 115% width to BarcodeScanner to make it fill screen - need to check if this causes any issues other than increased zoom
  return (
    <>
      <View style={{ backgroundColor:"black", width:"100%", height: "100%", alignItems:"center" }}>
        <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={{...StyleSheet.absoluteFillObject, height:"100%", width:"115%"}}/>
        <Text style={{...styles.topText, bottom:height - 40}}>Looking for barcode...</Text>
        <TouchableOpacity style={{...styles.cancelButton, position:"absolute", top:height - 25}} onPress={() => navigation.navigate("Home")}> 
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
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
    fontFamily:"UbuntuBold",
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
    fontFamily:"UbuntuBold"
  },
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:30,
  },
  errorText:{
    fontFamily:"UbuntuBold",
    fontSize:30, 
    marginBottom:20,
    textAlign:"center"
  }
})

