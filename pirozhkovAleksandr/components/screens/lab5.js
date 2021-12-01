import React from 'react';
import {View} from 'react-native';
import {ExchangeRates} from '../functions/getQueries';
import {styles} from '../styles/lab1Styles';

const Lab5 = ({navigation}) => {
  return (
    <View
      style={
        (styles.main,
        {
          backgroundColor: '#353A45',
          alignItems: 'center',
        })
      }>
      <ExchangeRates />
    </View>
  );
};

export default Lab5;
