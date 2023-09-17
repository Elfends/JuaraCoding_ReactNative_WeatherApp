import { Text } from "react-native";
import { result } from "./style";

export function Result({suhu, unit}){
  return (
    <Text style={result.text}>{suhu}&deg;{unit==='F'?'C':'F'}</Text>
  );
}