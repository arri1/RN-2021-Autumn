import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './components/routers/TabNavigator';
import store from './store';
import {Provider} from 'react-redux';
import client from './components/apollo/apollo';
import {ApolloProvider} from '@apollo/client';
import SignIn from './components/screens/signIn';
import SignUp from './components/screens/reg';
import FirstScreen from './components/screens/firstScreen';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="StartAut"
              component={FirstScreen}
              options={{title: 'Authorization'}}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{title: 'Sign in'}}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{title: 'Sign Up'}}
            />
            <Stack.Screen
              name="Tabs"
              component={TabNavigator}
              options={{title: 'Navigation'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
};

export default App;