import React, {useState, useEffect} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

const Lab4 = () => {
  const dispatch = useDispatch();

  const userId = useSelector(state => state.toDo.userId);
  const backColor = useSelector(state => state.backColor.color);
  const tasksId = useSelector(state => state.toDo.tasksId);

  const [tasks, setTasks] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [id, setId] = useState(1);

  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
    axios.get(apiUrl).then(resp => {
      setTasks(resp.data);
    });
  }, []);

  const onChangeText = text => {
    setId(parseInt(text));
  };

  const switchUser = () => {
    if (id != NaN) {
      dispatch({type: 'SWITCH_USER', id: id});
    }
    setRefresh(!refresh);
  };

  const drop = () => {
    dispatch({type: 'DROP'});
  };

  return (
    <View style={styles.container}>
      <View style={[styles.backArea, {backgroundColor: backColor}]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.text}>USER</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => onChangeText(text)}></TextInput>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => switchUser()}>
          <Text style={styles.text}>SWITCH</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={drop}>
          <Text style={styles.text}>DROP</Text>
        </TouchableOpacity>
        <ScrollView style={styles.tasksArea}>
          {tasks.map(item => {
            if (tasksId.includes(item.id) && item.userId == userId)
              return (
                <View key={item.id}>
                  <View style={styles.taskField}>
                    <Text style={styles.taskText}>{item.title}</Text>
                  </View>
                </View>
              );
          })}
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFC',
    flex: 1,
    alignItems: 'center',
  },
  input: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#FFFFFC',
    marginLeft: 14,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowColor: 'black',
    shadowRadius: 4.65,
    elevation: 3,
    fontFamily: 'Montserrat',
    color: '#121213',
    fontSize: 18,
    textAlign: 'center',
  },
  backArea: {
    width: '100%',
    height: 577,
    borderRadius: 49,
    backgroundColor: '#AAC284',
    marginTop: 137,
    paddingTop: 29,
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#21434F',
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'PTSansNarrow-Bold',
    color: '#FFFFFC',
    fontSize: 24,
    textAlign: 'center',
  },
  tasksArea: {
    marginTop: 14,
    maxHeight: 245,
    minHeight: 245,
  },
  taskText: {
    width: 250,
    fontFamily: 'Montserrat',
    fontSize: 18,
    color: '#121213',
    textAlignVertical: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  taskField: {
    width: 335,
    minHeight: 56,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#FFFFFC',
    marginBottom: 14,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowColor: 'black',
    shadowRadius: 4.65,
    elevation: 3,
  },
});

export default Lab4;
