import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {applyItem, changeTitle} from '../../store/tasks';

const Lab4 = () => {
  const data = useSelector(state => state.data.value);
  const selectedItems = data?.filter(item => item.checked);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
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
                    style={[styles.text]}
                    onChangeText={text => {
                      dispatch(changeTitle([item.id, text, item.body]));
                    }}>
                    {item.title}
                  </TextInput>
                  <TextInput
                    multiline={true}
                    style={[styles.text]}
                    onChangeText={text => {
                      dispatch(changeTitle([item.id, item.title, text]));
                    }}>
                    {item.body}
                  </TextInput>
                  <Text style={styles.email}>{item.email}</Text>
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
    backgroundColor: '#CCF6CF',
  },
  item: {
    padding: 15,
    borderRadius: 20,
    marginBottom: 15,
    borderColor: '#78C25D',
    borderWidth: 2,
    backgroundColor: '#C27E5D',
  },
  container: {
    flex: 1,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    padding: 15,
    borderRadius: 20,
    backgroundColor: '#8F401A',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'white',
  },
  email: {
    textAlign: 'right',
    color: 'white',
  },
});
export default Lab4;
