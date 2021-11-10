import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Animated, 
  TouchableWithoutFeedback
} from 'react-native';


const lab1 = ()=> {
  const [animation, setAnimation] = useState(new Animated.Value(1))
  const animatedStyles= {
    opacity: animation
    }

  const handleAnimation = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 500,
      useNativeDriver:true
    }).start(() => {
    Animated.timing(animation, {
      toValue:1,
      duration: 500,
      useNativeDriver:true
    }).start()
    })}

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleAnimation}>
        <Animated.View style={{...styles.box, ...animatedStyles}} />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create(
  {
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
  box:{
    width: 100,
    height: 100,
    backgroundColor: '#5AD2F4'
    }
  });
  export default lab1;