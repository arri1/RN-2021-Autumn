import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Lab1 from './screens/Lab1'
import Lab2 from './screens/Lab2'
import Lab3 from './screens/Lab3'

const Lab1Name = 'Лабораторная №1';
const Lab2Name = 'Лабораторная №2';

const Tab = createBottomTabNavigator();

const MainContainer= () => {
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
                   } else if (rn === Lab3Name) {
                     iconName = focused ? 'numeric-3-box' : 'numeric-3-box-outline'
                   }

                   return <MaterialCommunityIcons name={iconName} size={size} color = {color}/>
                },  
	        tabBarOptions ={{
               	  activeTintColor: '#F07818',
                  inactiveTintColor: '#FCEBB6'             
             })}                      
             >          
                <Tab.Screen name={Lab1Name} component = {Lab1}/>
                <Tab.Screen name={Lab2Name} component = {Lab2}/>   
		<Tab.Screen name={Lab3Name} component = {Lab3}/>  

           </Tab.Navigator>
       </NavigationContainer>
    );
 }

 export default MainContainer;