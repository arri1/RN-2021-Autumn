import React, { useMemo, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Lab3 = () => {

  const [iterationsCount, setIterationsCount] = useState(200_000_000)

  const expensiveFunc = () => {
    let i = 0
    while (i < iterationsCount) i++
  }

  const defaultFunc = () => {
    const startTime = performance.now()
    expensiveFunc()
    const endTime = performance.now()
    return Math.round(endTime - startTime)
  }
  const memorizedFunc = useMemo(defaultFunc, [iterationsCount])
  
  const [defaultResult, setDefaultResult] = useState(0)
  const [memorizedResult, setMemorizedResult] = useState(0)
  
  return (
    <SafeAreaView>
      <View style={styles.view}>
        <View style={styles.column}>
          <Text style={styles.text}>Current iterations</Text>
          <Text style={[styles.text, styles.iterationsText]}>{iterationsCount}</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.text}>Duration: {defaultResult} ms</Text>
            <TouchableOpacity 
              style={styles.button} 
              activeOpacity={0.7}
              onPress={() => setDefaultResult(defaultFunc())}
            >
              <Text style={styles.buttonText}>Run default</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            <Text style={styles.text}>Duration: {memorizedResult} ms</Text>
            <TouchableOpacity 
              style={styles.button} 
              activeOpacity={0.7} 
              onPress={() => setMemorizedResult(memorizedFunc)}
            >
              <Text style={styles.buttonText}>Run useMemo</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity 
          style={[styles.button, styles.iterationsButton]} activeOpacity={0.7} 
          onPress={() => setIterationsCount(Math.round(Math.random() * 200_000_000))}
        >
          <Text style={styles.buttonText}>Set random iterations number</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#E8EAED',
    height: '100%',
    justifyContent: 'center',
    padding: 30
  },
  column: {
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  text: {
    color: 'dimgray',
    fontSize: 14
  },
  button: {
    backgroundColor: '#FFF',
    marginTop: 10,
    paddingHorizontal: 12,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 16,
  },
  iterationsText: {
    marginBottom: 20,
  },
  iterationsButton: {
    marginTop: 20,
    alignSelf: 'center'
  }
})

export default Lab3