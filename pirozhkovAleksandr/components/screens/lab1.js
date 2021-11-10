import React, {useState} from 'react';
import {Neomorph} from 'react-native-neomorph-shadows';
import {LinearTextGradient} from 'react-native-text-gradient';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const GradientText = ({children, colorsOfGradient}) => {
  return (
    <LinearTextGradient
      locations={[0, 1]}
      colors={colorsOfGradient}
      start={{x: 0.5, y: 0.0}}
      end={{x: 0.5, y: 1.0}}>
      {children}
    </LinearTextGradient>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 690,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: 150,
    width: 200,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 20,
  },
  littleBox: {
    height: 50,
    width: 200,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 15,
    backgroundColor: '#DBAB84',
  },
  text: {
    fontSize: 20,
  },
  counterContainer: {
    width: 200,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#DBBD86',
    marginTop: 10,
    alignSelf: 'center',
    fontSize: 20,
  },
  image: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 150,
    right: 0,
  },
  buttonShadow: {
    shadowOffset: {width: -7, height: -7},
    shadowOpacity: 1,
    marginTop: 16,
    shadowRadius: 14,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#353A45',
    width: 200,
    height: 63,
  },
  buttonText: {
    fontFamily: 'chakraPetchBold',
    fontSize: 18,
    textAlign: 'center',
  },
});

const Lab1 = ({navigation, route}) => {
  const [color, setColor] = useState('#353A45');
  const [counter, setCounter] = useState(0);

  return (
    <ScrollView style={{backgroundColor: color}}>
      <View style={styles.main}>
        <TouchableOpacity onPress={() => setColor('#555C70')}>
          <Neomorph
            lightShadowColor="#1E2126"
            darkShadowColor="#576178"
            style={styles.buttonShadow}>
            <GradientText colorsOfGradient={['#FAFF00', '#DF791A']}>
              <Text style={styles.buttonText}>Click me</Text>
            </GradientText>
          </Neomorph>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setColor('#353A45')}>
          <Neomorph
            lightShadowColor="#1E2126"
            darkShadowColor="#576178"
            style={styles.buttonShadow}>
            <GradientText colorsOfGradient={['#FAFF00', '#DF791A']}>
              <Text style={styles.buttonText}>Click me too</Text>
            </GradientText>
          </Neomorph>
        </TouchableOpacity>

        <View>
          <Neomorph
            lightShadowColor="#1E2126"
            darkShadowColor="#576178"
            inner
            style={styles.buttonShadow}>
            <GradientText colorsOfGradient={['#FAFF00', '#DF791A']}>
              <Text style={styles.buttonText}>{counter}</Text>
            </GradientText>
          </Neomorph>
        </View>

        <TouchableOpacity onPress={() => setCounter(counter + 1)}>
          <Neomorph
            lightShadowColor="#1E2126"
            darkShadowColor="#576178"
            style={styles.buttonShadow}>
            <GradientText colorsOfGradient={['#FAFF00', '#DF791A']}>
              <Text style={styles.buttonText}>Add some points</Text>
            </GradientText>
          </Neomorph>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setCounter(counter - 1)}>
          <Neomorph
            lightShadowColor="#1E2126"
            darkShadowColor="#576178"
            style={styles.buttonShadow}>
            <GradientText colorsOfGradient={['#FAFF00', '#DF791A']}>
              <Text style={styles.buttonText}>Subtract some points</Text>
            </GradientText>
          </Neomorph>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Lab1;
