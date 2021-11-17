import React, {useState, useMemo} from 'react';
import {
  Text, 
  View, 
  StyleSheet,
  Animated,
  TouchableOpacity
} from 'react-native';

const QuickObject = () => {
  const anim = useState(new Animated.ValueXY({x: 0, y: 0}))[0];
  const [color, setColor] = useState('#AAC284');
  const [num, setNum] = useState(0);


  const expFunc = () => {
    for (let i = 0; i < 80000000; i++) ;
    return num;
  }

  const funcNum = useMemo(() => expFunc(), [num]);

  const doAnim = () => {
    Animated.sequence([
      Animated.timing(anim,
      {
        toValue: {
          x: -100,
          y: 0
        },
        duration: 1500,
        useNativeDriver: false
      }
      ),
      Animated.timing(anim,
      {
        toValue: {
          x: 100,
          y: 0
        },
        duration: 1000,
        useNativeDriver: false
      }
      ),
      Animated.timing(anim,
      {
        toValue: {
          x: 0,
          y: 0
        },
        duration: 1500,
        useNativeDriver: false
      }
      )
    ]).start();
  }

  const showDiff = () => {
    (color === '#AAC284') ? setColor('#FD442E') : setColor('#AAC284');
    doAnim();
  }

  return (
    <View>
      <TouchableOpacity onPress={() => setNum(num + 1)}>
        <Animated.View style={[anim.getLayout(), styles.circle]}>
          <Text style={styles.text}>{funcNum}</Text>
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, {backgroundColor: color}]} onPress={showDiff}>
        <Text style={styles.text}>QUICK</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({

  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E6D899',
    marginTop: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#AAC284',
    marginTop: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'PTSansNarrow-Bold',
    color: '#FFFFFC',
    fontSize: 24,
    textAlign: 'center'
  },
});

export default QuickObject;