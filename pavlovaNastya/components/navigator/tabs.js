import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Lab1 from '../screens/lab1';
import Lab2 from '../screens/lab2';
import { View, Image, StyleSheet } from 'react-native';
const Tab = createBottomTabNavigator();
const BottomTab =()=> {
    return (
      <Tab.Navigator>
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