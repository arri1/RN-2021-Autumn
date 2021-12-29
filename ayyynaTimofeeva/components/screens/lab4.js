import React from 'react';
import { View, ScrollView, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { applyItem, changeTitle } from '../../store/postData';

const Lab4 = () => {
  const data = useSelector(state => state.posts.value);
  const selectedItems = data?.filter(item => item.checked);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.main}>
      <View>
        <ScrollView>
          {selectedItems?.map(item => {
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => {
                  dispatch(applyItem(item.id));
                }}>
                <View style={styles.item} key={item.id}>
                  <TextInput
                    multiline={true}
                    style={[styles.text]}
                    onChangeText={text => {
                      dispatch(changeTitle([item.id, item.title, item.body]));
                    }}>
                    {item.title} {'\n'}
                    {item.body}
                  </TextInput>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#AC99C0'
  },
  item: {
    padding: 20,
    marginBottom: 5,
    backgroundColor: '#9D88B4',
    borderRadius: 5,
  },
  text: {
    color: 'white'
  }
});

export default Lab4;