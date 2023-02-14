import { Divider, makeStyles, useTheme } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Alert, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from "react-native";
import FatSecretBadge from "../components/FatSecretBadge";
import LoadingModal from "../components/LoadingModal";
import { getFood } from "../config/fatsecret";

export default function BarcodeResult({ route, navigation }) {
  // const [food, setFood] = useState()
  // const [servings, setServings] = useState()
  const styles = useStyles()
  const { theme } = useTheme()
  const { data } = route.params
  const servings = data?.servings?.serving

  // useEffect(() => {
  
  //   if(data){
  //     console.log("|",data, servings, "|")
  //   }

  // }, [data])

  if(data){
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="lightgreen"/>
        <View style={styles.innerContainer}>
          <Text style={{ fontFamily:"fontBold", fontSize:20, color: theme.colors.textSecondary }}>Item scanned!</Text>
          <Text style={{ fontFamily:"fontBold", fontSize:25, marginVertical:5, color: theme.colors.textSecondary }}>{data?.brand_name} {data?.food_name}</Text>
          <Divider width={3} style={{marginVertical:5}}/>
          <Text style={{fontSize:20}}>{Math.round(servings.number_of_units)} serving{servings.number_of_units > 1 && "s"} per container</Text>
          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Text style={{fontFamily:"fontBold", fontSize:20}}>Serving size</Text>
            <Text style={{fontFamily:"fontBold", fontSize:20}}>{servings.serving_description} ({Math.round(servings.metric_serving_amount)}{servings.metric_serving_unit})</Text>
          </View>
          <Divider width={15} style={{marginVertical:5}} color="black"/>
          <View style={{justifyContent:"space-between", flexDirection:"row", alignItems:"flex-start", flex:1}}>
            <View>
              <Text style={{fontFamily:"fontBold", fontSize:18}}>Amount per serving</Text>
              <Text style={{fontFamily:"fontBold", fontSize:35, marginTop:-7}}>Calories</Text>
            </View>
            <Text style={{fontFamily:"fontBold", fontSize:50}}>{servings?.calories}</Text>
          </View>
          <Divider width={8} style={{marginVertical:5}} color="black"/>
          <View style={{width:"100%", flexDirection:"row",justifyContent:"flex-end"}}>
            <Text style={{fontFamily:"fontBold", fontSize:15}}>% Daily Value</Text>
          </View>
          <FactRow title="Total Fat" value={`${Math.round(servings.fat)}g`} bold/>
          <FactRow title="Saturated Fat" value={`${Math.round(servings.saturated_fat)}g`} indent={1}/>
          <FactRow title="Trans Fat" value={`${Math.round(servings.trans_fat)}g`} indent={1} noPercent/>
          <FactRow title="Cholesterol" value={`${Math.round(servings.cholesterol)}mg`} bold/>
          <FactRow title="Sodium" value={`${Math.round(servings.sodium)}mg`} bold/>
          <FactRow title="Total Carbohydrate" value={`${Math.round(servings.carbohydrate)}g`} bold/>
          <FactRow title="Dietary Fiber" value={`${Math.round(servings.fiber)}g`} indent={1}/>
          <FactRow title="Total Sugars" value={`${Math.round(servings.sugar)}g`} indent={1} noPercent/>
          <FactRow title={`Includes ${Math.round(servings.added_sugars) || 0}g Added Sugars`} indent={2}/>
          <FactRow title="Protein" value={`${Math.round(servings.protein)}g`} noPercent bold/>
          <Divider width={15} style={{marginVertical:5}} color="black"/>
          <FactRow title="Vitamin D" value={`${Math.round(servings.vitamin_d)}mcg`} indent={0} lightPercent/>
          <FactRow title="Calcium" value={`${Math.round(servings.calcium)}mg`} indent={0} lightPercent/>
          <FactRow title="Iron" value={`${Math.round(servings.iron)}mg`} indent={0} lightPercent/>
          <FactRow title="Potassium" value={`${Math.round(servings.potassium)}mg`} indent={0} lightPercent/>
          <Divider width={8} style={{marginVertical:5}} color="black"/>
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Food added!")}>
            <Text style={{ fontFamily:"fontBold", fontSize:20, textAlign:"center", color: theme.colors.textPrimary }}>Add Food</Text>
          </TouchableOpacity>
        </View>
        <FatSecretBadge />
      </SafeAreaView>
    )
  }
  else{ // Add "retry" or "back" button?
    return(
      <View style={styles.container}>
        <Text>An error occurred - sorry about that.</Text>
        <Text>Try scanning again.</Text>
      </View>
    )
  }
}

function FactRow ({ title, value, bold, indent, noPercent, lightPercent }) {
  // TODO Calculate % DV
  const percent = 8
  // TODO Calculate highlighting based on "bad" elements and/or diet - also make colors lighter
  const highlight = percent > 60 ? "red" : percent > 40 ? "yellow" : null
  const size = 15
  return(
    <>
      <Divider width={1} style={{marginVertical:2}} color="gray"/>
      <View style={{flexDirection:"row", justifyContent:"space-between", backgroundColor:highlight}}>
        <View style={{flexDirection:"row", alignItems:"center"}}>
          <Text style={{fontFamily: bold ? "fontBold" : "fontRegular", marginRight:5, marginLeft: indent ? indent * 10 : 0, fontSize:size}}>{title}</Text>
          <Text style={{fontFamily:"fontRegular", fontSize:size}}>{value}</Text>
        </View>
        {!noPercent && <Text style={{fontFamily: lightPercent ? "fontRegular" : "fontBold", fontSize:size}}>{percent}%</Text>}
      </View>
    </>
  )
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
    height:"90%",
    width:"90%",
    backgroundColor: theme.colors.secondary,
    marginTop:30
  },
  button:{
    backgroundColor: theme.colors.tertiary,
    borderRadius:15,
    paddingVertical:7,
    marginTop:5
  },

}))