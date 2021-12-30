import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Animated, 
  TouchableWithoutFeedback
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#5AD2F4'
  }
});

const Lab1 = () => {
  const [animation] = useState(new Animated.Value(1))
  const animatedStyles = {
    opacity: animation
  }
  
  const handleAnimation = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start(() => {
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }).start()
    })
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleAnimation}>
        <Animated.View style={[styles.box, animatedStyles]} />
      </TouchableWithoutFeedback>
    </View>
  );
}

export default Lab1;