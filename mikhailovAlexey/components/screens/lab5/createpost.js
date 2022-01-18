import React from 'react';
import {
  View, Text, TouchableOpacity, TextInput,
} from 'react-native';
import {
  useMutation,
} from '@apollo/client';
import styles from '../../styles/styles';

import Loading from './loading';

import { CREPOST } from '../../gql/mutations';

const CreatePost = ({ navigation, route }) => {
  const { id } = route.params;
  const [title, setTitle] = React.useState('');
  const [text, setText] = React.useState('');
  const [post] = useMutation(CREPOST, {
    onCompleted: ({ createOnePost }) => {
      navigation.goBack();
    },
    onError: ({ message }) => {
      console.log(message);
      console.log(id);
      if (message === 'Incorrect password') {
        console.log('Неверен пароль');
        return null;
      }
      console.log('Что то пошло не так');
    },
  });
  const submit = () => {
    post({
      variables: { data: { title, text, user: { connect: { id } } } },
    });
  };

  return (
    <View style={
      [styles.container, { flex: 1, justifyContent: 'center' }]
    }
    >
      <View>
        <Text style={[styles.boxTextStyle, { textAlign: 'center', fontSize: 30, marginBottom: 15 }]}>New Post</Text>
        <TextInput onChangeText={(text) => setTitle(text)} placeholder="Title" placeholderTextColor="#fff" style={[styles.textArea, { marginVertical: 5 }]} />
        <TextInput onChangeText={(text) => setText(text)} placeholder="Text" placeholderTextColor="#fff" style={[styles.textArea, { marginVertical: 5 }]} />
        <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={submit} style={[styles.button]}>
            <Text style={styles.buttonText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default CreatePost;
