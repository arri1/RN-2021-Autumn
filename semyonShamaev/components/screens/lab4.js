import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {increaseCounterDelete} from '../../store/tasks';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";


const Lab4 = () => {

  const count = useSelector((state) => state.background.counter)
  const dispatch = useDispatch()
  const onPress = () => {
    dispatch(increaseCounterDelete())
  };

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
      <TouchableOpacity onPress={onPress} style={styles.button}> 
          <Text style={styles.text}>Сбросить счёт</Text>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#E1E4E7',
  }, 
  button: {
    width: 260,
    height: 260,
    borderRadius: 20,
    backgroundColor: '#C4C4C4',
    marginTop: 160,
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
    marginTop: 105,
    fontSize: 25,
    color: 'black',
  }, 
});

export default Lab4;