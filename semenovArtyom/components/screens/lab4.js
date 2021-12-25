import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { useSelector} from 'react-redux';

const Lab4 = () => {
  const color = useSelector(state => state.backgroundColor.value);
  const boxcolor = useSelector(state => state.boxColor.value);

  return (
    <SafeAreaView style={[styles.main, {backgroundColor: color}]}>
      <ScrollView>
        <TouchableOpacity
          style={[styles.box, {backgroundColor: boxcolor}]}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
  },
  box: {
    display: 'flex',
    height: 100,
    width: 100,
    marginTop: 160,
    alignSelf: 'center'
  },
});
export default Lab4;
