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
    
    getBarCodeScannerPermissions();
  }, [])

  // TODO Make into dialogs
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  // TODO Query FatSecret API with code number, navigate user to loading page
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true)
    alert(`Bar code with type ${type} and data ${data} has been scanned!`)
  }

  const styles = StyleSheet.create({
    cancelButton:{
      backgroundColor:"red", 
      borderRadius:15, 
      alignItems:"center", 
      paddingVertical: 10,
      width:"75%",
      position:"absolute", // Added to make it overlay over camera view
      top:height - 25
    },
    topText: {
      color:"white",
      fontSize:20,
      position:"absolute",
      bottom:height - 40,
      backgroundColor:"gray",
      borderRadius:15,
      paddingVertical:5,
      paddingHorizontal:8
    }
  })

  // Added 115% width to BarcodeScanner to make it fill screen - need to check if this causes any issues other than increased zoom
  return (
    <>
      <View style={{ backgroundColor:"black", width:"100%", height: "100%", alignItems:"center" }}>
        <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={{...StyleSheet.absoluteFillObject, height:"100%", width:"115%"}}/>
        <Text style={styles.topText}>Looking for barcode...</Text>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.navigate("Home")}>
          <Text style={{fontSize:20}}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

