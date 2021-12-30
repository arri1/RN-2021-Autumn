import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Lab1 from '../screens/Lab1';
import Lab2 from '../screens/Lab2';
import Lab3 from '../screens/lab3';
import Lab4 from '../screens/lab4';
import Lab5 from '../screens/lab5/lab5';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {loadItems} from '../../store/tasks';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (dispatch) {
      axios
        .get('https://picsum.photos/v2/list?limit=10')
        .then(({data}) => {
          dispatch(loadItems(data));
        })
        .catch(() => {});
    }
  }, [dispatch]);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Lab1"
        component={Lab1}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image source={require('../icons/l1.png')} style={styles.img} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Lab2"
        component={Lab2}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image source={require('../icons/l2.png')} style={styles.img} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Lab3"
        component={Lab3}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image source={require('../icons/l3.png')} style={styles.img} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Lab4"
        component={Lab4}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image source={require('../icons/l4.png')} style={styles.img} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Lab5"
        component={Lab5}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image source={require('../icons/l5.png')} style={styles.img} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 25,
    width: 25,
  },
});

export default TabNavigator;
