import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Lab1 from '../screens/Lab1';
import Lab2 from '../screens/Lab2';
import Lab3 from '../screens/Lab3';
import Lab4 from '../screens/Lab4';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {loadItems} from '../../store/tasks';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (dispatch) {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
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
          tabBarLabelStyle: {
            color: '#000000',
            fontSize: 15,
            height: 20,
            fontWeight: 'bold',
            textAlignVertical: 'center',
          },
          tabBarItemStyle: {
            margin: 10,
            height: 50,
            borderRadius: 0,
            backgroundColor: '#B1AEF1',
          },
          tabBarStyle: {
            height: 70,
            backgroundColor: '#B1AEF1',
          },
        }}>
          
        <Tab.Screen
            name="Лаб1"
            component={Lab1}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => {
                return (
                  <Image source={require('./NavigatorImg/1.png')} style={styles.icon}/>
                );
              },
            }}
          />
        <Tab.Screen
            name="Лаб2"
            component={Lab2}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => {
                return (
                  <Image source={require('./NavigatorImg/2.png')} style={styles.icon}/>
                );
              },
            }}
          />
          <Tab.Screen
            name="Лаб3"
            component={Lab3}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => {
                return (
                  <Image source={require('./NavigatorImg/3.png')} style={styles.icon}/>
                );
              },
            }}
          />
          <Tab.Screen
            name="Лаб4"
            component={Lab4}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => {
                return (
                  <Image source={require('./NavigatorImg/4.png')} style={styles.icon}/>
                );
              },
            }}
          />
      </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
  icon: {
    width: 35,
    height: 35,
  },
});

export default TabNavigator;
