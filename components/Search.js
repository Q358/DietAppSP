import { text } from "@fortawesome/fontawesome-svg-core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonActions } from "@react-navigation/native";
import { makeStyles, Overlay, Switch, useTheme, withTheme } from "@rneui/themed";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Linking} from "react-native";

export default function SearchModal({ visible, setVisible }) {
    const styles = useStyles()
    const [value, onChangeText] = useState(true)
    


return (
 <Overlay overlayStyle={styles.container} isVisible={visible} onBackdropPress={() => setVisible(false)} animationType="fade">
    {/* <View style = {styles.InputBox}>
        <TextInput editable multiline numberOfLines={4} maxLength={40} onChangeText={text=> onChangeText(text)} value={value} style={{padding: 10}}/>
    </View> */}
    <TextInput style = {styles.input} placeholder= "Search for a food product." editable multiline numberOfLines={4} maxLength={40} onChangeText={text=> onChangeText(text)} value={value}/>
    <TouchableOpacity style = {styles.searchButton} onPress={()=> Linking.openURL('https://www.fatsecret.com/calories-nutrition/search?q=' + value)}> 
    <Text style = {{fontFamily:"fontBold", color:"white", fontSize: 15}}>Submit</Text> 
    </TouchableOpacity>
</Overlay>
 )
}

const useStyles = makeStyles((theme, props) => ({
    container: {
      backgroundColor: "white",
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:15,
      padding:15,
      height: 300,
      width: 300
    },
    input: {
      margin: 15,
      height: 40,
      width: 250,
      borderColor: theme.colors.primary,
      borderWidth: 2, 
      padding: 10,
      borderRadius: 15
    },
    searchButton: {
      backgroundColor: theme.colors.primary,
      padding: 10,
      margin: 15,
      height: 40,
      width: 80,
      borderRadius: 10,
    },
}));