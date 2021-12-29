import React, { useMemo, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Iterations = () => {

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
              <Text style={styles.buttonText}>Run memorized</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity 
          style={[styles.button, styles.iterationsButton]} activeOpacity={0.7} 
          onPress={() => setIterationsCount(Math.round(Math.random() * 200_000_000))}
        >
          <Text style={styles.buttonText}>Set random iterations count</Text>
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
    color: '#FFFFFF',
    fontSize: 14
  },
  button: {
    backgroundColor: "#EEEEEE",
    marginTop: 10,
    paddingHorizontal: 12,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6
  },
  buttonText: {
    fontSize: 18,
    color: "#141E61"
  },
  iterationsText: {
    marginBottom: 20,
  },
  iterationsButton: {
    marginTop: 20,
    alignSelf: 'center'
  }
})

export default Iterations