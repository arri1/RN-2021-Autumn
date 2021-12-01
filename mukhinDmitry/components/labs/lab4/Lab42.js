import React from 'react'
import { useSelector } from 'react-redux'
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

const rnLab4 = () => {
  const bgColor = useSelector((state) => state.bgColor.value)

  return (
    <SafeAreaView style={styles.rnMain}>
        <View style={[styles.rnBox, {backgroundColor: bgColor}]} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rnButton: {
    marginTop: 54.9,
    marginLeft: 54.9,
    height: 46.54,
    width: 282.54,
    borderRadius: 8.72,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#5E5E5E",
  },
  rnButtonText: {
    lineHeight: 34.91,
    height: 34.91,
    marginLeft: 5.81,
    color: '#FFFFFF',
    fontSize: 16
  },
  rnBox: {
    marginTop: 120,
    marginLeft: 54.9,
    height: 282.54,
    width: 282.54,
    borderRadius: 8.72,
  },
  rnMain: {
    backgroundColor: "#333333",
    height: "100%",
  }
});

export default rnLab4