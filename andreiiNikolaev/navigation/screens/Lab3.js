import React, {useState, useMemo} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';


const Lab3 = () => {
  const [count, setCount] = useState(0);


  const rendering = () => {
    let i = 0;
    while (i < 99999999) {
      i++;
    }
  };

  const memoRendering = useMemo(rendering, []);

  const increment = () => {
    const render = rendering();
    setCount(count + 1);
  };
 
  const decrement = () => {
    const render = rendering();
    setCount(count - 1);
  }; 
  
  const memoIncrement = () => {
    const render = memoRendering;
    setCount(count + 1);
  };
 
  const memoDecrement = () => {
    const render = memoRendering;
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
       <Text style={styles.title}> without useMemo </Text>
      <View style={styles.counter}>
        <TouchableOpacity onPress={decrement}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{count}</Text>
        <TouchableOpacity onPress={increment}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}> with useMemo </Text>
      <View style={styles.counter}>      
        <TouchableOpacity onPress={memoDecrement}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{count}</Text>
        <TouchableOpacity onPress={memoIncrement}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#FCEBB6',
    height: '100%',
    justifyContent: 'center', 
  },
  title: {      
    justifyContent: 'center',
    fontSize: 40,
    textAlign: 'center',    
  },
  text: {
    alignItems: 'center',   
    fontSize: 50,
  },   
  counter: {       
    borderBottomColor:'#5E412F',
    borderWidth: 1,
    marginTop: '5%',
    marginHorizontal: '2%',
    marginBottom: '10%',
    backgroundColor: '#78C0A8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
  }, 
});

export default Lab3;