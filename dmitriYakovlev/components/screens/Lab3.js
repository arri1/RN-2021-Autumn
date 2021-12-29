import React, {useMemo, useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';

import picture from '../images/Lab3.png';

const Lab3 = () => {
  const [num, setNum] = useState(0)

  const func = () => {
    let i = 0;
    while (i < 100000000) {
        i++;
    }
    return true;
  }

  const memoFunc = useMemo(func,[]);
  const onPressHandler = () => {
    const bool = func()
    setNum(num+1)
  };

  const onPressHandlerSecond = () => {
    const bool = memoFunc;
    setNum(num+1)  
  };

  return (
    <View style={styles.main}>
      <ImageBackground source={picture} style={styles.image}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>
              THIRD WORK
            </Text>
          </View>
          <View style={styles.list1}/>
          <View style={styles.cont1}>
          <Text style={styles.title1}>  
            WITHOUT USING USEMEMO
          </Text>
          </View>
          <Text style={styles.sum}>
            {num}
          </Text>
          <TouchableOpacity onPress={(onPressHandler)} style={[styles.button, {marginBottom:-19}]}>
            <Text style={styles.text}>
              PRESS
            </Text>
          </TouchableOpacity>
          <View style={styles.list2}/>
            <View style={styles.cont2}>
              <Text style={styles.title2}>  
                USING USEMEMO
              </Text>
            </View>
            <Text style={styles.sum}>
              {num}
            </Text>
            <TouchableOpacity onPress={(onPressHandlerSecond)} style={styles.button}>
              <Text style={styles.text}>
                PRESS
              </Text>
            </TouchableOpacity>
          </View>
      </ImageBackground>
    </View>
  );
}

export default Lab3;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
    backgroundColor: 'white'
  },
  container: {
    alignItems: 'center',
    paddingTop: 18,
  },
  header: {
    height: 60, 
    width:  360,
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'Sofia-Regular',
    fontSize: 36,
  },
  cont1: {
    height: 62,
    width: 265,
    marginTop: 30,
  },
  cont2: {
    height: 42,
    width: 265,
    marginTop: 115,
  },
  sum: {
    fontSize: 36,
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    fontFamily: 'Sofia-Regular'
  },
  title1: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Sofia-Regular',
  },
  title2: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Sofia-Regular',
  },
  button: {
    height: 40,
    width: 135,
    alignItems: 'center',
    marginLeft: 100,
    marginRight: 100,
    borderRadius: 20,
    borderColor: 'black',
    backgroundColor: '#0000A1',
    opacity: .4,
  },
  buttonClone: {
    height: 40,
    width: 135,
    alignItems: 'center',
    backgroundColor: '#0000A1',
    borderRadius: 20,
    marginLeft: 100,
    marginRight: 100,
    opacity: 0.4
  },
  text: {
    fontSize: 24,
    fontFamily: 'Sofia-Regular',
    color: 'white',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  list1: {
    height: 156,
    width: 250,
    backgroundColor: '#B9EDF8',
    opacity: .4,
    borderColor: 'black',
    borderWidth: .5,
    alignSelf: 'center',
    borderRadius: 30,
    marginBottom: 95,
    marginTop: 175,
    position: 'absolute',
  },
  list2: {
    height: 156,
    width: 250,
    backgroundColor: '#B9EDF8',
    opacity: .4,
    borderColor: 'black',
    borderWidth: .5,
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 450,
    position: 'absolute',
  },
})
