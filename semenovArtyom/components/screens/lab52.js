import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {POST, FIND_MANY_POST} from '../gqls/post/query';
import {CREATE_ONE_POST, DELETE_ONE_POST} from '../gqls/post/mutations';
import {USER} from '../gqls/user/query';

import {useQuery, useMutation, useApolloClient} from '@apollo/client';

const Lab52 = props => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [postId, setPostId] = useState('');

  const apollo = useApolloClient();

  const [userId, setUserId] = useState('');
  const [userLogin, setUserLogin] = useState('');

  const {user} = useQuery(USER, {
    onCompleted: ({user}) => {
      setUserLogin(user.login);
      setUserId(user.id);
    },
  });

  const {data} = useQuery(FIND_MANY_POST, {
    variables: {
      where: {
        userId: {
          equals: userId,
        },
      },
    },
    pollInterval: 500,
  });

  const [post] = useMutation(CREATE_ONE_POST, {
    onCompleted: ({createOnePost}) => {
      setTitle('');
      setText('');
    },
  });

  const [delPost] = useMutation(DELETE_ONE_POST, {
    onCompleted: ({deleteOnePost}) => {},
  });

  const deletePost = () => {
    delPost({
      variables: {
        where: {
          id: postId,
        },
      },
    });
  };

  const back = () => {
    props.navigation.navigate('Home');
  };

  const createPost = () => {
    if (title != '' && text != '') {
      post({
        variables: {
          data: {
            title,
            text,
            user: {connect: {login: userLogin}},
          },
        },
      });
    }
  };
  const selectPost = id => {
    setPostId(id);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{marginTop: 14, marginLeft: 29}}
        onPress={back}>
        <Text style={[styles.text, {opacity: 0.5 , color: '#FFFFFF'}]}>Back</Text>
      </TouchableOpacity>
      <Text style={[styles.title, {marginBottom: 10}]}>{userLogin}</Text>
        <View style={styles.inputField}>
          <TextInput
            style={styles.text}
            placeholder="Post title"
            onChangeText={text => setTitle(text)}>
            {title}
          </TextInput>
        </View>
        <View style={styles.inputField}>
          <TextInput
            style={styles.text}
            placeholder="Text"
            onChangeText={text => setText(text)}>
            {text}
          </TextInput>
        </View>
        <ScrollView style={styles.postsArea}>
          {data != null ? (
            data.findManyPost.map(item => {
              return (
                <TouchableOpacity
                  key={item.id}
                  style={styles.post}
                  onPress={() => selectPost(item.id)}>
                  <Text style={styles.text}>{item.title}</Text>
                </TouchableOpacity>
              );
            })
          ) : (
            <Text></Text>
          )}
        </ScrollView>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={createPost}>
            Post
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={deletePost}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
  },  
  boxArea: {
    marginTop: 225,
    height: '100%',
    width: 393,
    backgroundColor: '#21434F',
    borderRadius: 40,
  },
  postsArea: {
    minHeight: 196,
    maxHeight: 196,
  },
  text: {
    width: 250,
    fontFamily: 'Arial',
    fontSize: 18,
    color: '#000000',
    textAlignVertical: 'center',
  },
  title: {
    fontFamily: 'Arial',
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 40,
    marginTop: 14,
  },
  inputField: {
    alignSelf: 'center',
    width: 335,
    minHeight: 50,
    alignItems: 'flex-start',
    paddingLeft: 20,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    marginBottom: 10
  },
  button: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#BB86FC',
    marginTop: 10,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 19,
    color: '#000000'
  },
  post: {
    alignSelf: 'center',
    width: 335,
    minHeight: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 42,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    marginTop: 14,
  },
});

export default Lab52;