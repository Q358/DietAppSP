import { ActivityIndicator, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function LoadingModal ({ visible, setVisible, errorText, setErrorText, isLoading, text }){
  return(
    <Modal visible={visible} animationType="slide" transparent={true}
      onRequestClose={() => {
        console.log("Loading modal has been closed.")
        setVisible(!visible)
      }}>
      <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
        <View style={styles.innerContainer}>
          {errorText ? (
            <>
              <Text style={{fontFamily:"fontBold", marginBottom:15}}>{errorText}</Text>
              <TouchableOpacity style={styles.errorButton} onPress={() => setErrorText(undefined)}>
                <Text>Ok</Text>
              </TouchableOpacity>

            </>
          ) : isLoading ? (
            <>
              <Text style={{fontFamily:"fontBold",marginBottom:15,fontSize:20}}>loading...</Text>
              <ActivityIndicator size="large" color="lightgreen"/>
            </>
          ) : (
            <Text>{text ?? null}</Text>
          )}
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  errorButton:{ 
    backgroundColor:"green",
    borderRadius:15,
    borderWidth:1,
    flex:0,
    alignItems:"center",
    paddingHorizontal:20,
    paddingVertical:10
  },
  innerContainer:{
    backgroundColor:"white",
    borderRadius:15,
    padding:35,
    alignItems:"center",
    width:"70%"
  }
})