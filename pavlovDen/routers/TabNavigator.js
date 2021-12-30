import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import Lab1 from '../screens/Lab1';
import Lab2 from '../screens/Lab2';
import Lab3 from '../screens/Lab3';
import Lab4 from '../screens/Lab4';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {loadItems} from '../../store/data';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (dispatch) {
      axios
        .get('https://my-json-server.typicode.com/zereckt/den1/tasks')
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
          height: 80
        },
        tabBarItemStyle: {
          backgroundColor: '#484f58',
        },
        tabBarStyle: {
          height: 80
        },
      }}>


      <Tab.Screen
          name=" "
          component={Lab1}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => {
              return (
                <Image
                style={{alignItems: 'center', justifyContent: 'center', top: 40, height: 50, width: 50  }}
                  source={require('./NavigatorImg/1.png')}
                />
              );
            },
          }}
        />


      <Tab.Screen
          name="  "
          component={Lab2}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => {
              return (
                <Image
                style={{alignItems: 'center', justifyContent: 'center', top: 40, height: 50, width: 50  }}
                  source={require('./NavigatorImg/2.png')}
                />
              );
            },
          }}
        />

      <Tab.Screen
          name="   "
          component={Lab3}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => {
              return (
                <Image
                style={{alignItems: 'center', justifyContent: 'center', top: 40, height: 50, width: 50  }}
                  source={require('./NavigatorImg/3.png')}
                />
              );
            },
          }}
        />

      <Tab.Screen
        name="    "
        component={Lab4}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Image
              style={{alignItems: 'center', justifyContent: 'center', top: 40, height: 50, width: 50 }}
                source={require('./NavigatorImg/4.png')}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;