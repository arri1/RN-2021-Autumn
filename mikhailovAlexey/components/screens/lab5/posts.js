import React from 'react';
import {
  View, ScrollView, Text, TouchableOpacity, TextInput,
} from 'react-native';
import {
  useQuery,
} from '@apollo/client';

import styles from '../../styles/styles';
import Loading from './loading';
import { getPosts } from '../../gql/queries';

const Posts = ({ navigation }) => {
  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            onChangeText={(text) => setTxt(text)}
            style={{
              backgroundColor: 'white',
              height: 35,
              width: 150,
              borderRadius: 5,
              fontSize: 20,
              fontFamily: 'Montserrat',
              paddingTop: 0,
              paddingBottom: 0,
            }}
          />
          <TouchableOpacity
            onPress={search}
            style={{
              marginLeft: 10,
              height: 35,
              width: 35,
              borderRadius: 5,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={[styles.buttonText, {
              color: 'black',
              fontSize: 24,
              margin: 0,
              padding: 0,
            }]}
            >
              O
            </Text>
          </TouchableOpacity>
        </View>
      ),
    }, navigation);
  });
  const [txt, setTxt] = React.useState('');
  const [str, setStr] = React.useState('');
  const { data, loading } = useQuery(getPosts, {
    variables: { log: str },
  });

  const search = () => {
    setStr(txt);
    console.log(str);
  };

  if (loading) return Loading();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        {data.findManyPost.map((post) => (
          <TouchableOpacity
            key={post.id}
            style={[styles.boxSize, {
              height: 75,
            }]}
            onPress={() => navigation.navigate('User', {
              login: post.user.login,
            })}
          >
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.boxTextStyle, styles.boldText]}>
                userLogin :
              </Text>
              <Text style={styles.boxTextStyle}>
                {post.user.login}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.boxTextStyle, styles.boldText]}>
                title :
              </Text>
              <Text style={styles.boxTextStyle}>
                {post.title}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.boxTextStyle, styles.boldText]}>
                text :
              </Text>
              <Text style={styles.boxTextStyle}>
                {post.text === null ? 'empty' : post.text }
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View
        style={[styles.boxSize, {
          marginTop: 10,
          height: 50,
          alignItems: 'center',
        }]}
      >
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.boxTextStyle, styles.boldText]}>
            Count of posts:
          </Text>
          <Text style={styles.boxTextStyle}>
            {data.findManyPost.length}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Posts;
