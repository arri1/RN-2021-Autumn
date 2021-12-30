import React from 'react';
import {Shadow} from 'react-native-shadow-2';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from 'react-native';

import {useQuery} from '@apollo/client';
import {GET_POSTS} from '../../gqls/qwery/queries';

const Posts = ({navigation}) => {
  const {data} = useQuery(GET_POSTS);

  const content = () => {
    return (
      <LinearGradient style={styles.main} colors={['#6991F5', '#ffffff']}>
        <ScrollView>
          <View>
            {data.findManyPost.map(item => {
              return (
                <View key={item.id} style={styles.shadowsDiv}>
                  <Shadow
                    distance={2}
                    startColor={'#00000040'}
                    finalColor={'#00000000'}
                    offset={[3, 3]}>
                    <View style={styles.item}>
                      <Text style={styles.title}>{item.title}</Text>
                      <Text style={styles.text}>{item.text}</Text>
                      <Text style={styles.author}>{item.user.name}</Text>
                    </View>
                  </Shadow>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </LinearGradient>
    );
  };

  return <View>{data ? content() : <ActivityIndicator color={'red'} />}</View>;
};

const styles = StyleSheet.create({
  main: {height: '100%'},

  item: {
    width: 360,
    padding: 10,
    backgroundColor: '#ffffff',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
  },

  shadowsDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 10,
  },

  title: {
    fontSize: 18,
    marginTop: 5,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },

  text: {
    fontSize: 16,
    padding: 10,
  },

  author: {
    textAlign: 'right',
    marginTop: 5,
    fontSize: 14,
    padding: 10,
  },
});

export default Posts;
