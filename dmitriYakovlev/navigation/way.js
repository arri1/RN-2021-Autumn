import React from "react";
import Reg from "../components/screens/Reg";
import Auth from "../components/screens/Auth";
import First from "../components/screens/First";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from "react-native";
import Tabs from "./tabs";

const Stack = createNativeStackNavigator();

export default App = () =>{
  StatusBar.setHidden(true);
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen
          name="first"
          component={First}
      />
      <Stack.Screen
          name="auth"
          component={Auth}
      />
      <Stack.Screen
          name="reg"
          component={Reg}
      />
      <Stack.Screen
          name="tab"
          component={Tabs}
      />
    </Stack.Navigator>
  );
}