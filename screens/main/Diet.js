import { SafeAreaView, Image, StyleSheet, TouchableOpacity, Text, View, Dimensions, ScrollView, useWindowDimensions } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleDown, faAngleLeft, faAngleRight, faAppleWhole, faBarcode, faChartColumn, faHouse, faSearch, faTrophy, faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faEmptyStar } from "@fortawesome/free-regular-svg-icons";
import FoodBlock, { FoodRow } from "../../components/FoodBlock"
import React, { useState } from "react";
import { makeStyles, SpeedDial, useTheme } from "@rneui/themed";
import LeafBorder from "../../assets/leaf_border.png"
import SearchModal from "../../components/Search";
import { getFoodData } from "../../config/fatsecret";


export default function Diet({ navigation }) {
  const { width, height } = useWindowDimensions()
  const { theme } = useTheme()
  const styles = useStyles()
  const [open, setOpen] = useState()
  const [visible, setVisible] = useState(false)
  const [searchVisible, setSearchVisible] = useState(false)

  const recents = [{id: 38820, name: "Cheerios", favorite: true}, {id: 38820, name: "Cheetos", favorite: false}]

  return (
    <SafeAreaView style={{...styles.container, justifyContent:"space-evenly"}}>
      <View style={{width:width, position:"absolute",top:-height * 0.2}}>
        <Image style={{ width:"100%" }} source={LeafBorder} resizeMode="contain"/>
      </View>
      <View style={styles.mealContainer}>
        <Text style = {styles.mealTitle}>Today's Meals</Text>
        <View style={{width:"80%", justifyContent:"space-evenly"}}>
          <Text style={styles.mealName}>Breakfast</Text>
          <FoodRow icons={["apple", "cookie", "bread"]} onPress={() => navigation.navigate("Breakfast")}/>
          <Text style={styles.mealName}>Lunch</Text>
          <FoodRow icons={["meat", "carrot", "bread"]} onPress={() => navigation.navigate("Lunch")}/>
          <Text style={styles.mealName}>Dinner</Text>
          <FoodRow icons={["fish", "carrot", "bread"]} onPress={() => navigation.navigate("Dinner")}/>
        </View>
      </View>
      <View style={styles.recordBox}>
        <Text style = {styles.secondaryTitle}>Record a Meal</Text>
        <View style={{flexDirection:"row", justifyContent:"space-evenly", width:"100%"}}>
          <TouchableOpacity style={{...styles.button, backgroundColor:"lightgray"}} onPress={() => navigation.navigate('Barcode')}>
            <FontAwesomeIcon icon={faBarcode} size={50}/>
          </TouchableOpacity>
          <TouchableOpacity style={{...styles.button, backgroundColor: theme.colors.primary}} onPress={() => setSearchVisible(true)}>
            <FontAwesomeIcon icon={faSearch} size={50} color={theme.colors.textSecondary}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.recordBox}>
        <Text style = {styles.secondaryTitle}>Recent Foods</Text>
        {recents.map((val, idx) => (
          <RecentItem recent={val} key={idx}/>
        ))}
      </View>
      <SearchModal visible={searchVisible} setVisible={setSearchVisible} navigation={navigation}/>
    </SafeAreaView>
  )
}

function RecentItem({ recent }){
  const [favorite, setFavorite] = useState(recent.favorite)
  const styles = useStyles()
  const { theme } = useTheme()

  const handleRecentPress = (id) => {
    let foodData = getFoodData(id)
    navigation.navigate("BarcodeResult", {data: foodData?.food})
  }

  const handleFavoritePress = () => {
    // TODO Add favorite ability
    setFavorite(!favorite)
  }

  return(
    <View style={styles.recentContainer}>
      <TouchableOpacity style={{width: "90%"}} onPress={() => handleRecentPress()}>
        <Text style={styles.recentText}>{recent.name}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{width: "10%"}} onPress={() => handleFavoritePress()}>
        <FontAwesomeIcon icon={favorite ? faStar : faEmptyStar} size={25} color={theme.colors.textPrimary}/>
      </TouchableOpacity>
    </View>
  )
}

const useStyles = makeStyles((theme) => ({
    container: {
      flex: 1,
      backgroundColor: theme.colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal:20,
      paddingTop:40,
      paddingBottom:10
    },
    mealContainer: {
      alignItems:"center",
      justifyContent:"space-evenly",
      width:"90%",
      backgroundColor: theme.colors.secondary,
      paddingVertical: 10,
      paddingBottom: 15,
      borderRadius: 20
    },
    mealTitle: {
      fontFamily: "fontBold",
      color: theme.colors.textSecondary,
      fontSize:35
    },
    mealName: {
      fontFamily: "fontRegular"
    },
    weeklyContainer: {
      maxHeight: 170,
      maxWidth: 350,
      backgroundColor: theme.colors.secondary,
      borderRadius:30,
      alignItems:"center",
      padding:10
    },
    innerWeeklyContainer:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      width:"100%",
      marginBottom:10
    },
    recordBox: {
      backgroundColor: theme.colors.secondary,
      padding: 10,
      borderRadius: 20,
      width: "90%",
      alignItems:"center"
    },
    button: {
      paddingVertical: 8,
      paddingHorizontal: 20,
      borderRadius: 30,
      marginVertical: 15
    },
    secondaryTitle: {
      fontFamily: "fontBold",
      color: theme.colors.textSecondary,
      fontSize: 25
    },
    recentText: {
      fontFamily: "fontRegular",
      color: theme.colors.textPrimary,
      fontSize: 20
    },
    recentContainer: {
      backgroundColor: theme.colors.primary,
      paddingVertical: 5,
      paddingHorizontal: 10,
      width: "100%",
      flexDirection:"row",
      borderRadius: 15,
      marginTop: 5,
      alignItems:"center"
    }
}))

