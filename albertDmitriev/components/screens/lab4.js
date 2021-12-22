import React from 'react';
import {ScrollView, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const Lab4 = () => {
  const data = useSelector(state => state.posts.value);
  const favsPosts = data?.filter(item => item.fav);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Список избранных статей</Text>
      {favsPosts?.map(post => {
        return (
          <TouchableOpacity style={styles.item} key={post.id}>
            <Text style={styles.itemText}>{post.title}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    textAlign: 'center',
    color: 'black',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
  },
  item: {
    marginHorizontal: 20,
    marginBottom: 30,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#B3B3B3',
  },
  itemText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
});

export default Lab4;
