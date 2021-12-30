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
          style={styles.button}
          onPress={() =>  dispatch(changeColor())}
        ><Text style={styles.buttonText}>Change color</Text></TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
  },
  button: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#BB86FC',
    marginTop: 535,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 19,
    color: '#000000'
  }
});
export default Lab1;
