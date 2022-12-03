import { Divider, makeStyles, useTheme } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Alert, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FatSecretBadge from "../components/FatSecretBadge";
import LoadingModal from "../components/LoadingModal";
import { getFood } from "../config/fatsecret";

export default function BarcodeResult({ data, visible, setVisible, setScanned, isLoading, errorText, setErrorText }) {
  // const [isLoading, setIsLoading] = useState(false) // Maybe have this handle calling?
  const [modalVisible, setModalVisible] = useState(false)
  // const [errorText, setErrorText] = useState()
  // const [food, setFood] = useState()
  // const [servings, setServings] = useState()
  const servings = data?.servings?.serving
  const styles = useStyles()
  const { theme } = useTheme()

  useEffect(() => {
  
    if(data){
      // awaithandleAPICall()
      console.log("|",data, servings, "|")
    }

  }, [data])
  

  useEffect(() => {
    
    (isLoading || errorText) ? setModalVisible(true) : setModalVisible(false)

  }, [isLoading, errorText])

  if(data){
    return (
      <Modal style={{...StyleSheet.absoluteFillObject}} visible={visible} 
        onRequestClose={() => {
          console.log("Barcode result has been closed.")
          setVisible(false)
          setScanned(false)
        }}>
        <StatusBar backgroundColor="lightgreen"/>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <Text style={{ fontFamily:"fontBold", fontSize:20, color: theme.colors.textSecondary }}>Item scanned!</Text>
            <Text style={{ fontFamily:"fontBold", fontSize:30, marginVertical:5, color: theme.colors.textSecondary }}>{data?.brand_name} {data?.food_name}</Text>
            <Divider width={3} style={{marginVertical:5}}/>
            <Text style={{color: theme.colors.textSecondary}}>Per serving, this food contains:</Text>
            <ScrollView>
              {servings && Object.keys(servings).map(function(key){return <Text style={{color: theme.colors.textSecondary}} key={key}>- {key.replace(/_/g, " ")}: {servings[key]} </Text>})}
            </ScrollView>
            <Divider width={3} style={{marginVertical:7}}/>
            <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Food added!")}>
              <Text style={{ fontFamily:"fontBold", fontSize:20, textAlign:"center", color: theme.colors.textPrimary }}>Add Food</Text>
            </TouchableOpacity>
          </View>
          <FatSecretBadge />
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
  
const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    height:"100%"
  },
  innerContainer: {
    borderWidth:2,
    borderRadius:15,
    justifyContent:'center',
    padding:10,
    margin:4,
    height:"95%",
    backgroundColor: theme.colors.secondary
  },
  button:{
    backgroundColor: theme.colors.tertiary,
    borderRadius:15,
    paddingVertical:7,
    marginTop:5
  }
}))