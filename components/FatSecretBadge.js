import { Image, Linking, TouchableOpacity } from "react-native";

export default function FatSecretBadge({ style, size }) {
  const width = size ? size * 0.1 * 180 : 180
  const height = size ? size * 0.1 * 25 : 25 
  return (
    <TouchableOpacity style={style} onPress={() => Linking.openURL("https://platform.fatsecret.com")}>
      <Image style={{width:width, height:height}} source={{
        uri: "https://platform.fatsecret.com/api/static/images/powered_by_fatsecret.png"
      }}/>
    </TouchableOpacity>
  )
}