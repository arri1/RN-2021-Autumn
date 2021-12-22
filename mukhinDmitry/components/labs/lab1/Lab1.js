import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';
 
const colorStep = (bgColor) => {
  let r = (parseInt(bgColor.substr(1,2),16) + 5).toString(16)
  let g = (parseInt(bgColor.substr(3,2),16) + 5).toString(16)
  let b = (parseInt(bgColor.substr(5,2),16) + 5).toString(16)
  if (r.length == 1)
    r = '0' + r
  if (g.length == 1)
    g = '0' + g
  if (b.length == 1)
    b = '0' + b
  if (r === 'ff' || g === 'ff' || b === 'ff') {
    r = '00'
    g = '00'
    b = '00'
  }
  return '#' + r + g + b
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
