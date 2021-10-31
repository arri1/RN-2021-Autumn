import React, {useState} from "react";
import { StyleSheet, Text, SafeAreaView, Button, Alert, View } from "react-native";

export default function App() {

  
  const arrayColor = ["#2EE2FF", "#F54777", "#E74BF5", "#50E835", "#FFBD2E", "#4C93F5", "#D4816C", "#8AC7F6"]
  const randomColor = () => {
    const randNumber = Math.floor(Math.random() * arrayColor.length);
    return arrayColor[randNumber];
  }
  const prssBtn = () => {
    return setdColor(randomColor);
  }
  const prssBtn1 = () => {
    return setdColor1(randomColor);
  }
  const [baColor, setdColor] = useState(randomColor)
  const [baColor1, setdColor1] = useState(randomColor)
  return (
    <SafeAreaView style={styles.container}>   
      <View style={[styles.box, {backgroundColor: baColor}]}>
        <Text style={styles.text} onPress={prssBtn}>Менять цвет</Text>
      </View>
      <View style={[styles.box, {backgroundColor: baColor1}]}>
        <Text style={styles.text} onPress={prssBtn1}>Менять цвет</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
  },
  box: { 
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: { 
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 50,
  }
});
