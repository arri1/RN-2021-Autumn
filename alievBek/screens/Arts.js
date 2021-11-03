import React, {useState, useEffect} from 'react';
import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';
import img4 from '../img/4.jpg';
import img5 from '../img/5.jpg';
import {StyleSheet, Text, View, Button, Image} from 'react-native';

const Arts = ({navigation}) => {
  const [count, setCount] = useState(1);
  const [image, setImg] = useState(img1);
  const [name, setName] = useState('Наруто');
  useEffect(() => {
    if (count === 2) {
      setImg(img2);
      setName('Атака титанов');
    }
    if (count === 3) {
      setImg(img3);
      setName('Волейбол');
    }
    if (count === 4) {
      setImg(img4);
      setName('Клинок рассекающий демонов');
    }
    if (count === 5) {
      setImg(img5);
      setName('Геройская академия');
    }
    if (count === 6) {
      setImg(img1);
      setName('Наруто');
      setCount(1);
    }
  });
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={image} />
      <Text style={styles.text}>Аниме: {name}</Text>
      <Button
        title="Next"
        color="maroon"
        onPress={() => {
          setCount(count + 1);
        }}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    margin: 10,
  },
  img: {
    marginTop: 5,
    borderRadius: 20,
    width: 350,
    height: 450,
  },
});

export default Arts;
