import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Lab1 from '../screens/lab1';
import Lab2 from '../screens/lab2';
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
        .get('https://jsonplaceholder.typicode.com/comments?postId=1&postId=2')
        .then(({data}) => {
          dispatch(loadItems(data));
        })
        .catch(() => {});
    }
  }, [dispatch]);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          margin: 15,
          height: 35,
          width: 75,
          borderRadius: 20,
          backgroundColor: '#8F401A',
        },
        tabBarStyle: {
          height: 65,
          backgroundColor: '#F5938F',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#ffffff',
          fontSize: 22,
        },
        headerStyle: {
          backgroundColor: '#F5938F',
          height: 65,
        },
      }}>
      <Tab.Screen
        name="Lab1"
        component={Lab1}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.item}>
              <Image
                source={require('../icons/lab1.png')}
                resizeMode="contain"
                style={[
                  styles.img,
                  {tintColor: focused ? '#78C25D' : '#ffffff'},
                ]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Lab2"
        component={Lab2}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.item}>
              <Image
                source={require('../icons/lab2.png')}
                resizeMode="contain"
                style={[
                  styles.img,
                  {tintColor: focused ? '#78C25D' : '#ffffff'},
                ]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Lab3"
        component={Lab3}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.item}>
              <Image
                source={require('../icons/lab3.png')}
                resizeMode="contain"
                style={[
                  styles.img,
                  {tintColor: focused ? '#78C25D' : '#ffffff'},
                ]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Lab4"
        component={Lab4}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.item}>
              <Image
                source={require('../icons/lab4.png')}
                resizeMode="contain"
                style={[
                  styles.img,
                  {tintColor: focused ? '#78C25D' : '#ffffff'},
                ]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Lab5"
        component={Lab5}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.item}>
              <Image
                source={require('../icons/lab5.png')}
                resizeMode="contain"
                style={[
                  styles.img,
                  {tintColor: focused ? '#78C25D' : '#ffffff'},
                ]}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    position: 'absolute',
    height: 19,
    width: 51,
  },
});
export default TabNavigator;
