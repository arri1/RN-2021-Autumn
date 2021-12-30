import React, {useState} from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet} from "react-native";
import Figma from "../styles/styles.js"
import LinearGradient from 'react-native-linear-gradient';
export default Lab1 = ({navigation}) => {
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
    <View style={Figma.container}>
      <LinearGradient colors={['#4A90E0', '#4BFAF1']} style={Figma.backgRect1}/>
      <Text style={Figma.titleText}>Задание 1</Text>
      <TouchableOpacity style={Figma.titleBox} onPress={() => navigation.goBack()}>
          <Image source = {require('../img/left-arrow.png')} style = {Figma.img}/>
      </TouchableOpacity>
      <View style={Figma.backRect2}>
        <View style={[Figma.box, {backgroundColor: baColor}]}>
          <TouchableOpacity onPress={prssBtn}>
            <Text style={styles.button}>Менять цвет</Text>
          </TouchableOpacity>
        </View>
        <View style={[Figma.box, {backgroundColor: baColor1}]}>
          <TouchableOpacity onPress={prssBtn1}>
            <Text style={styles.button}>Менять цвет</Text>
          </TouchableOpacity>
        </View>
      </View> 
    </View>  
  );
}
const styles = StyleSheet.create({   
  button: {
    padding:10,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 35,
    textAlign: 'center',
    margin:20,   
    backgroundColor: '#fff'
  }
});