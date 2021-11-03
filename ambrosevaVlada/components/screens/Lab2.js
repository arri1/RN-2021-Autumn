import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  View,
  StyleSheet,
} from 'react-native';

const Lab2 = () => {
  const [notCmplCount, setNotCmplCount] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({});

  useEffect(() => {
    setNotCmplCount(tasks.filter(item => item.status == 0).length);
  }, [tasks]);

  const inputTask = text => {
    setNewTask({id: tasks.length + 1, text: text, status: 0});
  };

  const changeStatus = id => {
    const n = tasks.map(item =>
      item.id == id ? {...item, status: Math.abs(item.status - 1)} : item,
    );
    setTasks(n);
  };

  const deleteTask = id => {
    const t = tasks.filter(item => item.id != id);
    setTasks(t);
  };

  const getCompletedSign = status => {
    if (status == 1) {
      return '#21434F';
    } else {
      return '#E6D899';
    }
  };

  const createNewTask = () => {
    Keyboard.dismiss();
    if (newTask.text.length > 0) {
      const t = [...tasks];
      t.push(newTask);
      setTasks(t);
      setNewTask({id: 0, text: '', status: 0});
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textArea}>
        <Text style={styles.title}>TODAY'S TASKS</Text>
        <Text style={[styles.text, {textAlign: 'right'}]}>
          {notCmplCount} not completed
        </Text>
      </View>
      <View style={styles.tasksContainer}>
        <ImageBackground
          style={styles.imgBackGround}
          imageStyle={{borderRadius: 40}}
          source={require('../../android/app/src/main/assets/images/bgd.jpg')}>
          <View style={[styles.taskField, {left: 29, marginTop: 77}]}>
            <TextInput
              style={[styles.inputTask]}
              placeholder={'Add task...'}
              onChangeText={text => inputTask(text)}
              value={newTask.text}></TextInput>
            <TouchableOpacity
              style={styles.newTaskButton}
              onPress={createNewTask}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.tasksArea}>
            {tasks.map(item => {
              return (
                <View key={item.id} style={styles.taskField}>
                  <TouchableOpacity
                    style={[
                      styles.statusField,
                      {backgroundColor: getCompletedSign(item.status)},
                    ]}
                    onPress={() => changeStatus(item.id)}></TouchableOpacity>
                  <Text style={[styles.text, {width: 250}]}>{item.text}</Text>
                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => deleteTask(item.id)}></TouchableOpacity>
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
    marginTop: 9,
    height: 628,
    borderRadius: 49,
    backgroundColor: '#21434F',
  },
  textArea: {
    marginLeft: 29,
    marginTop: 55,
    width: 335,
    height: 73,
  },
  tasksArea: {
    paddingLeft: 29,
    maxHeight: 350,
    minHeight: 350,
  },
  img: {
    borderRadius: 40,
  },
  imgBackGround: {
    height: 493, 
    width: 393, 
    marginTop: 0
  },
  title: {
    fontFamily: 'PTSansNarrow-Bold',
    fontSize: 36,
    letterSpacing: -1,
    color: '#121213',
    textAlign: 'right',
  },
  text: {
    height: 25,
    fontFamily: 'Montserrat',
    fontSize: 18,
    color: '#121213',
    textAlignVertical: 'center',
  },
  inputTask: {
    width: 284,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#FFFFFC',
    fontFamily: 'Montserrat',
    fontSize: 18,
    color: '#121213',
    padding: 11,
  },
  taskField: {
    width: 335,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#FFFFFC',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 14,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowColor: 'black',
    shadowRadius: 4.65,
    elevation: 3,
  },
  statusField: {
    width: 17,
    height: 17,
    borderRadius: 3,
    backgroundColor: '#E6D899',
    marginLeft: 11,
    marginRight: 11,
  },
  deleteButton: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    backgroundColor: '#FD442E',
    marginLeft: 11,
  },
  newTaskButton: {
    width: 40,
    height: 40,
    marginRight: 11,
    borderRadius: 20,
    backgroundColor: '#E6D899',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Montserrat',
    color: '#FFFFFC',
    fontSize: 24,
    fontWeight: 'bold',
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
