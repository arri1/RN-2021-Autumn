import React from 'react';
import {View, StyleSheet} from 'react-native';

import SlowObject from '../SlowObject';
import QuickObject from '../QuickObject';

const Lab3 = () => {
  return (
    <View style={styles.container}>
      <SlowObject />
      <QuickObject />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Lab3;
