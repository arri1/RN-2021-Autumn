import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Image, StyleSheet} from 'react-native';
import Lab1 from '../components/screens/lab1';
import Lab2 from '../components/screens/lab2';
import Lab3 from '../components/screens/lab3';
import Lab4 from '../components/screens/lab4';
import Lab5 from '../components/screens/lab5';
import axios from 'axios';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {loadItems} from '../store/reducer';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (dispatch) {
      axios
        .get('https://my-json-server.typicode.com/Silverthg/myjson/tasks')
        .then(({data}) => {
          dispatch(loadItems(data));
        })
        .catch(() => {});
    }
  }, [dispatch]);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          elevation: 0,
          backgroundColor: '#fcfcfc',
          height: 62,
        },
      }}>
      <Tab.Screen
        name="Lab1"
        component={Lab1}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../components/icons/1.jpg')}
                style={styles.img}
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
            <View>
              <Image
                source={require('../components/icons/2.png')}
                style={styles.img}
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
            <View>
              <Image
                source={require('../components/icons/3.jpg')}
                style={styles.img}
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
            <View>
              <Image
                source={require('../components/icons/4.png')}
                style={styles.img}
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
            <View>
              <Image
                source={require('../components/icons/5.png')}
                style={styles.img}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 30,
    width: 30,
  },
});

export default Tabs;
