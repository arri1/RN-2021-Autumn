import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';
 
const colorStep = (bgColor) => {
  let bgStr = bgColor.substr(1,2)
  bgStr = (bgStr * 1 + 5).toString()
  bgStr = bgStr + bgStr + bgStr
  return "#" + bgStr
}

const rnLab1 = () => {
  const [bgColor, setBgColor] = useState('#000000');
  return (
    <SafeAreaView style={styles.rnMain}>
      <View>
        <View style={[styles.rnBox, {backgroundColor: bgColor}]} />
        <Pressable 
          onPress={() => {setBgColor(colorStep(bgColor))}}
          style = {styles.rnButton}
        >
          <Text style={styles.rnButtonText}>
            Lighten the box
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rnButton: {
    marginTop: 54.9,
    marginLeft: 54.9,
    height: 46.54,
    width: 282.54,
    borderRadius: 8.72,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#5E5E5E",
  },
  rnButtonText: {
    lineHeight: 34.91,
    height: 34.91,
    marginLeft: 5.81,
    color: '#FFFFFF',
    fontSize: 16
  },
  rnBox: {
    marginTop: 120,
    marginLeft: 54.9,
    height: 282.54,
    width: 282.54,
    borderRadius: 8.72,
  },
  rnMain: {
    backgroundColor: "#333333",
    height: "100%",
  }
});

export default rnLab1;
