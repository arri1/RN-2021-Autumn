import React from 'react';
import {
  Text, View, TouchableOpacity
} from 'react-native';

const MenuPost = () => {
  return (
      <View style={{
        backgroundColor: 'white',
        left: 150, top: 150, zIndex: 1, justifyContent: 'center', alignItems: 'center', width: 200, height: 200, position: 'absolute'
    }}>
        <TouchableOpacity><Text>Loadingaaaa...</Text></TouchableOpacity>
      </View>
  );
};

export default MenuPost;
