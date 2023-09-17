import { Dimensions, StyleSheet } from "react-native";
const windowWidth = Dimensions.get('window').width;
export const input = StyleSheet.create({
  root:{
    alignSelf:"stretch",
    justifyContent:"center",
  },
  text:{
    // alignSelf:"flex-end",
    // backgroundImage: "white",
    height: 50,
    paddingLeft:10,
    borderRadius:20,
    backgroundColor:"white",
    fontSize:20,
  },
  unit:{
    position:"absolute",
    alignSelf:"flex-end",
    paddingRight:25,
    fontSize:30,
  },
})
export const button = StyleSheet.create({
  opa:{
    backgroundColor:"black",
    borderRadius:20,
    width:150,
    padding:20,
  },
  text:{
    alignSelf:"center",
    fontWeight:"bold",
    color:"white",
  }
})
export const result = StyleSheet.create({
  text:{
    color:"white",
    fontSize:100,
  }
})