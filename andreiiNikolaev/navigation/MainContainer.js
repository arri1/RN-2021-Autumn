import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Lab1 from './screens/Lab1'
import Lab2 from './screens/Lab2'

const Lab1Name = 'Лабораторная №1';
const Lab2Name = 'Лабораторная №2';

const Tab = createBottomTabNavigator();

//Код для навигации был написан в соответствии с рекомендательным шаблоном Tab Navigation 6.X из официального сайта React Navigation https://reactnavigation.org/docs/tab-based-navigation/ .
export default function MainContainer() {
    return (
       <NavigationContainer>
           <Tab.Navigator
            initialRouteName={Lab1Name}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused,color,size }) => {
                   let iconName;
                   let rn = route.name;
                   if (rn === Lab1Name) {
                     iconName = focused ? 'numeric-1-box' : 'numeric-1-box-outline'
                   } else if (rn === Lab2Name) {
                     iconName = focused ? 'numeric-2-box' : 'numeric-2-box-outline'
                   } 
                   return <MaterialCommunityIcons name={iconName} size={size} color = {color}/>
                },             
             })}                      
             >          
                <Tab.Screen name={Lab1Name} component = {Lab1}/>
                <Tab.Screen name={Lab2Name} component = {Lab2}/>                
           </Tab.Navigator>
       </NavigationContainer>
    );
 }