import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import Sound from 'react-native-sound';
 
const App = () => {
  sound = new Sound('test_sound.mp3');
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <TouchableOpacity
          style={[styles.countButton]}
          onPress={() => {
            this.sound.play()
          }}>
          <Text>Воспроизвести звук</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  countButton: {
    backgroundColor: '#000000',
    margin: 25,
    borderRadius: 100,
    padding: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
 
export default App;

