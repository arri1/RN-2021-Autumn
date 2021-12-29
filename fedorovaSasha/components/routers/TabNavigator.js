import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Lab1 from '../screens/lab1';
import Lab2 from '../screens/lab2';
import Lab3 from '../screens/lab3';
import Lab4 from '../screens/lab4';
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
        tabBarLabelStyle: {
          color: '#78C25D',
          fontSize: 17,
          height: 40,
          fontWeight: 'bold',
          textAlignVertical: 'center',
        },
        tabBarItemStyle: {
          margin: 15,
          height: 35,
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
      <Tab.Screen name="Lab1" component={Lab1} />
      <Tab.Screen name="Lab2" component={Lab2} />
      <Tab.Screen name="Lab3" component={Lab3} />
      <Tab.Screen name="Lab4" component={Lab4} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
