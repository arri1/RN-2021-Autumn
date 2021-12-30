import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Lab1 = () => {
  const [color, setColor] = useState('#F5909E');
  const [counter, setCounter] = useState(0);
  return (
    <SafeAreaView style={[styles.main, {backgroundColor: color}]}>
      <ScrollView>
        <TouchableOpacity
          style={styles.box}
          onPress={() => setColor('#78CDF5')}
        />
        <TouchableOpacity
          style={styles.box}
          onPress={() => setColor('#F5EF5F')}
        />
        <View style={styles.counterContainer}>
          <Text>{counter}</Text>
        </View>
        <TouchableOpacity
          style={styles.counterButton}
          onPress={() => setCounter(counter + 1)}>
          <Text>add count</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
  },
  box: {
    height: 200,
    margin: 15,
    borderRadius: 15,
    backgroundColor: '#4288A8',
  },
  counterContainer: {
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterButton: {
    backgroundColor: '#A8A54A',
    margin: 15,
    borderRadius: 15,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Lab1;
