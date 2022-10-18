import { useEffect, useState } from "react"
import { BarCodeScanner } from "expo-barcode-scanner"
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native"

export default function BarcodeScanSceen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)
  
  const windowWidth = Dimensions.get("window").width
  const windowHeight = Dimensions.get("window").height

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

  // TODO Query FatSecret API with code number
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
      top:windowHeight - 50
    }
  })

  return (
    <View style={{ flex: 1, backgroundColor:"black", alignItems:"center" }}>
      <Text style={{color:"white", fontSize:20, marginTop:40 }}>Looking for barcode...</Text>
      <View style={{ flex: 1, backgroundColor:"black", width:"100%"  }}>
        <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={StyleSheet.absoluteFillObject}/>
      </View>
      <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.navigate("Home")}>
        <Text style={{fontSize:20}}>Cancel</Text>
      </TouchableOpacity>
    </View>
  )
}

