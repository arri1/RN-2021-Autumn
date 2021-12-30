import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Lab1 from '../screens/Lab1';
import Lab2 from '../screens/Lab2';
import Lab3 from '../screens/Lab3';
import Lab4 from '../screens/Lab4';
import Lab5 from '../screens/Lab5/Lab5';
import Post from '../screens/Lab5/Post';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {loadItems} from '../../store/tasks';
import { AsyncStorage } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'


const Tab = createBottomTabNavigator();

const TabNavigator = (navigation) => {
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
    headerMode="none"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 65,
          backgroundColor: '#E6AF77',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#ffffff',
          fontSize: 22,
        },
        headerStyle: {
          backgroundColor: '#E6AF77',
          height: 65,
        },
      }}>


      <Tab.Screen
        name=" "
        component={Lab1}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.item}>
              <Image
                source={require('../img/star2.png')}
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
        name="  "
        component={Lab2}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.item}>
              <Image
                source={require('../img/bubble2.png')}
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
        name="   "
        component={Lab3}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.item}>
              <Image
                source={require('../img/heart2.png')}
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
        name="        "
        component={Lab4}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.item}>
              <Image
                source={require('../img/pen.png')}
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
        name="          "
        component={Lab5}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.item}>
              <Image
                source={require('../img/user.png')}
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
        name="            "
        component={Post}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.item}>
              <Image
                source={require('../img/news.png')}
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
  },
  buttonLog: {
    position: 'absolute',
    backgroundColor: '#FF0000',
    borderRadius: 20,
    alignItems: 'center',
    top: 12.5,
    right: 15,
    height: 37.5,
    width: 75,
    justifyContent: 'center'
  },
  text: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    position: 'absolute',
  },
});
export default TabNavigator;
