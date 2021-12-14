import React from 'react';
import { View, ScrollView, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import picture from '../images/Lab4.png';

const Lab4 = () => {
  const data = useSelector(state => state.data.value);
  const selectedItems = data.filter(item => item.checked);
  return (
    <View style={styles.main}>
      <ImageBackground source={picture} resizeMode='cover' style={styles.image}>
        <View style={styles.head}>
          <Text style={styles.title}>FOURTH WORK</Text>
        </View>
        <View style={styles.list}></View>
        <ScrollView style={styles.scroll}>
            {selectedItems?.map(item => {
                if (item.completed === true)
                  return (
                    <TouchableOpacity style={[styles.item, {backgroundColor: '#39BAE8'}]} key={item.id}>
                      <Text key={item.id} style={styles.text}>{item.title}</Text>
                    </TouchableOpacity>
                  );
            })}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Lab4;

const styles = StyleSheet.create({
    main : {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: 'red',
      width: '100%',
    },
    scroll: {
      width: 312,
      borderColor: 'black',
      borderWidth: .5,
      alignSelf: 'center',
      marginBottom: 171,
      borderRadius: 30,
      marginTop: 96,
    },
    item: {
      marginTop: 12,
      marginBottom: 12,
      borderColor: 'black',
      height: 60,
      width: 256,
      alignSelf: 'center',
    },
    head: {
      alignItems: 'center',
      marginTop: 18
    },
    title: {
      color: 'black',
      fontSize: 36,
      fontFamily: 'Sofia-Regular'
    },
    text: {
      fontSize: 15,
      fontFamily: 'Sofia-Regular',
      alignSelf: 'center'
    },
    list: {
      height: 439,
      width: 312,
      backgroundColor: '#B9EDF8',
      opacity: .4,
      borderColor: 'black',
      borderWidth: .5,
      alignSelf: 'center',
      borderRadius: 30,
      marginBottom: 95,
      marginTop: 12,
      position: 'absolute',
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
});
  