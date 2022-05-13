import { Font } from 'expo';
import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View} from 'react-native';
import Lab1 from '../screens/Lab1';
import Lab2 from '../screens/Lab2';
import Lab3 from '../screens/Lab3';
import Lab4 from '../screens/Lab4';
import {useDispatch} from 'react-redux';
import {loadItems} from '../../store/data';
import axios from 'axios';


const Tab = createBottomTabNavigator();
  
const TabNavigator = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (dispatch) {
      axios
        .get('https://my-json-server.typicode.com/dudaev24/den/task')
        .then(({data}) => {
          dispatch(loadItems(data));
        })
        .catch(() => {});
    }
  }, [dispatch]);

  return (
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
          display: 'flex'
        }
      }}
    >
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
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat',
    color: '#121213',
    fontSize: 18,
  },
});

export default TabNavigator;
