import React from 'react';
import {
  View, ScrollView, Text, TouchableOpacity, 
} from 'react-native';
import {
  useQuery,
  useMutation,
} from '@apollo/client';

import { auth } from '../../store/tasks';
import styles from '../../styles/styles';
import Loading from './loading';

import { getUser } from '../../gql/queries';
import { DELPOST } from '../../gql/mutations';

const User = ({ route, navigation }) => {
  const { login } = route.params;
  const { data, loading } = useQuery(getUser, {
    variables: { log: login },
    pollInterval: 500,
  });
  React.useEffect(() => {
    navigation.setOptions({
      title: login,
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('CreatePost', { id: data.findOneUser.id })}
          style={{
            marginRight: 5,
            height: 35,
            width: 100,
            borderRadius: 5,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={[styles.buttonText, {
            color: 'black', fontSize: 16, margin: 0, padding: 0,
          }]}
          >
            CreatePost
          </Text>
        </TouchableOpacity>
      ),
    }, navigation);
  });

  const [delpost] = useMutation(DELPOST, {
    onCompleted: () => {
      console.log('Пост успешно удален');
    },
    onError: () => {
      console.log('Что то пошло не так');
    },
  });
  const submit = (postid) => {
    delpost({
      variables: { where: { id: postid } },
    });
  };

  if (loading) return Loading;

  return (
    <View style={styles.container}>
      <View style={[styles.boxSize, { height: 120, backgroundColor: '#454545' }]}>
        <Text style={styles.boxTextStyle}>
          UserData :
        </Text>
        <Text style={styles.boxTextStyle}>
          id :
          {data.findOneUser.id}
        </Text>
        <Text style={styles.boxTextStyle}>
          login :
          {data.findOneUser.login}
        </Text>
        <Text style={styles.boxTextStyle}>
          name :
          {data.findOneUser.name === null ? 'empty' : data.findOneUser.name }
        </Text>
        <Text style={styles.boxTextStyle}>
          group :
          {data.findOneUser.group === null ? 'empty' : data.findOneUser.group }
        </Text>
      </View>
      <Text style={[styles.boxTextStyle, { fontSize: 30 }]}>Posts</Text>
      <ScrollView style={styles.scroll}>
        {data.findOneUser.posts.length > 0 ? data.findOneUser.posts.map((post) => (
          <TouchableOpacity key={post.title} style={[styles.boxSize, { height: 75 }]} onPress={() => submit(post.id)}>
            <Text style={styles.boxTextStyle}>
              login :
              {login}
            </Text>
            <Text style={styles.boxTextStyle}>
              title :
              {post.title}
            </Text>
            <Text style={styles.boxTextStyle}>
              text :
              {post.text === null ? 'empty' : post.text }
            </Text>
          </TouchableOpacity>
        )) : <Text>This user nothing posted yet</Text>}
      </ScrollView>
    </View>
  );
}

export default User;
