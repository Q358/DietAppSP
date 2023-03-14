import { Divider, makeStyles, useTheme } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Alert, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FatSecretBadge from "../components/FatSecretBadge";
import LoadingModal from "../components/LoadingModal";
import { getFood } from "../config/fatsecret";

export default function BarcodeResult({ route, navigation }) {
  const styles = useStyles()
  const { theme } = useTheme()
  
  // Food object, whether scanned or not, read from params 
  const { data, scan } = route.params
  var servings = data?.servings?.serving
  if(Array.isArray(servings))
    servings = servings[0]

  if(data){
    return (
      <Modal style={{...StyleSheet.absoluteFillObject}} visible={visible} 
        onRequestClose={() => {
          console.log("Barcode result has been closed.")
          setVisible(false)
          setScanned(false)
        }}>
        <StatusBar backgroundColor="lightgreen"/>
        <View style={styles.innerContainer}>
          <Text style={{ fontFamily:"fontBold", fontSize:20, color: theme.colors.textSecondary }}>{scan ? "Item scanned!" : "Item found!"}</Text>
          <Text style={{ fontFamily:"fontBold", fontSize:25, marginVertical:5, color: theme.colors.textSecondary }}>{data?.brand_name} {data?.food_name}</Text>
          <Divider width={3} style={{marginVertical:5}}/>
          <Text style={{fontSize:20}}>{Math.round(servings.number_of_units) || 1} serving{servings.number_of_units > 1 && "s"} per container</Text>
          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Text style={{fontFamily:"fontBold", fontSize:20}}>Serving size</Text>
            <Text style={{fontFamily:"fontBold", fontSize:20}}>{servings.serving_description} ({Math.round(servings.metric_serving_amount || 1)}{servings.metric_serving_unit || "g"})</Text>
          </View>
          <Divider width={15} style={{marginVertical:5}} color="black"/>
          <View style={{justifyContent:"space-between", flexDirection:"row", alignItems:"flex-start", flex:1}}>
            <View>
              <Text style={{fontFamily:"fontBold", fontSize:18}}>Amount per serving</Text>
              <Text style={{fontFamily:"fontBold", fontSize:35, marginTop:-7}}>Calories</Text>
            </View>
            <Text style={{fontFamily:"fontBold", fontSize:50}}>{servings?.calories || 0}</Text>
          </View>
          <Divider width={8} style={{marginVertical:5}} color="black"/>
          <View style={{width:"100%", flexDirection:"row",justifyContent:"flex-end"}}>
            <Text style={{fontFamily:"fontBold", fontSize:15}}>% Daily Value</Text>
          </View>
          <FactRow title="Total Fat" value={`${Math.round(servings.fat) || 0}g`} bold/>
          <FactRow title="Saturated Fat" value={`${Math.round(servings.saturated_fat) || 0}g`} indent={1}/>
          <FactRow title="Trans Fat" value={`${Math.round(servings.trans_fat) || 0}g`} indent={1} noPercent/>
          <FactRow title="Cholesterol" value={`${Math.round(servings.cholesterol) || 0}mg`} bold/>
          <FactRow title="Sodium" value={`${Math.round(servings.sodium) || 0}mg`} bold/>
          <FactRow title="Total Carbohydrate" value={`${Math.round(servings.carbohydrate || 0)}g`} bold/>
          <FactRow title="Dietary Fiber" value={`${Math.round(servings.fiber) || 0}g`} indent={1}/>
          <FactRow title="Total Sugars" value={`${Math.round(servings.sugar) || 0}g`} indent={1} noPercent/>
          <FactRow title={`Includes ${Math.round(servings.added_sugars) || 0}g Added Sugars`} indent={2}/>
          <FactRow title="Protein" value={`${Math.round(servings.protein) || 0}g`} noPercent bold/>
          <Divider width={15} style={{marginVertical:5}} color="black"/>
          <FactRow title="Vitamin D" value={`${Math.round(servings.vitamin_d) || 0}mcg`} indent={0} lightPercent/>
          <FactRow title="Calcium" value={`${Math.round(servings.calcium) || 0}mg`} indent={0} lightPercent/>
          <FactRow title="Iron" value={`${Math.round(servings.iron) || 0}mg`} indent={0} lightPercent/>
          <FactRow title="Potassium" value={`${Math.round(servings.potassium) || 0}mg`} indent={0} lightPercent/>
          <Divider width={8} style={{marginVertical:5}} color="black"/>
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Food added!")}>
            <Text style={{ fontFamily:"fontBold", fontSize:20, textAlign:"center", color: theme.colors.textPrimary }}>Add Food</Text>
          </TouchableOpacity>
        </View>
        <FatSecretBadge />
      </SafeAreaView>
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