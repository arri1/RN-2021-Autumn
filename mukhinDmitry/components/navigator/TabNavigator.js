import React from 'react';
import { View, Text, TouchableOpacity, BlurView, StyleSheet } from 'react-native';
import rnLab1 from '../labs/lab1/Lab1';
import rnLab2 from '../labs/lab2/Lab2';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const RNNavigator = ({ state, descriptors, navigation }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const TabNavigator = () => {
    return (
        <Tab.Navigator 
            backgroundColor='#5E5E5E'
        >
            <Tab.Screen 
                name="Lab 1" 
                component={rnLab1} 
                options={{
                    title: 'Color lightener',
                    headerStyle: {
                        backgroundColor: '#5E5E5E',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            <Tab.Screen 
                name="Lab 2"
                component={rnLab2}
                options={{
                    title: 'Color lightener',
                    headerStyle: {
                        backgroundColor: '#5E5E5E',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
                />
        </Tab.Navigator>
    )
}

export default TabNavigator
