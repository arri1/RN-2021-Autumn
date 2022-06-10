import React, {useEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Lab1 from '../screens/lab1';
import Lab2 from '../screens/lab2';
import Lab3 from '../screens/lab3';
import Lab4 from '../screens/lab4';
import { View, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {loadItems} from '../../store/tasks';
const Tab = createBottomTabNavigator();
const BottomTab =()=> {
  const dispatch = useDispatch();
  useEffect(() => {
    if (dispatch) {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(({data}) => {
          dispatch(loadItems(data));
        })
        .catch(() => {});
    }
  }, [dispatch]);
    return (
      <Tab.Navigator screenOptions={({route}) => ({
        tabBarStyle: { 
          position: 'absolute',
          backgroundColor: '#CE84AD',
          height: 70,
          display: 'flex',
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: 'Roboto',
          color: '#000000',
          fontSize: 16
        },
      })}>
        <Tab.Screen 
        name="Lab1" 
        component={Lab1} 
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image source={ require ('../icons/lab1.png')} style={styles.img}/>
            </View>
          )
        }}
        />
        <Tab.Screen 
        name="Lab2" 
        component={Lab2}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image source={ require ('../icons/lab2.png')} style={styles.img}/>
            </View>
          )
        }}
        />
        <Tab.Screen 
        name="Lab3" 
        component={Lab3}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image source={ require ('../icons/lab3.png')} style={styles.img}/>
            </View>
          )
        }}
        />
        <Tab.Screen 
        name="Lab4" 
        component={Lab4}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image source={ require ('../icons/lab4.png')} style={styles.img}/>
            </View>
          )
        }}
        />
      </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    img:{
      height: 25,
      width: 25,
    },
});
export default BottomTab;