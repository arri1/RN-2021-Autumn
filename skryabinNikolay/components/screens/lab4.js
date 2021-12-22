import React from "react";
import {Text, View, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity} from "react-native";
import {useSelector, useDispatch} from 'react-redux'
import {increaseCounterDelete} from '../../store/tasks';

const Lab4 = () => {
  
  const color = useSelector((state) => state.background.value)
  const count = useSelector((state) => state.background.counter)
  const dispatch = useDispatch()
  const onPress = () => {
    dispatch(increaseCounterDelete())
  };
  
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
      <TouchableOpacity onPress={onPress} style={styles.button}> 
        <View style={styles.colorCodeBox}>
          <Text style={styles.text}>Забыть недавные лайки❤️</Text>
          <Text style={[styles.mainText, {textTransform: 'uppercase'}]}>{count}</Text>
        </View>
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
  colorCodeBox: {
    backgroundColor: 'orange',
    padding: 50,
    marginVertical: 150,
    marginHorizontal: 20,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    text: 'black',
  },
  text: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
  }, 
  mainText: {
    fontSize: 40,
    color: 'black',
    textAlign: 'center',
  },
});

export default Lab4;