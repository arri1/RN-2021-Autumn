import React, {useState, useMemo, useEffect} from 'react';
import img1 from '../img/6.jpg';
import img2 from '../img/7.jpg';
import img3 from '../img/8.jpg';
import {
  View,
  StyleSheet,
  Button,
  Image,
} from 'react-native';

const expensiveFunction = () => {
  let i = 0;
  while (i < 60000000) {
    i++;
  }
};
const Lab3 = ({navigation}) => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [image1, setImg1] = useState(img1);

  useEffect(() => {
    if (count === 2) {
      setImg1(img2);
    }
    if (count === 3) {
      setImg1(img3);
      setCount(1);
    }
  });

  const onPressHandler = () => {
    const text = expensiveFunction();
    setCount(count + 1);
    setText(`${count}`);
  };
  const operation = useMemo(expensiveFunction, []);

  const onPressHandlerSecond = () => {
    const text = operation;

    setCount(count + 1);
    setText(`${count}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.fixTo}>
        <Image style={styles.img} source={image1} />
      </View>
      <View style={styles.fixTo}>
        <Button
          title="Left button"
          onPress={onPressHandler}
        />
        <Button
          title="Right button"
          color="maroon"
          onPress={onPressHandlerSecond}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    borderRadius: 20,
    width: 250,
    height: 350,
    marginBottom: 30,
  },
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fixTo: {
    flexDirection: 'row',
  },
});

export default Lab3;
