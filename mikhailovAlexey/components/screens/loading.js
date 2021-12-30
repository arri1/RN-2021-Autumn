import React from 'react';
import {
  Text, View,
} from 'react-native';

import styles from '../styles/styles';

const Loading = () => {
  return (
      <View style={{
      flex: 1, justifyContent: 'center', alignItems: 'center',
    }}>
        <TouchableOpacity style={styles.button} title="UPDATE">
          <Text style={styles.buttonText}>UPDATE</Text>
        </TouchableOpacity>
      </View>
  );
};

export default Loading;
