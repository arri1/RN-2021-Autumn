import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {checkItem} from '../store/task';

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
    backgroundColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    margin: 15,
    marginBottom: 70,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  imgs: {
    height: 150,
    width: 340,
    margin: 10,
    borderColor: '#151E1F',
    borderWidth: 0.8,
    borderRadius: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 10,
  },
});

const News = ({navigation}) => {
  const data = useSelector(state => state.data.value);
  const dispatch = useDispatch();
  
  const content = () => {
    return (
      <ScrollView style={styles.main}>
        {data.map(item => {
          return (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.item,
                item.checked ? {backgroundColor: '#95A3B3'} : undefined,
              ]}
              onPress={() => {
                dispatch(checkItem(item.id));
              }}>
              <Text style={styles.title}>{item.title}</Text>
              <Image
                style={styles.imgs}
                source={{
                  uri: item.picture,
                }}
              />
              <Text style={styles.text}>{item.body}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      {data ? content() : <ActivityIndicator color={'red'} />}
    </View>
  );
};

export default News;
