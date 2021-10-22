/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {Text, View, Animated, StyleSheet, PanResponder} from 'react-native';

const App = () => {
  const loc = useState(new Animated.ValueXY())[0];
  const col = useState(new Animated.Value(0))[0];

  const [state, setState] = useState({
    stat: '#F26E22',
    stat1: '#0396A6',
    opacity: 1,
  });

  const panResponder = useState(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        loc.setOffset({
          x: loc.x._value,
          y: loc.y._value,
        });
      },
      onPanResponderMove: (event, gesture) => {
        loc.setValue({x: gesture.dx, y: gesture.dy});
        if (gesture.dx >= 0) {
          setState({...state, opacity: 0.5, stat: '#F26E22', stat1: '#0396A6'});
        } else {
          setState({...state, opacity: 0.5, stat: '#0396A6', stat1: '#F26E22'});
        }
      },
      onPanResponderRelease: () => {
        loc.flattenOffset();
        setState({...state, opacity: 1});
      },
    }),
  )[0];

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.round,
          loc.getLayout(),
          {
            backgroundColor: state.stat1,
            opacity: state.opacity,
          },
        ]}
        {...panResponder.panHandlers}>
        <Text style={styles.text}>L----R</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '800',
    color: '#fff',
  },
  round: {
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
