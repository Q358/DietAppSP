import { text } from "@fortawesome/fontawesome-svg-core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonActions } from "@react-navigation/native";
import { makeStyles, Overlay, Switch, useTheme, withTheme, SearchBar } from "@rneui/themed";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Linking} from "react-native";
import { autocomplete, searchFood, searchTest } from "../config/fatsecret";

export default function SearchModal({ navigation, visible, setVisible }) {
    const styles = useStyles()
    const [value, setValue] = useState(true)
    const [suggestions, setSuggestions] = useState([])
    
    const onChangeText = async (val) => {
      setValue(val)
      let res = await autocomplete(val, 5)
      setSuggestions(res?.suggestions?.suggestion)
    }

    const handleSearch = (query) => {
      navigation.navigate("SearchResult", {query: query})
      setVisible(false)
    }

    const handleSuggestionTap = (suggestion) => {
      setValue(suggestion)
      handleSearch(suggestion)
    }
 
return (
 <Overlay overlayStyle={styles.container} isVisible={visible} onBackdropPress={() => setVisible(false)} animationType="fade">
    {/* <View style = {styles.InputBox}>
        <TextInput editable multiline numberOfLines={4} maxLength={40} onChangeText={text=> onChangeText(text)} value={value} style={{padding: 10}}/>
    </View> */}
    <Text style={styles.title}>Search</Text>
    <TextInput style={styles.input} placeholder= "Search for a food product" editable maxLength={40} onChangeText={text=> onChangeText(text)} value={value}/>
    {/* <SearchBar platform="android" style={styles.input}
        placeholder="Search for a food product." round lightTheme
        onChangeText={text=> onChangeText(text)}
        value={value}
      /> */}
    {suggestions && suggestions.map((val, idx)=>
      <TouchableOpacity onPress={() => handleSuggestionTap(val)} key={idx}>
        <Text style={styles.suggestion}>{val}</Text>
      </TouchableOpacity>
    )}
    <TouchableOpacity style = {styles.searchButton} onPress={() => handleSearch(value)}> 
      <Text style={styles.searchText}>Submit</Text> 
    </TouchableOpacity>
</Overlay>
 )
}

const useStyles = makeStyles((theme, props) => ({
    container: {
      backgroundColor: theme.colors.secondary,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:15,
      padding:15
    },
    input: {
      margin: 15,
      height: 40,
      width: 250,
      borderColor: theme.colors.primary,
      borderWidth: 2, 
      padding: 10,
      borderRadius: 15,
      color: theme.colors.textSecondary
    },
    suggestion:{
      fontFamily:"fontRegular",
      color: theme.colors.textSecondary
    },
    searchButton: {
      backgroundColor: theme.colors.primary,
      padding: 10,
      margin: 15,
      height: 40,
      width: 80,
      borderRadius: 10,
    },
    searchText: {
      fontFamily:"fontBold",
      color: theme.colors.textSecondary,
      fontSize: 15
    },
    title: {
      fontFamily:"fontBold"
    }
}))