import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import axios from 'axios';

const Lab2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://picsum.photos/v2/list?limit=10')
      .then(({data: newData}) => {
        setData(newData);
      })
      .catch(() => {});
  }, []);

  const content = () => {
    return (
      <ScrollView>
        {data.map(item => {
          return (
            <View key={item.id} style={styles.item}>
              <Image
                style={styles.img}
                source={{
                  uri: item.download_url,
                }}
              />

              <Text style={styles.title}>{item.author}</Text>
            </View>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        {data ? content() : <ActivityIndicator color={'red'} />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#A9C6D9',
  },

  item: {
    padding: 10,
    backgroundColor: '#ffffff',
    marginBottom: 15,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
  },

  container: {
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 16,
    marginTop: 10,
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    borderColor: 'black',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },

  img: {
    height: 250,
    width: 300,
    marginTop: 15,
  },
});

export default Lab2;
