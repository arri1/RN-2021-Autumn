import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useSelector} from 'react-redux'

const Lab4 = () => {
  
  const color = useSelector((state) => state.background.value)
  const count = useSelector((state) => state.background.counter)
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <TouchableOpacity style={[ styles.circle, {backgroundColor: color} ]}/>
          <View style={styles.colorCodeBox}>
            <Text style = {[styles.mainText, {textTransform: 'uppercase'}]}>{count}</Text>
          </View>      
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#E1E4E7',
  },

  circle: {
    width: 300,
    height: 300,        
    borderRadius: 300,
    marginVertical: 50,
    marginHorizontal: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
 },
 
  colorCodeBox: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 70,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  mainText: {
    fontSize: 22, 
  },
});

export default Lab4;