import React from 'react'
import { StyleSheet, SafeAreaView, View, TouchableOpacity, Image } from 'react-native'
import { useState } from 'react/cjs/react.development'

const Eye = () => {

  const [sight, setSight] = useState(false)

  return (
    <SafeAreaView>
      <View style={styles.view}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => setSight(true)}>
          <Image source={sight ? require('../../assets/eye.png') : require('../../assets/eye.disabled.png')}/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={() => setSight(false)}>
          <Image source={sight ? require('../../assets/eye.slash.disabled.png') : require('../../assets/eye.slash.png')}/>
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