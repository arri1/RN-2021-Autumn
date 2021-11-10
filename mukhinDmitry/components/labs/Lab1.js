import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
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
    <SafeAreaView>
      <View>
        <Text style={styles.rnTitle}>
          Color lightener
        </Text>
        <View style={[styles.rnBox, {backgroundColor: bgColor}]} />
        <Button 
          style = {styles.rnButton}
          onPress={() => setBgColor(colorStep(bgColor))}
          title="Try me"
          color={bgColor}
          accessibilityLabel="Just give it a try"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rnButton: {
    marginTop: 64,
    paddingHorizontal: 24,
  },
  rnTitle: {
    marginTop: 32,
    marginBottom: 16,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  rnBox: {
    height: 100,
    margin: 50,
  },
  rnMain: {
    backgroundColor: '#424448',
  }
});

export default rnLab1;
