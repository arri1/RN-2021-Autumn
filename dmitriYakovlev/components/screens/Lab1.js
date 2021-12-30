import React, { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View, ImageBackground } from "react-native";

import picture from '../images/Lab1.png';

const Colour = () => {
  const b = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
      color += b[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Lab1 = () => {
  const [count, setCount] = useState(0);
  const [backColor, setColor] = useState(Colour());

  const onPress = () => {
    setCount(count + 1);
    setColor(Colour());
  }

  return (
    <View style={styles.main}>
      <ImageBackground source={picture} resizeMode="cover" style={styles.image}>
        <View style={styles.cont1}>
          <Text style={styles.head}>FIRST WORK</Text>
        </View>
        <TouchableHighlight onPress={onPress} style={styles.button,{backgroundColor: backColor, borderRadius:100, marginTop: 33, marginLeft: 55, marginRight: 55}} >
          <View style={styles.button}>
            <Text style={{fontSize:36, fontFamily: 'Sofia-Regular', color: 'white'}}>PRESS ME</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.countContainer}>
          <View style={styles.countButton}> 
          </View>
          <View style={styles.clone}>
            <Text style={styles.countText}>
              {count}
            </Text>
          </View>
          <View style={styles.colorButton}>
          </View>
          <View style={styles.clone}>
            <Text style={styles.colorContainer}>
                {backColor}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  head: {
    fontSize: 36,
    fontFamily: 'Sofia-Regular',
    textAlign: 'center',
  },
  cont1: {
    marginTop: 18,
  },
  button: {
    alignItems: "center",
    justifyContent: 'flex-start',
    padding: 30,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
  countText: {
    color: "#000000",
    fontSize: 24,
    fontFamily: 'Sofia-Regular',
    textAlign: 'center',
  },
  colorContainer: {
    color: "#000000",
    fontSize: 24,
    fontFamily: 'Sofia-Regular',
    textAlign: 'center',
  },
  countButton: {
    width: 250,
    height: 66,
    marginTop: 150,
    borderRadius: 30,
    backgroundColor: '#B9EDF8',
    opacity: .4,
    paddingTop: 14,
    borderColor: 'black',
    borderWidth: .5,
  },
  colorButton: {
    width: 250,
    height: 66,
    marginTop: 40,
    borderRadius: 30,
    paddingTop: 14,
    backgroundColor: '#B9EDF8',
    opacity: .4,
    borderColor: 'black',
    borderWidth: .5,
  },
  clone: {
    marginTop: -53
  },
});

export default Lab1