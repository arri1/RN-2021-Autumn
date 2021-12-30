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
        .get('https://jsonplaceholder.typicode.com/comments?postId=1&postId=2')
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
          color: '#5CBDDB',
          fontSize: 20,
          height: 55,
          fontWeight: 'bold',
          textAlignVertical: 'center',
        },
        tabBarItemStyle: {
          margin: 10,
          height: 50,
          borderRadius: 50,
          backgroundColor: '#FFFFFF',
        },
        tabBarStyle: {
          height: 70,
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
                style={{alignItems: 'center', justifyContent: 'center', top: 25, height: 25, width: 25  }}
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
                style={{alignItems: 'center', justifyContent: 'center', top: 25, height: 25, width: 25  }}
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
                style={{alignItems: 'center', justifyContent: 'center', top: 25, height: 25, width: 25  }}
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
              style={{alignItems: 'center', justifyContent: 'center', top: 25, height: 25, width: 25 }}
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