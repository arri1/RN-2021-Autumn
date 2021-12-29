import React, { useEffect, useState } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Login from '../screens/primary/Login'
import Register from '../screens/primary/Register'
import TabBar from '../screens/primary/TabBar'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {

  const [authToken, setAuthToken] = useState('loading')

  useEffect(async () => {
    const authToken = await AsyncStorage.getItem('authToken')
    setAuthToken(authToken)
  }, [])

  const StackView = () => {
    return (
      <Stack.Navigator initialRouteName={authToken == null ? 'LoginScreen' : 'TabBarScreen'}>
        <Stack.Screen name="LoginScreen" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="RegisterScreen" component={Register} options={{ headerShown: false }}/>
        <Stack.Screen name="TabBarScreen" component={TabBar} options={{ headerShown: false }}/>
      </Stack.Navigator>
    )
  }

  const LoadingView = () => {
    return (
      <SafeAreaView>
        <View style={styles.loadingView}>
          <Text style={styles.loadingLabel}>
            Loading...
          </Text>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <NavigationContainer>
      {authToken == 'loading' ? <LoadingView/> : <StackView/>}
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  loadingView: {
    height: '100%',
    backgroundColor: '#0F044C',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loadingLabel: {
    fontSize: 18,
    color: '#EEEEEE'
  }
});

export default AppNavigator