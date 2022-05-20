import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import Lab1 from './screens/Lab1'
import Lab2 from './screens/Lab2'
import Lab3 from './screens/Lab3'
import { StyleSheet, View, Text, Image } from 'react-native';


const Tab = createBottomTabNavigator()

const App = () => {
  return (
      <NavigationContainer>
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
                        <Image  source={require('./assets/icons/icon.png')}/>
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
                        <Image  source={require('./assets/icons/icon.png')}/>
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
                        <Image  source={require('./assets/icons/icon.png')}/>
                      </View>
                    ),
                  }}
              />
          </Tab.Navigator>
      </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat',
    color: '#121213',
    fontSize: 18,
  },
});

export default App
