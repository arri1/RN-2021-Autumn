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
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(({data}) => {
          dispatch(loadItems(data));
        })
        .catch(() => {});
    }
  }, [dispatch]);
  return (
    <Tab.Navigator>
      <Tab.Screen name="Lab1" component={Lab1} />
      <Tab.Screen name="Lab2" component={Lab2} />
      <Tab.Screen name="Lab3" component={Lab3} />
      <Tab.Screen name="Lab4" component={Lab4} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
