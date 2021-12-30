import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {applyItem, changeTitle} from '../posts/posData';

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
  },
  item: {
    padding: '2%',
    backgroundColor: '#FFBA73',
    borderRadius: 10,
    margin: 10,
    fontFamily: 'Gotham pro',
  },
  text: {
    fontSize: 12,
  },
});

export default Lab4;
