import React from 'react';
import {View, StyleSheet} from 'react-native';

import TopTabNavigator from './Lab5TabNavigator';

const Lab5 = () => {
  return (
    <View style={styles.main}>
      <TopTabNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#CCF6CF',
  },

  item: {
    padding: 10,
    backgroundColor: '#CCF6CF',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Lab5;
