import React from 'react';
import {View, StyleSheet} from 'react-native';

import TopTabNavigator from '../../routers/TopTabNavigatorMain';

const Lab5 = () => {
  return (
    <View style={styles.main}>
      <TopTabNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {height: '100%'},

  item: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Lab5;
