import React from 'react';

import {Neomorph} from 'react-native-neomorph-shadows';
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonShadow: {
    shadowOffset: {width: -7, height: -7},
    shadowOpacity: 1,
    margin: 5,
    shadowRadius: 14,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#353A45',
    width: 112,
    height: 63,
  },
  buttonText: {
    fontFamily: 'chakraPetchBold',
    fontSize: 18,
    textAlign: 'center',
    color: '#FF008A',
  },
});

function GradientText({children, colorsOfGradient}) {
  return (
    <LinearTextGradient
      locations={[0, 1]}
      colors={colorsOfGradient}
      start={{x: 0.5, y: 0.0}}
      end={{x: 0.5, y: 1.0}}>
      {children}
    </LinearTextGradient>
  );
}
const GradientNeomorph = ({children, styleBox, styleShadow}) => {
  return (
    <LinearGradient
      colors={['#FF008A', '#9E00FF']}
      start={{x: 0.5, y: 0.0}}
      end={{x: 0.5, y: 1.0}}
      style={styleBox}>
      <Neomorph
        inner
        lightShadowColor="#1E2126"
        darkShadowColor="#576178"
        style={styleShadow}>
        {children}
      </Neomorph>
    </LinearGradient>
  );
};
function GradientButton({text}) {
  return (
    <Neomorph
      lightShadowColor="#1E2126"
      darkShadowColor="#576178"
      style={styles.buttonShadow}>
      <GradientText colorsOfGradient={['#FAFF00', '#DF791A']}>
        <Text style={styles.buttonText}>{text}</Text>
      </GradientText>
    </Neomorph>
  );
}

export {GradientButton, GradientNeomorph, GradientText};
