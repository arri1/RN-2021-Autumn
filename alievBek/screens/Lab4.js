import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';

const styles = StyleSheet.create({
  scroll: {
    margin: 15,
  },
  item: {
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
  head: {
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    borderColor: '#151E1F',
    borderWidth: 2,
    backgroundColor: 'black',
  },
  text: {
    margin: 15,
    color: 'white',
    fontSize: 20,
  },
  imgs: {
    height: 150,
    width: 340,
    margin: 10,
    borderColor: '#151E1F',
    borderWidth: 0.8,
    borderRadius: 6,
  },
});

const Lab4 = ({navigation}) => {
  const data = useSelector(state => state.data.value);
  const selectedItems = data?.filter(item => item.checked);
  return (
    <View>
      <View style={styles.head}>
        <Text style={styles.text}>Прочитанные новости</Text>
      </View>
      <TouchableOpacity
      >
        <ScrollView style={styles.scroll}>
          {selectedItems?.map(item => {
            return (
              <View style={styles.item} key={item.id}>
                <Text key={item.id}>{item.title}</Text>
                <Image
                  style={styles.imgs}
                  source={{
                    uri: item.picture,
                  }}
                />
              </View>
            );
          })}
        </ScrollView>
      </TouchableOpacity>
    </View>
  );
};

export default Lab4;
