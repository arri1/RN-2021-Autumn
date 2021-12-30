import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './navigation/tabs';
import store from './store';
import client from './components/apollo/apollo';
import {Provider} from 'react-redux';
import {ApolloProvider} from '@apollo/client';
import SignIn from './components/screens/signIn';
import SignUp from './components/screens/reg';
import FirstScreen from './components/screens/firstScreen';
import AddPost from './components/screens/addPost';
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
              options={{title: 'Авторизация'}}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{title: 'Войти'}}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{title: 'Регистрация'}}
            />
            <Stack.Screen
              name="AddPost"
              component={AddPost}
              options={{title: 'Добавить пост'}}
            />
            <Stack.Screen
              name="Tabs"
              component={Tabs}
              options={{title: 'Навигатор'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
