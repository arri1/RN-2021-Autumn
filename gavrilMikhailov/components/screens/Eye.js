import React from 'react'
import { StyleSheet, SafeAreaView, View, TouchableOpacity, Image, Text } from 'react-native'
import { watchAction } from '../store/watch'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Eye = ({ navigation }) => {

  const dispatch = useDispatch()
  const state = useSelector(state => state)

  const didTapLogoutButton = async () => {
    await AsyncStorage.removeItem('authToken')
    navigation.navigate('LoginScreen')
  }

  return (
    <SafeAreaView>
      <View style={styles.view}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => dispatch(watchAction(true))}>
          <Image source={state.value ? require('../../assets/eye.png') : require('../../assets/eye.disabled.png')}/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={() => dispatch(watchAction(false))}>
          <Image source={state.value ? require('../../assets/eye.slash.disabled.png') : require('../../assets/eye.slash.png')}/>
        </TouchableOpacity>
        <TouchableOpacity 
          activeOpacity={0.7} 
          onPress={didTapLogoutButton}
          style={styles.logoutButton}
        >
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#0F044C',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  logoutButton: {
    marginTop: 20,
    width: 240,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: '#EEEEEE'
  }
})

export default Eye