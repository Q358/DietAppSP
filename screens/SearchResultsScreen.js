import { Divider, makeStyles, useTheme } from "@rneui/themed";
import { useEffect, useState } from "react";
import { Text, TextInput, View, TouchableOpacity, ScrollView, KeyboardAvoidingView, useWindowDimensions, Alert } from "react-native";
import { getFoodData, searchFood } from "../config/fatsecret";
import LoadingModal from "../components/LoadingModal";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { StackActions } from "@react-navigation/routers";

export default function SearchResultsScreen({ route, navigation }) {
  const { query } = route.params
  const styles = useStyles()
  const { theme } = useTheme()

  const [value, setValue] = useState(query)
  const [results, setResults] = useState()
  const [isLoading, setIsLoading] = useState()
  const [visible, setVisible] = useState(false)
  const [errorText, setErrorText] = useState()


  useEffect(() => {
    handleSearch(query)
  }, [])
  
  // Runs when a result is pressed -> should this show more details?
  const handleResultTap = async (val) => {
    try {
      console.log(val)
      setIsLoading(true)
      setErrorText(null)
      var foodData = await getFoodData(val)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      setErrorText("Server error. That's probably our bad.")
    }
    if(foodData?.error){
      console.log(foodData?.error)
      setErrorText("Failed to load food. Please try again.")
    }
    else{
      // console.log(foodData)
      console.log(foodData?.food?.servings?.serving)
      if(!errorText)
        navigation.dispatch(StackActions.replace("BarcodeResult", {data: foodData?.food}))
    }
  }

  const handleAddFood = (food) => {
    Alert.alert("Food added!")
    navigation.navigate("Main")
  }

  // Runs when the search button is pressed
  const handleSearch = async (val) => {
    setErrorText()
    setIsLoading(true)
    let res = await searchFood(val, 7)
    // console.log(val, res)
    res?.foods?.food ? setResults(res?.foods?.food) : setResults()
    setIsLoading(false)
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.title}>Search Results</Text>
      <View style={{flexDirection:"row", alignItems:"center"}}>
        <TextInput style={styles.input} placeholder= "Search for a food product" editable maxLength={40} onChangeText={text=>setValue(text)} value={value}/>
        <TouchableOpacity style={styles.searchButton} onPress={() => handleSearch(value)}> 
          <Text style={{fontFamily:"fontBold", color:theme.colors.textPrimary, fontSize: 15}}>Go</Text> 
        </TouchableOpacity>
      </View>
      <Divider width={3} style={styles.divider} color={theme.colors.primary}/>
      <ScrollView contentContainerStyle={styles.resultContainer} showsVerticalScrollIndicator={false}>
        {results === null ? (
          <Text style={{fontSize: 18, fontFamily:"fontRegular", color: theme.colors.textPrimary}}>No results found.</Text>
          ) : results ? (
          <>
            {results.map((val, idx)=>
              <View style={{flexDirection:"row"}}  key={idx}>
                <TouchableOpacity style={styles.resultBox} onPress={() => handleResultTap(val.food_id)}>
                  <Text style={{fontSize: 18, fontFamily:"fontRegular", color: theme.colors.textSecondary}}>{val.food_name}</Text>
                  <Text style={{fontSize: 12, fontFamily:"fontRegular", color: theme.colors.textSecondary}}>{val.food_description}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addFoodButton} onPress={() => handleAddFood()}>
                  <FontAwesomeIcon icon={faPlus} color={theme.colors.textPrimary}/>
                </TouchableOpacity>
              </View>
            )}
          </>
          ) : (null)}
      </ScrollView>
      <LoadingModal visible={isLoading} setVisible={setIsLoading} isLoading={isLoading} errorText={errorText} setErrorText={setErrorText}/>
    </KeyboardAvoidingView>
  )
}
  
const useStyles = makeStyles((theme) => ({
    container: {
      flex: 1,
      backgroundColor: theme.colors.tertiary,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
      paddingTop:30
    },
    title: {
      fontSize: 20, 
      fontFamily:"fontBold",
      color: theme.colors.textPrimary,
      marginTop:10
    },
    input: {
      height: 40,
      width: "70%",
      borderColor: theme.colors.primary,
      borderWidth: 2,
      paddingLeft: 10,
      paddingVertical: 1,
      borderRadius: 15,
      backgroundColor: theme.colors.secondary,
      color: theme.colors.textSecondary
    },
    resultContainer: {
      backgroundColor: theme.colors.tertiary,
      alignItems: 'center',
      paddingVertical: 5
    },
    resultBox: {
      borderRadius: 8,
      borderWidth: 2,
      borderColor: theme.colors.primary,
      padding: 10,
      marginBottom: 10,
      width: "80%",
      backgroundColor: theme.colors.secondary
    },
    searchButton: {
      backgroundColor: theme.colors.primary,
      marginLeft: 15,
      marginVertical: 15,
      borderRadius: 10,
      justifyContent:"center",
      alignItems:"center",
      width: "15%",
      minHeight: 40
    },
    addFoodButton: {
      backgroundColor:theme.colors.primary,
      padding: 10,
      borderRadius: 8,
      justifyContent:"center",
      alignItems:"center",
      marginBottom: 10,
      marginLeft:5,
      width: "12%"
    },
    divider: {
      borderColor: theme.colors.textSecondary,
      width: "50%",
      borderRadius: 8,
      marginBottom: 10
    }
  }))