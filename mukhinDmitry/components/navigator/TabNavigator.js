import React from 'react';
import { Image, StyleSheet, Text  } from 'react-native';
import rnLab1 from '../labs/lab1/Lab1';
import rnLab2 from '../labs/lab2/Lab2';
import rnLab3 from '../labs/lab3/Lab3';
import rnLab41 from '../labs/lab4/Lab41';
import rnLab42 from '../labs/lab4/Lab42';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Lab 1" screenOptions = {({ route }) => ({
            headerStyle: {
                backgroundColor: '#5E5E5E',
            },
            headerTitleAlign: 'center',
            tabBarLabel: ({ focused }) => {
                return <Text style={{
                  color: focused ? "#FFFFFF" : "#A5A5A5",
                  top: -8
                }}>
                  {route.name}
                </Text>
            },
            tabBarStyle: {
                elevation: 0,
                backgroundColor: '#5E5E5E',
                borderTopColor: '#5E5E5E',
                borderTopWidth: 1,
                height: 69.81,
            }
          })}
        >
            <Tab.Screen 
                name="Lab 1" 
                component={rnLab1} 
                options={{
                    title: 'Color lightener',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#FFFFFF'
                    },
                    tabBarIcon: () => {
                        return <Image source = {require("../../res/img/navbar/tab-1.png")} style={styles.icon} />;
                    },
                }}
            />
            <Tab.Screen 
                name="Lab 2"
                component={rnLab2}
                options={{
                    title: 'RN To-Do List',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#FFFFFF'
                    },
                    tabBarIcon: () => {
                        return <Image source = {require("../../res/img/navbar/tab-2.png")} style={styles.icon} />;
                    },
                }}
            />
            <Tab.Screen 
                name="Lab 3"
                component={rnLab3}
                options={{
                    title: 'useMemo vs useCallback',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#FFFFFF'
                    },
                    tabBarIcon: () => {
                        return <Image source = {require("../../res/img/navbar/tab-1.png")} style={styles.icon} />;
                    },
                }}
            />
            <Tab.Screen 
                name="Lab 4"
                component={rnLab41}
                options={{
                    title: 'React Redux Store',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#FFFFFF'
                    },
                    tabBarIcon: () => {
                        return <Image source = {require("../../res/img/navbar/tab-2.png")} style={styles.icon} />;
                    },
                }}
            />
            <Tab.Screen 
                name="Lab 4.2"
                component={rnLab42}
                options={{
                    title: 'React Redux Listener',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#FFFFFF'
                    },
                    tabBarIcon: () => {
                        return <Image source = {require("../../res/img/navbar/tab-1.png")} style={styles.icon} />;
                    },
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    icon: {
      width: 32,
      height: 32,
      resizeMode: 'stretch',
    }
  });

export default TabNavigator
