import {useState} from "react"
import { Text, TextInput, View} from "react-native";
import {input} from "./style";

export function Input({onChange, unit}){
  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (text) => {
    if (text.length <= 3) {
      setInputValue(text);
      onChange(text);
    }
  };
  return (
    <View style={input.root}>
      <TextInput maxLenght={3} value={inputValue} style={input.text} placeholder="masukkan suhu:" onChangeText={handleInputChange} keyboardType="numeric"/>
      <Text style={input.unit}>&deg;{unit}</Text>
    </View>
  );
}