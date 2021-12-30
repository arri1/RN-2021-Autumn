import React, {useState} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import {useMutation, useQuery} from '@apollo/client';
import {GET_USER} from '../grphql/qrs';
import {CREATE_ONE_POST} from '../gqls/post/mutations';

const AddPost = ({navigation}) => {
  const [title, setTitle] = useState(null);
  const [text, setText] = useState(null);
  const [userId, setUserId] = useState(null);

  const {loading: userLoading} = useQuery(GET_USER, {
    onCompleted: ({user}) => {
      setUserId(user.id);
    },
    onError: () => {},
  });

  const [save] = useMutation(CREATE_ONE_POST, {
    onCompleted: () => {
      showMessage({
        message: 'Добавлено',
        type: 'info',
      });
      navigation.goBack();
    },
    onError: () => {
      showMessage({
        message: 'что то пошло не так',
        type: 'danger',
      });
    },
  });

  const onSave = () => {
    save({
      variables: {
        data: {
          title,
          text,
          user: {connect: {id: userId}},
        },
      },
    });
  };

  return (
    <View style={styles.containerAddPost}>
      <View
        style={{
          width: '90%',
          marginBottom: 30,
        }}>
        <TextInput
          onChangeText={text => setTitle(text)}
          value={title}
          placeholder={'Название поста'}
          style={styles.inputAddPost}
        />
        <Text
          style={{
            fontSize: 18,
            color: colors.black,
            marginTop: 20,
          }}>
          Что у вас нового?
        </Text>
        <TextInput
          onChangeText={text => setText(text)}
          value={text}
          placeholder={'Что у вас нового?'}
          style={styles.inputAddPost}
          multiline={true}
        />
      </View>
      <View
        style={{
          marginTop: 24,
          alignItems: 'center',
        }}>
        <Button
          color={colors.sweetPink}
          mode="contained"
          style={styles.borderStyle}
          labelStyle={{
            color: colors.white,
          }}
          onPress={onSave}>
          Сохранить
        </Button>
      </View>
    </View>
  );
};
export default AddPost;
