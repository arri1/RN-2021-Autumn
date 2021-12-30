import React, {useState, useMemo} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useSelector, useDispatch} from 'react-redux';
import { changeColor } from "../../store/box";

const styles = StyleSheet.create({
    button: {
      height: 50,
      borderRadius: 10,
      backgroundColor: '#BB86FC',
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    scroll: {
        margin: 15,
    },
    box: {
        display: 'flex',
        height: 100,
        width: 100,
        marginTop: 145,
        backgroundColor: '#FFFFFF',
        alignSelf: 'center'
    },
    text: {
      fontSize: 70,
      color: '#FFFFFF',
      opacity: 0.6,
      marginTop: 110,
      alignSelf: 'flex-end'
    },
    main: {
      height: '100%',
      backgroundColor: '#121212'
    },
    buttonText: {
      fontSize: 19,
      color: '#000000'
    }
});

const expensiveFunction = () => {
  let i = 0;
  while (i < 60000000) {
    i++;
  }
  return 'likes';
};

const Lab3 = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const color = useSelector(state => state.boxColor.value);
  const dispatch = useDispatch();

  const onPressHandler = () => {
    const text = expensiveFunction();
    setCount(count + 1);
    setText(`${count}`);
    dispatch(changeColor());
  };
  const operation = useMemo(expensiveFunction, []);

  const onPressHandlerSecond = () => {
    const text = operation;
    setCount(count + 1);
    setText(`${count}`);
    dispatch(changeColor());
  };

  return (
    <View style={styles.main}>
      <ScrollView style={styles.scroll}>
        <TouchableOpacity style={[styles.box, 
          {backgroundColor: color}]}
        />
        <Text style={styles.text}>{text}</Text>

        <TouchableOpacity style={styles.button} 
          onPress={onPressHandler}
        ><Text style={styles.buttonText}>Slow</Text></TouchableOpacity>
        
        <TouchableOpacity style={styles.button} 
          onPress={onPressHandlerSecond}
        ><Text style={styles.buttonText}>Fast</Text></TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Lab3;