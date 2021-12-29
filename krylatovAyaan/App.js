import React from 'react';
import lab1 from './screens/lab1';
import lab2 from './screens/lab2';
import lab3 from './screens/lab3';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Image} from 'react-native';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Lab1"
          component={lab1}
          options={{
            tabBarIcon: ({focused}) => (
              <Image source={require('./images/1.png')} style={styles.icon} />
            ),
          }}
        />
        <Tab.Screen
          name="Lab2"
          component={lab2}
          options={{
            tabBarIcon: ({focused}) => (
              <Image source={require('./images/2.png')} style={styles.icon} />
            ),
          }}
        />
        <Tab.Screen
          name="Lab3"
          component={lab3}
          options={{
            tabBarIcon: ({focused}) => (
              <Image source={require('./images/3.png')} style={styles.icon} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  icon: {
    width: 35,
    height: 35,
  },
});
export default App;
