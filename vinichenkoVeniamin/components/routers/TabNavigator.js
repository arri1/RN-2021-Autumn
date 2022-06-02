import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native'
import { Image, StyleSheet, View } from 'react-native';
import Lab1 from '../../screens/Lab1';
import Lab2 from '../../screens/Lab2';
import Lab3 from '../../screens/Lab3';
import Lab4 from '../../screens/Lab4';
import Lab5 from '../../screens/Lab5';

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
          <Tab.Navigator
              headerMode="none"
              screenOptions={({route}) => ({
                  headerShown: false,    
              })}>
              <Tab.Screen
                  name="Lab1"
                  component={Lab1}
                  options={{
                    headerShown: false,
                    tabBarIcon: () => (
                      <View>
                        <Image  source={require('../../assets/icons/icon.png')}/>
                      </View>
                    ),
                  }}
              />
              <Tab.Screen
                  name="Lab2"
                  component={Lab2}
                  options={{
                    headerShown: false,
                    tabBarIcon: () => (
                      <View>
                        <Image  source={require('../../assets/icons/icon.png')}/>
                      </View>
                    ),
                  }}
              />
              <Tab.Screen
                  name="Lab3"
                  component={Lab3}
                  options={{
                    headerShown: false,
                    tabBarIcon: () => (
                      <View>
                        <Image  source={require('../../assets/icons/icon.png')}/>
                      </View>
                    ),
                  }}
              />
              <Tab.Screen
                  name="Lab4"
                  component={Lab4}
                  options={{
                    headerShown: false,
                    tabBarIcon: () => (
                      <View>
                        <Image  source={require('../../assets/icons/icon.png')}/>
                      </View>
                    ),
                  }}
              />
              <Tab.Screen
                  name="Lab5"
                  component={Lab5}
                  options={{
                    headerShown: false,
                    tabBarIcon: () => (
                      <View>
                        <Image  source={require('../../assets/icons/icon.png')}/>
                      </View>
                    ),
                  }}
              />
          </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    icon:{
        width: 35,
        height: 35
    }
});

export default TabNavigator;