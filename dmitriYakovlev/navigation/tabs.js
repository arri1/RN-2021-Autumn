import React, { useEffect } from 'react';
import { Image, StatusBar, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDispatch } from 'react-redux'; 
import axios from 'axios';

import { load } from '../components/store/task';

import Lab1 from '../components/screens/Lab1'
import Lab2 from '../components/screens/Lab2'
import Lab3 from '../components/screens/Lab3'
import Lab4 from '../components/screens/Lab4'

import play from '../components/images/play.png';
import plus from '../components/images/plus.png';
import copy from '../components/images/copy.png';
import log from '../components/images/log.png';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(({data}) => {
        dispatch(load(data));
      })
      .catch(() => {});
  }, [dispatch]);
  StatusBar.setHidden(true);
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: false, 
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          elevation: 5,
          backgroundColor: '#1F6ED4',
          height: 68,
        }
    }}>
      <Tab.Screen name="ЛАБ 1" component={Lab1} 
        options={{
          tabBarIcon:() => <View style={{elevation: 10}}><Image source={play} style={styles.icon}/></View>
      }}/>
      <Tab.Screen name="ЛАБ 2" component={Lab2} 
        options={{
          tabBarIcon:() => <Image source={copy} style={styles.icon}/>
      }}/>
      <Tab.Screen name="ЛАБ 3" component={Lab3} 
        options={{
          tabBarIcon:() => <Image source={plus} style={styles.icon}/>
      }}/>
      <Tab.Screen name="ЛАБ 4" component={Lab4} 
        options={{
          tabBarIcon:() => <Image source={log} style={styles.icon}/>
      }}/>
    </Tab.Navigator>
  );
}

export default Tabs;

const styles = StyleSheet.create({
  icon: {
    height: 50,
    width: 50,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 10, 
      height: 10
    },
    shadowOpacity: 0.8,
  },
})