import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
} from "react-native";

import axios from 'axios';

const Lab2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://picsum.photos/v2/list?page=2&limit=100')
      .then(({data: newData}) => {
        setData(newData);
      })
      .catch(() => {});
  }, []);


  const content = () => {
    return (
      <ScrollView style={{width: '100%'}, {marginBottom: 80}}>
        {data.map(item => {
          return (
            <View style={styles.colorBox}>
                <View key={item.id}>
                  <Image
                    style={styles.img}
                    source={{
                      uri: item.download_url,
                    }}
                  />
                  <Text style={styles.title}>{item.author}</Text>
                </View>
            </View>
          );
        })}
      </ScrollView>
    );
  };

  return (
      <SafeAreaView style={styles.main}>
        <View>{data ? content() : <ActivityIndicator color={'red'} />}</View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',   
    backgroundColor: '#E1E4E7',
  },

  colorBox: {
    backgroundColor: '#FFFFFF',
    padding: 30,
    marginVertical: 10,
    marginHorizontal: 70,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    width: 210,
    alignSelf: 'center',
    fontFamily: 'vibur-regular',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 5,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },

  img: {
    height: 160,
    width: 210,
    margin: 10,
    borderColor: '#151E1F',
    borderWidth: 0.8,
    borderRadius: 6,    
    alignSelf: 'center',
  },
});

export default Lab2;