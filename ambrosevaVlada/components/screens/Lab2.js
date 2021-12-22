import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

const Lab2 = () => {
  const dispatch = useDispatch();

  const userId = useSelector(state => state.toDo.userId);
  const tasksId = useSelector(state => state.toDo.tasksId);

  const [refresh, setRefresh] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
    axios.get(apiUrl).then(resp => {
      setTasks(resp.data);
    });
  }, []);

  const getCompletedSign = completed => {
    return completed ? '#21434F' : '#E6D899';
  };

  const getSelectedSign = id => {
    return tasksId.includes(id) ? '#FD442E' : '#E6D899';
  };

  const selectTask = id => {
    if (!tasksId.includes(id)) {
      dispatch({type: 'SELECT_TASK', taskId: id});
    } else {
      dispatch({type: 'DESELECT_TASK', taskId: id});
    }
    setRefresh(!refresh);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textArea}>
        <Text style={styles.title}>TODAY'S TASKS of USER {userId}</Text>
      </View>
      <View style={styles.tasksContainer}>
        <ImageBackground
          style={styles.imgBackGround}
          imageStyle={{borderRadius: 40}}
          source={require('../../android/app/src/main/assets/images/bgd.jpg')}>
          <ScrollView style={styles.tasksArea}>
            {tasks.map(item => {
              if (item.userId == userId)
                return (
                  <View key={item.id}>
                    <View style={styles.taskField}>
                      <View
                        style={[
                          styles.completedField,
                          {backgroundColor: getCompletedSign(item.completed)},
                        ]}></View>
                      <Text style={styles.text}>{item.title}</Text>
                      <TouchableOpacity
                        style={[
                          styles.selectCircle,
                          {backgroundColor: getSelectedSign(item.id)},
                        ]}
                        onPress={() => selectTask(item.id)}></TouchableOpacity>
                    </View>
                  </View>
                );
            })}
          </ScrollView>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFC',
    flex: 1,
  },
  tasksContainer: {
    width: '100%',
    height: 628,
    borderRadius: 49,
    backgroundColor: '#21434F',
  },
  textArea: {
    height: 137,
    paddingLeft: 29,
    paddingRight: 29,
    paddingTop: 55,
  },
  tasksArea: {
    paddingLeft: 29,
    maxHeight: 493,
    minHeight: 493,
  },
  imgBackGround: {
    height: 493,
    width: 393,
    marginTop: 0,
  },
  title: {
    fontFamily: 'PTSansNarrow-Bold',
    fontSize: 24,
    letterSpacing: -1,
    color: '#121213',
    textAlign: 'right',
  },
  text: {
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
    flexDirection: 'row',
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
  completedField: {
    width: 17,
    height: 17,
    borderRadius: 3,
    backgroundColor: '#E6D899',
    marginLeft: 11,
    marginRight: 11,
  },
  selectCircle: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    marginLeft: 11,
  },
  bottom: {
    width: '100%',
    position: 'absolute',
    margin: 0,
    backgroundColor: '#f1f1f1',
    bottom: 137,
    padding: 11,
    alignItems: 'center',
  },
});

export default Lab2;
