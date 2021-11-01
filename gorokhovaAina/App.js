import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import img1 from './img/1.png'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/4.png'

const App = () => {
     const [bodyColor, setBodyColor] = useState('white');
     const [image, setImage] = useState(img1);

     const generateNewImage = () => {
        let images = [img1, img2, img3, img4];
        let b = Math.floor(Math.random() * 4);
        return images[b];
     }

     const generateNewColor = () => {
        let colors = ['#FED6BC', '#FFFADD', '#DEF7FE', '#E7ECFF', '#C3FBD8', '#FfFFFf', '#B5F2EA', '#C6D8FF', '#FADADD', '#AFEEEE', '#D0F0C0', '#5F9EA0', '#8A6642', '#9DB1CC', '#316650', '#876C99', '#E66761', '#8A9597', '#4682B4', '#EFAF8C']
        let a = Math.floor(Math.random() * 20);
        return colors[a];
     }

     const clicked = () => {
          setBodyColor(generateNewColor());
          setImage(generateNewImage());
     }

          return(
               <View style={{backgroundColor: `${bodyColor}`, flex:1, alignItems:"center", justifyContent:"center"}}>
                    <Text>Just random pics</Text>
                    <Image source = {image} style = {styles.image}/>
                    <View>
                        <Button title="change" onPress={clicked}/>
                    </View>
               </View>
          );
     }

const styles = StyleSheet.create({
    image:{
        width: 200,
        height: 200,
        padding: 10,
        margin: 10
    }
});

export default App;