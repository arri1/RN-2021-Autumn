import React from 'react';
import {
  StatusBar, TouchableOpacity, Text,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Menu from '../screens/lab5/menu';
import User from '../screens/lab5/user';
import Users from '../screens/lab5/users';
import Posts from '../screens/lab5/posts';
import CreatePost from '../screens/lab5/createpost';

const Stack = createNativeStackNavigator();

const UserMenu = ({ navigation }) => {
  StatusBar.setHidden(true);
  return (
    <Stack.Navigator
      initialRouteName="Menu"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#454545',
          height: 55,
        },
        headerTitleStyle: {
          fontSize: 24,
          fontFamily: 'Montserrat-Regular',
          color: 'white',
        },
        headerLeft: () => (
          <TouchableOpacity style={{ marginRight: 10 }} onPress={() => navigation.replace('Menu')}>
            <Text style={
              {
                fontSize: 24,
                fontFamily: 'Montserrat-Regular',
                color: 'white',
              }
          }
            >
              {'<'}
            </Text>
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{
          headerLeft: () => (<Text></Text>),
        }}
      />
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="Users" component={Users} />
      <Stack.Screen name="Posts" component={Posts} />
      <Stack.Screen name="CreatePost" component={CreatePost} />
    </Stack.Navigator>
  );
}

export default UserMenu;
