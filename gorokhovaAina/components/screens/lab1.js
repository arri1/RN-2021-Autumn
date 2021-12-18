import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import img1 from '../../img/1.png'
import img2 from '../../img/2.jpg'
import img3 from '../../img/3.jpg'
import img4 from '../../img/4.png'

const Lab1 = () => {
     const [bodyColor, setBodyColor] = useState('#FFE6DC');
     const [image, setImage] = useState(img1);

     const generateNewImage = () => {
          const images = [img1, img2, img3, img4];
          const b = Math.floor(Math.random() * 4);
          return images[b];
     }

     const generateNewColor = () => {
          const colors = ['#FED6BC', '#FFFADD', '#DEF7FE', '#E7ECFF', '#C3FBD8', '#FfFFFf', '#B5F2EA', '#C6D8FF', '#FADADD', '#AFEEEE', '#D0F0C0', '#5F9EA0', '#8A6642', '#9DB1CC', '#316650', '#876C99', '#E66761', '#8A9597', '#4682B4', '#EFAF8C']
          const a = Math.floor(Math.random() * 20);
          return colors[a];
     }

     const clicked = () => {
          setBodyColor(generateNewColor());
          setImage(generateNewImage());
     }

          return(
               <View style={[styles.main, {backgroundColor: `${bodyColor}`}]}>
                    <Text style={styles.text}>Just random pics</Text>
                    <Image source = {image} style = {styles.image}/>
                    <View>
                        <TouchableOpacity style={styles.button} onPress={clicked}>
                              <Text style={styles.buttonText}>CHANGE</Text>
                         </TouchableOpacity>
                    </View>
               </View>
          );
     }

const styles = StyleSheet.create({
    image:{
         width: 350,
         height: 350,
         margin: 24
    },
    main:{
         flex: 1,
         alignItems:"center",
         justifyContent:"center"
    },
    button:{
         backgroundColor: '#E88F5D',
         width: 200,
         height: 50,
         borderRadius: 5,
         alignItems:"center",
         justifyContent:"center"
    },
    text:{
         fontFamily: "Montserrat",
         fontSize: 17
    },
    buttonText:{
         fontFamily: "Montserrat",
         fontSize: 16
    }
});

export default Lab1;