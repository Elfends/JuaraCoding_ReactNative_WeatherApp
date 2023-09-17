import {Text, TouchableOpacity, View} from "react-native";
import {button} from "./style";

export function Convert({onPress}){
  return(
    <TouchableOpacity onPress={onPress} style={button.opa}>
      <Text style={button.text}>Convert</Text>
    </TouchableOpacity>
  );
}