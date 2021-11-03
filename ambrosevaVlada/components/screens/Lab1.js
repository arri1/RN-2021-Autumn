import React, {useState, useEffects} from 'react';
import {
  Text, 
  View, 
  StyleSheet, 
  Animated, 
  PanResponder
} from 'react-native';

const Lab1 = () => {
  const [color, setColor] = useState('#E6D899');
  const loc = useState(new Animated.ValueXY({x: 0, y: 0}))[0];

  const panResponder = useState(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (evt, gesture) => {
        loc.setOffset({
          x: loc.x._value,
          y: loc.y._value,
        });
      },
      onPanResponderMove: (evt, gesture) => {
        if (gesture.dx > 0) {
          setColor('#FD442E');
        } else if (gesture.dx < 0) {
          setColor('#AAC284');
        }
        return Animated.event([null, {dx: loc.x, dy: loc.y}], {
          useNativeDriver: false,
        })(evt, gesture);
      },
      onPanResponderRelease: (evt, gesture) => {
        loc.flattenOffset();
      },
    }),
  )[0];

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.circle, loc.getLayout(), {backgroundColor: color}]}
        {...panResponder.panHandlers}>
        <Text style={styles.text}>L&emsp;&emsp;R</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#FFFFFC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#E6D899',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    width: 120,
    fontFamily: 'PTSansNarrow-Bold',
    color: '#FFFFFC',
    fontSize: 24,
    textAlign: 'center'
  }
});

export default Lab1;
