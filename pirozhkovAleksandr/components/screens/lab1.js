import React, {useState} from 'react';
import {Neomorph} from 'react-native-neomorph-shadows';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const styles = StyleSheet.create({
  main: {
    height: 690,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    width: '100%',
    textShadowColor: 'black',
    textShadowRadius: 5,
    textShadowOffset: {width: 2, height: 2},
    color: '#FF008A',
    fontFamily: 'chakraPetchBold',
    fontSize: 18,
    textAlign: 'center',
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
    width: '100%',
    textShadowColor: 'black',
    textShadowRadius: 5,
    textShadowOffset: {width: 2, height: 2},
    color: '#FDD400',
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
            <Text style={styles.buttonText}>Click me</Text>
          </Neomorph>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setColor('#353A45')}>
          <Neomorph
            lightShadowColor="#1E2126"
            darkShadowColor="#576178"
            style={styles.buttonShadow}>
            <Text style={styles.buttonText}>Click me too</Text>
          </Neomorph>
        </TouchableOpacity>

        <View>
          <Neomorph
            lightShadowColor="#1E2126"
            darkShadowColor="#576178"
            inner
            style={styles.buttonShadow}>
            <Text style={styles.counterText}>{counter}</Text>
          </Neomorph>
        </View>

        <TouchableOpacity onPress={() => setCounter(counter + 1)}>
          <Neomorph
            lightShadowColor="#1E2126"
            darkShadowColor="#576178"
            style={styles.buttonShadow}>
            <Text style={styles.buttonText}>Add some points</Text>
          </Neomorph>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setCounter(counter - 1)}>
          <Neomorph
            lightShadowColor="#1E2126"
            darkShadowColor="#576178"
            style={styles.buttonShadow}>
            <Text style={styles.buttonText}>Subtract some points</Text>
          </Neomorph>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Lab1;
