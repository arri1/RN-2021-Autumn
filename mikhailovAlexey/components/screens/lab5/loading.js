import React from 'react';
import {
  Text, View,
} from 'react-native';

const Loading = () => {
  return (
      <View style={{
      flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'
    }}>
        <Text>Loading...</Text>
      </View>
  );
};

export default Loading;
