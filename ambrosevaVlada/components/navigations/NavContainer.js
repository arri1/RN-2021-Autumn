import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View} from 'react-native';

import Lab1 from '../screens/Lab1';
import Lab2 from '../screens/Lab2';
import Lab3 from '../screens/Lab3';
import Lab4 from '../screens/Lab4';
import Lab5 from '../screens/Lab5';

import NavigationStack from './NavigationStack';

const Tab = createBottomTabNavigator();

const NavContainer = () => {
  const signedIn = useSelector(state => state.toDo.signedIn);

  return (
    <NavigationContainer>
      {!signedIn ? (
        <Lab5 />
      ) : (
        <Tab.Navigator
          headerMode="none"
          screenOptions={{
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
              backgroundColor: '#FFFFFC',
              width: 393,
              height: 67,
              position: 'absolute',
              borderTopWidth: 0,
              elevation: 0,
              display: 'flex',
            },
          }}>
          <Tab.Screen
            name="LAB1"
            component={Lab1}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <View>
                  <Text style={styles.text}>LAB1</Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="LAB2"
            component={Lab2}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <View>
                  <Text style={styles.text}>LAB2</Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="LAB3"
            component={Lab3}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <View>
                  <Text style={styles.text}>LAB3</Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="LAB4"
            component={Lab4}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <View>
                  <Text style={styles.text}>LAB4</Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="LAB5"
            component={NavigationStack}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <View>
                  <Text style={styles.text}>LAB5</Text>
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat',
    color: '#121213',
    fontSize: 18,
  },
});

export default NavContainer;
