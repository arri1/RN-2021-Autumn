import React, { useState, useMemo } from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';

import styles from '../styles/styles';

const expensiveFunction = () => {
  const seconds = new Date().getTime() / 1000;
  let now = new Date().getTime() / 1000;
  while (seconds + 2 > now) {
    now = new Date().getTime() / 1000;
  }
  return 'Date now';
};

const setTime = () => {
  let left = []
  const deadline = new Date('January 1, 2022 00:00:00');
  const time = deadline - new Date()
  left['days'] = time > 0 ? Math.floor(time / 1000 / 60 / 60 / 24) : 0;
  left['hours'] = time > 0 ? Math.floor(time / 1000 / 60 / 60) % 24 : 0;
  left['minutes'] = time > 0 ? Math.floor(time / 1000 / 60) % 60 : 0;
  left['seconds'] = time > 0 ? Math.floor(time / 1000) % 60 : 0;
  return left
}

const Lab3 = () => {
  const [value,setValue] = useState();
  const operation = useMemo(() => expensiveFunction(), []);
  const left = setTime()

  const onPressHandler = () => {
    const x = expensiveFunction();
    setValue({})
  };

  const onPressHandlerSecond = () => {
    const x = operation;
    setValue({})
  };

  return (
    <View style={[styles.container]}>
      <View style={{ height: 10 }} />
      <View style={[styles.memoBoxSize]}>
        <View>
          <Text style={[styles.boxTextStyle, { fontSize: 20 }]}>
            Until to New Year left:
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={[styles.boxTextStyle, { fontSize: 50 }]}>
              {left['days']}
            </Text>
            <Text style={[styles.boxTextStyle, { fontSize: 15 }]}>
              Day
            </Text>
          </View>
          <Text style={[styles.boxTextStyle, { fontSize: 30, top: 12 }]}>
            :
          </Text>
          <View style={{ alignItems: 'center' }}>
            <Text style={[styles.boxTextStyle, { fontSize: 50 }]}>
              {left['hours']}
            </Text>
            <Text style={[styles.boxTextStyle, { fontSize: 15 }]}>
              Hours
            </Text>
          </View>
          <Text style={[styles.boxTextStyle, { fontSize: 30 , top: 12 }]}>
            :
          </Text>
          <View style={{ alignItems: 'center' }}>
            <Text style={[styles.boxTextStyle, { fontSize: 50 }]}>
              {left['minutes']}
            </Text>
            <Text style={[styles.boxTextStyle, { fontSize: 15 }]}>
              Minutes
            </Text>
          </View>
          <Text style={[styles.boxTextStyle, { fontSize: 30 , top: 12 }]}>
            :
          </Text>
          <View style={{ alignItems: 'center' }}>
            <Text style={[styles.boxTextStyle, { fontSize: 50 }]}>
              {left['seconds']}
            </Text>
            <Text style={[styles.boxTextStyle, { fontSize: 15 }]}>
              Seconds
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={[styles.memoButton, styles.memoButtonLeft, { backgroundColor: '#555' }]} onPress={onPressHandler}>
        <Text style={styles.buttonText}>SLOW</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.memoButton, styles.memoButtonRight]} onPressIn={onPressHandlerSecond}>
        <Text style={styles.buttonText}>FAST</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Lab3;
