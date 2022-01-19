import React from 'react';
import {
  Text, View,
} from 'react-native';

import styles from '../../styles/styles'

const Loading = () => {
  return (
      <View 
        style={[styles.container, {
         justifyContent: 'center', 
         width: '100%', 
         height: '100%'
        }]}
      >
        <Text 
          style={[styles.menuButtonText, {
            color: "#454545"
          }]}
        >
          Loading...
        </Text>
      </View>
  );
};

export default Loading;
