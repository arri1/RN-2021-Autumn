import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useSelector} from 'react-redux';

const Lab2 = ({navigation}) => {
  const data = useSelector(state => state.posts.value);

  return (
    <ScrollView style={styles.main}>
      {data ? (
        data.map(item => {
          return (
            <TouchableOpacity
              key={item.id}
              style={styles.item}
              onPress={() => navigation.navigate('Article', item)}>
              <View style={styles.imgContainer}>
                <Image style={styles.img} source={{uri: item.imgurl}} />
              </View>
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
          );
        })
      ) : (
        <ActivityIndicator color={'red'} />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    marginHorizontal: 20,
    marginBottom: 30,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#B3B3B3',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  imgContainer: {
    alignItems: 'center',
  },
  img: {
    width: 300,
    height: 150,
  },
});

export default Lab2;
