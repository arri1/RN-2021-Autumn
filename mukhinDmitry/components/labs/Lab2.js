import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const rnLab2 = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style = {styles.rnTitle}>
          TO-DO:
            CHANGE TO FIGMA PROTOTYPE
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rnButton: {
    marginTop: 64,
    paddingHorizontal: 24,
  },
  rnTitle: {
    marginTop: 32,
    marginBottom: 16,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  rnBox: {
    height: 100,
    margin: 50,
  },
  rnMain: {
    backgroundColor: '#424448',
  }
});

export default rnLab2;
