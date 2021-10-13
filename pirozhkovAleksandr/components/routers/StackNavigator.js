import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Lab1 from '../screens/lab1';
import Lab2 from '../screens/lab2';

import {Button, View} from 'react-native';

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button title="Lab1" onPress={() => navigation.navigate('Lab1')} />
      <Button title="Lab2" onPress={() => navigation.navigate('Lab2')} />
    </View>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Welcome'}}
      />
      <Stack.Screen name="Lab1" component={Lab1} />
      <Stack.Screen name="Lab2" component={Lab2} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
