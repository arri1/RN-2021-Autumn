import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { useSelector, useDispatch} from 'react-redux';
import { changeColor } from "../../store/background";

const Lab1 = () => {
  const color = useSelector(state => state.backgroundColor.value);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={[styles.main, {backgroundColor: color}]}>
      <ScrollView>
        <TouchableOpacity
          style={styles.box}
          onPress={() =>  dispatch(changeColor())}
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
    backgroundColor: '#FFFFFF',
    alignSelf: 'center'
  },
});
export default Lab1;
