import React from 'react';
import {
  Text, View, Animated, TouchableOpacity,
} from 'react-native';
import styles from '../styles/styles';
import { auth } from '../store/tasks'

const Lab1 = () => {
  const [animation] = React.useState(new Animated.Value(0));

  const boxInterpolation = animation.interpolate({
    inputRange: [0, 100],
    outputRange: ['#FFD232', '#2C2B2B'],
  });

  const containerBackgroundColor = () => {
    styles.containerBackgroundColor = {
      backgroundColor: animation.__getValue() === 100 ? '#FFD232' : '#2C2B2B',
    };
  };

  const handleAnimation = () => {
    console.log(auth.getState())
    if (animation.__getValue() === 100) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 100,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
    containerBackgroundColor();
  };

  return (
    <Animated.View style={{
      flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: boxInterpolation,
    }}
    >
      <View>
        <TouchableOpacity style={styles.button} title="UPDATE" onPress={handleAnimation}>
          <Text style={styles.buttonText}>UPDATE</Text>
          
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default Lab1;
