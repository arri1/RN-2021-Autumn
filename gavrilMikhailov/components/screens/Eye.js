import React from 'react'
import { StyleSheet, SafeAreaView, View, TouchableOpacity, Image } from 'react-native'
import { watchAction } from '../store/watch'
import { useDispatch, useSelector } from 'react-redux'

const Eye = () => {

  const dispatch = useDispatch()
  const state = useSelector(state => state)

  return (
    <SafeAreaView>
      <View style={styles.view}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => dispatch(watchAction(true))}>
          <Image source={state.value ? require('../../assets/eye.png') : require('../../assets/eye.disabled.png')}/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={() => dispatch(watchAction(false))}>
          <Image source={state.value ? require('../../assets/eye.slash.disabled.png') : require('../../assets/eye.slash.png')}/>
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
})

export default Eye