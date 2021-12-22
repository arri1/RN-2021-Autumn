import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {POST, FIND_MANY_POST} from '../gqls/post/query';
import {CREATE_ONE_POST, DELETE_ONE_POST} from '../gqls/post/mutation';
import {USER} from '../gqls/user/query';

import {useQuery, useMutation, useApolloClient} from '@apollo/client';

const UserPage = props => {
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

  const goHome = () => {
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
        onPress={goHome}>
        <Text style={[styles.text, {opacity: 0.5}]}>Go back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>WELCOME, {userLogin}</Text>
      <View style={styles.boxArea}></View>
      <ImageBackground
        style={styles.imgBackGround}
        imageStyle={{borderRadius: 40}}
        source={require('../../android/app/src/main/assets/images/bgd2.jpg')}
      />
      <View style={styles.inputArea}>
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={createPost}>
            POST
          </Text>
        </TouchableOpacity>
        <ScrollView style={styles.postsArea}>
          {data != null ? (
            data.findManyPost.map(item => {
              return (
                <TouchableOpacity
                  key={item.id}
                  style={styles.inputField}
                  onPress={() => selectPost(item.id)}>
                  <Text style={styles.text}>{item.title}</Text>
                </TouchableOpacity>
              );
            })
          ) : (
            <Text></Text>
          )}
        </ScrollView>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#FD442E'}]}
          onPress={deletePost}>
          <Text style={styles.buttonText}>DELETE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
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
  inputArea: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    top: 140,
  },
  imgBackGround: {
    width: 393,
    top: 225,
    height: 405,
    position: 'absolute',
  },
  buttonText: {
    fontFamily: 'PTSansNarrow-Bold',
    fontSize: 24,
    letterSpacing: -1,
    color: '#FFF',
    textAlign: 'center',
  },
  text: {
    width: 250,
    fontFamily: 'Montserrat',
    fontSize: 18,
    color: '#121213',
    textAlignVertical: 'center',
  },
  title: {
    fontFamily: 'PTSansNarrow-Bold',
    fontSize: 24,
    letterSpacing: -1,
    color: '#121213',
    textAlign: 'right',
    marginRight: 29,
    marginTop: 14,
  },
  inputField: {
    width: 335,
    minHeight: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 42,
    borderRadius: 5,
    backgroundColor: '#FFFFFC',
    marginTop: 14,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowColor: 'black',
    shadowRadius: 4.65,
    elevation: 3,
  },
  button: {
    width: 101,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#AAC284',
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserPage;
