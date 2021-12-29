import React from 'react';
import { TouchableOpacity, View, Text, ActivityIndicator, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Zagolovok from '../routers/Zagolovok';
import { undone } from '../store/task';
import picture from '../images/Lab2.png';

const Lab2 = () => {
  
  const data = useSelector(state => state.data.value)
  const dispatch = useDispatch();

  const content = () => {
    return (
        <View style={styles.main}>
          <ImageBackground source={picture} resizeMode='cover' style={styles.image}>
            <View style={{paddingTop: 18}}>
              <Zagolovok/>
            </View>
            <View style={styles.list}></View>
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
              {data.map(item => {
                if (item.id <= 15){
                  if (item.completed === false)
                    return (
                      <TouchableOpacity key={item.id} style={[styles.item, {backgroundColor: '#0000A1'}]} onPress={() => dispatch(undone(item.id))}> 
                        <Text style={styles.text}>{item.title}</Text>
                      </TouchableOpacity>
                    )
                  if (item.completed === true)
                    return (
                      <TouchableOpacity key={item.id} style={[styles.item, {backgroundColor: '#39BAE8'}]} onPress={() => dispatch(undone(item.id))}>
                        <Text style={styles.text}>{item.title}</Text>
                      </TouchableOpacity>
                    )       
                }   
              })}
            </ScrollView>
          </ImageBackground>
        </View>
    )};

  return (
    <View style={styles.container}>
      {data ? content() : <ActivityIndicator color={'orange'} />}
    </View>
  );
};

export default Lab2;


const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'red',
    // alignItems: 'center',
    width: '100%',
  },
  item: {
    marginTop: 12,
    marginBottom: 12,
    borderColor: 'black',
    height: 60,
    width: 256,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontFamily: 'Sofia-Regular',
    alignSelf: 'center'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
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
});