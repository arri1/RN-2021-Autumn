import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {useDispatch, useSelector} from 'react-redux';
import {applyItem, changeTitle} from '../../store/tasks';

const inputText = (id, title, checked) => {
  const dispatch = useDispatch();
  return (
    <View>
      <TextInput
        style={[styles.title, {backgroundColor: '#F9A06D'}]}
        onChangeText={title => {
          dispatch(changeTitle([id, title]));
        }}>
        {title}
      </TextInput>
      <TouchableOpacity
        onPress={() => {
          dispatch(applyItem(id));
        }}>
        <Text
          style={[
            styles.title,
            checked ? {backgroundColor: '#95D133'} : undefined,
          ]}>
          Применить
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Lab4 = () => {
  const data = useSelector(state => state.data.value);

  const selectedItems = data?.filter(item => item.checked);

  return (
    <View>
      <ScrollView style={styles.scroll}>
        {selectedItems?.map(item => {
          return (
            <View key={item.id} style={styles.shadowsDiv}>
              <Shadow
                distance={2}
                startColor={'#00000040'}
                finalColor={'#00000000'}
                offset={[3, 3]}>
                <View style={styles.item} key={item.id}>
                  <Image
                    style={styles.img}
                    source={{
                      uri: item.picture,
                    }}
                  />
                  {inputText(item.id, item.title, item.checked)}
                </View>
              </Shadow>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: {
    margin: 15,
  },
  img: {
    height: 260,
    width: 310,
    margin: 10,
    borderColor: '#151E1F',
    borderWidth: 0.8,
    borderRadius: 6,
  },
  title: {
    width: 310,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 5,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },

  item: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  shadowsDiv: {
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 10,
  },
});

export default Lab4;
