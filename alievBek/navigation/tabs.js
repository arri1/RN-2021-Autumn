import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useDispatch, useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {loadItems} from '../store/task';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import imgHome from '../img/home.jpg';
import imgNews from '../img/news.jpg';
import imgExit from '../img/exit.jpg';
import imgStory from '../img/story.jpg';
import imgUser from '../img/user.jpg';

import Login from '../screens/Login';
import Sign from '../screens/Sign';
import News from '../screens/News';
import Arts from '../screens/Arts';
import Lab3 from '../screens/Lab3';
import Lab4 from '../screens/Lab4';
import Lab5 from './Lab5';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Tabs = () => {
  const Load = AsyncStorage.getItem('LoadIn');
  const isLoggedIn = useSelector((state) => state.data.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (dispatch) {
      axios
        .get('https://my-json-server.typicode.com/MidnightYKT/json/posts')
        .then(({data}) => {
          dispatch(loadItems(data));
        })
        .catch(() => {});
    }
  }, [dispatch]);
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              position: 'absolute',
              bottom: 25,
              marginHorizontal: 20,
              elevation: 0,
              backgroundColor: '#fff',
              borderRadius: 30,
              height: 60,
              marginLeft: '5%',
              ...styles.shadow,
            },
          }}>
          <Tab.Screen
            name="News"
            component={News}
            options={{
              tabBarIcon: ({focused}) => (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: 10,
                  }}>
                  <Image
                    source={imgNews}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#e32f45' : '#748c94',
                    }}
                  />
                  <Text
                    style={{
                      color: focused ? '#e32f45' : '#748c94',
                      fontSize: 12,
                    }}>
                    News
                  </Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="    "
            component={Arts}
            options={{
              tabBarIcon: ({focused}) => (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: 10,
                  }}>
                  <Image
                    source={imgHome}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#e32f45' : '#748c94',
                    }}
                  />
                  <Text
                    style={{
                      color: focused ? '#e32f45' : '#748c94',
                      fontSize: 12,
                    }}>
                    Arts
                  </Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="     "
            component={Lab3}
            options={{
              tabBarIcon: ({focused}) => (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: 10,
                  }}>
                  <Image
                    source={imgExit}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#e32f45' : '#748c94',
                    }}
                  />
                  <Text
                    style={{
                      color: focused ? '#e32f45' : '#748c94',
                      fontSize: 12,
                    }}>
                    Lab3
                  </Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="      "
            component={Lab4}
            options={{
              tabBarIcon: ({focused}) => (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: 10,
                  }}>
                  <Image
                    source={imgStory}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#e32f45' : '#748c94',
                    }}
                  />
                  <Text
                    style={{
                      color: focused ? '#e32f45' : '#748c94',
                      fontSize: 12,
                    }}>
                    Lab4
                  </Text>
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Sign" component={Sign} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
