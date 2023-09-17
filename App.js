import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
// import WeatherPage from './components/WeatherPage';
import HotWeath from "./assets/hot-weath.png";
import ColdWeath from "./assets/cold-weath.png";
import {Result} from "./components/WeatherPage/Result";
import {Input} from "./components/WeatherPage/Input";
import {Convert} from "./components/WeatherPage/Convert";
import {useEffect, useState} from "react";
import {conToF, conToC } from "./utils/ConvertFunct";

export default function App() {
  const [temp,setTemp]=useState(0);
  const [bg,setBG] = useState(ColdWeath);
  const [unit,setUnit]=useState("C");
  useEffect(() => {
    if (unit === "F" && temp < 79) {
      setBG(ColdWeath);
    } else if (unit === "F" && temp >= 79) {
      setBG(HotWeath);
    } else if (unit === "C" && temp <= 26) {
      setBG(ColdWeath);
    } else if (unit === "C" && temp > 26) {
      setBG(HotWeath);
    }

    // Note: You can also set the conversion function logic here
    if (unit === "F") {
      setConv(() => conToC);
    } else {
      setConv(() => conToF);
    }
  }, [temp, unit]);
  const [conv,setConv]=useState(()=>conToF);
  function changeConv(){
    if(unit==="F"){
      setUnit("C");
    }else{
      setUnit("F");
    }
  }
  return (
    <ImageBackground source={bg} style={s.background}>
    <SafeAreaProvider>
      <SafeAreaView style={s.safeView}>
        <View style={s.container}>
          {/* <WeatherPage/> */}
          <Result suhu={conv(temp).toFixed(2)} unit ={unit}/>
          <Input onChange={setTemp} unit={unit}/>
          <Convert onPress={changeConv}/>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
    
    </ImageBackground>
  );
}

const s = StyleSheet.create({
  safeView:{
    flex:1, justifyContent:"center",
    padding: 20,
    // backgroundColor:"black",
  },
  container: {
    // flex: 1,
    height:450,
    // backgroundColor: '#8f8f8f',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  background:{
    height:"100%",
    flex:1,
    justifyContent:"center",
  }
});
