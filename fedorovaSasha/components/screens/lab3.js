import React, {useState, useMemo} from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  SafeAreaView,
  Animated,
} from 'react-native';
import axios from 'axios';

const expensiveFunction = () => {
  let i = 0;
  while (i < 600000) {
    i++;
  }
};

const Lab3 = () => {
  const notExpensive = useMemo(expensiveFunction, []);
  const [animation1, setAnimation1] = useState(new Animated.Value(0));
  const [animation2, setAnimation2] = useState(new Animated.Value(0));

  const handleAnimation1 = () => {
    const start = new Date().getTime();
    notExpensive;
    const end = new Date().getTime();
    Animated.timing(animation1, {
      toValue: 1,
      duration: (end - start + 1) * 1000,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animation1, {
        toValue: 0,
        duration: (end - start + 1) * 1000,
        useNativeDriver: false,
      }).start();
    });
  };
  const handleAnimation2 = () => {
    const start = new Date().getTime();
    expensiveFunction();
    const end = new Date().getTime();
    Animated.timing(animation2, {
      toValue: 1,
      duration: (end - start + 1) * 1000,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animation2, {
        toValue: 0,
        duration: (end - start + 1) * 1000,
        useNativeDriver: false,
      }).start();
    });
  };

  const boxInterpolation1 = animation1.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(120,194,93)', 'rgb(255,255,255)'],
  });

  const boxInterpolation2 = animation2.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(255,255,255)', 'rgb(120,194,93)'],
  });

  const animatedStyle1 = {
    backgroundColor: boxInterpolation1,
  };

  const animatedStyle2 = {
    backgroundColor: boxInterpolation2,
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => {
            handleAnimation1();
          }}>
          <Animated.View style={{...styles.box, ...animatedStyle1}} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            handleAnimation2();
          }}>
          <Animated.View style={{...styles.box1, ...animatedStyle2}} />
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#CCF6CF',
  },
  container: {
    flex: 1,
    margin: 15,
    alignItems: 'center',
  },
  box: {
    marginTop: 15,
    marginBottom: 15,
    width: 71,
    height: 71,
    transform: [{rotate: '-45deg'}],
    borderRadius: 5,
    borderColor: '#C27E5D',
    borderWidth: 2,
  },
  box1: {
    marginTop: 15,
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#C27E5D',
    borderWidth: 2,
  },
});

export default Lab3;
