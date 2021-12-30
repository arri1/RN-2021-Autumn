import React, {useEffect} from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Lab1 from '../screens/lab1';
import Lab2 from '../screens/lab2';
import Lab3 from '../screens/lab3';
import Lab4 from '../screens/lab4';
import Lab5 from '../screens/lab5/lab5';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {loadItems} from '../../store/tasks';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const TabNavigator = ({navigation}) => {
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
  const signOut = () => {
    AsyncStorage.setItem('group', '');
    AsyncStorage.setItem('name', '');
    AsyncStorage.setItem('login', '');
    AsyncStorage.setItem('password', '');
    AsyncStorage.setItem('token', '');
    navigation.replace('Authorization');
  };

  return (
    <View style={styles.main}>
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
      <TouchableOpacity style={styles.buttonLog} onPress={signOut}>
        <Text style={styles.text}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    height: '100%',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    position: 'absolute',
    height: 19,
    width: 51,
  },
  buttonLog: {
    position: 'absolute',
    backgroundColor: '#C27E5D',
    borderRadius: 20,
    alignItems: 'center',
    top: 12.5,
    right: 15,
    height: 40,
    width: 75,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
});
export default TabNavigator;
