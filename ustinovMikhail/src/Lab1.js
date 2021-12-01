/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  NativeModules,
  View,
  Text,
  StyleSheet,
  Pressable,
  LayoutAnimation,
} from 'react-native';

const {UIManager} = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default function Lab1() {
  const [themeColor, setThemeColor] = useState('white');
  const [size, setSize] = useState({w: 100, h: 100});

  const toggleDarkMode = () =>
    themeColor === 'white' ? setThemeColor('black') : setThemeColor('white');

  const enlargement = () => {
    LayoutAnimation.spring();
    setSize({
      w: size.w + 20,
      h: size.h + 20,
    });
  };

  return (
    <View style={[styles.container, {backgroundColor: themeColor}]}>
      <Pressable onPress={enlargement}>
        <View style={[styles.box, {width: size.w, height: size.h}]} />
      </Pressable>
      <Text
        style={[
          styles.header,
          {color: themeColor === 'white' ? 'black' : 'white'},
        ]}>
        Press the box above to increase its size
      </Text>
      <Pressable
        style={({pressed}) => [styles.button, {opacity: pressed ? 0.5 : 1}]}
        onPress={toggleDarkMode}>
        <Text style={styles.label}>dark mode</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  header: {
    fontFamily: 'FiraCode-Bold',
    fontWeight: '800',
    fontSize: 20,
    paddingBottom: 10,
    paddingTop: 10,
    textAlign: 'center',
  },
  label: {
    fontFamily: 'FiraCode-Regular',
    fontSize: 14,
    textAlign: 'center',
    letterSpacing: 1,
  },
  button: {
    backgroundColor: '#8EAFF5',
    borderRadius: 5,
    padding: 10,
  },
  box: {
    backgroundColor: 'red',
    borderRadius: 20,
  },
});
