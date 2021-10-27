import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {ScrollView, Text, TextInput, TouchableOpacity, Keyboard, View, StyleSheet} from 'react-native';

const App = () => {

  const [notCmplCount, setNotCmplCount] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({});
  
  useEffect(() => {
    setNotCmplCount(tasks.filter(item => item.status == 0).length); 
  }, [tasks]);

  const inputTask = (text) => {
    setNewTask({id: tasks.length + 1, text: text, status: 0});
  };

  const changeStatus = (id) => {   
    const n = tasks.map(item => (item.id == id ? {...item, status: Math.abs(item.status - 1)} : item));
    setTasks(n);
  };

  const deleteTask = (id) => {
    const t = tasks.filter(item => item.id != id);
    setTasks(t);
  }; 

  const getCompletedSign = (status) => {
    if (status == 1) 
    return 'blue';
  }

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
        <Text style={[styles.text, {fontSize: 28, fontWeight: 'bold'}]}>
          Today's tasks
        </Text>
        <Text style={[styles.text, {fontSize: 18}]}>
          {notCmplCount} not completed
        </Text>
      </View>
      <ScrollView style={styles.tasksArea}>
        {
          tasks.map((item) => {
            return (
              <View key={item.id} style={styles.taskField}>  
                <TouchableOpacity style={[styles.statusField, {borderColor: getCompletedSign(item.status)}]} 
                onPress={() => changeStatus(item.id)}>                
                </TouchableOpacity>        
                <Text style={[styles.text, {width: 250}]}>{item.text}</Text>
                <TouchableOpacity style={styles.deleteButton} onPress={() => deleteTask(item.id)}>                 
                </TouchableOpacity>  
              </View>
            );
          }
          )
        }
        
      </ScrollView>
      
      <View style={styles.bottom}>
        <TextInput
          style={[styles.inputTask, styles.taskField]}
          placeholder={'Add task'}
          onChangeText={text => inputTask(text)}
          value={newTask.text}>
        </TextInput>
        <TouchableOpacity style={styles.newTaskButton} onPress={createNewTask}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EBEBEB',
    flex: 1
  },
  textArea: {
    padding: 20,
    height: '15%'
  },
  tasksArea: {
    paddingLeft: 20,
    maxHeight: '60%'
  },
  text: {
    fontFamily: 'Verdana',
    fontSize: 18,
    color: '#444',
  },
  inputTask: {
    fontFamily: 'Verdana',
    fontSize: 18,
    color: '#444',
    padding: 10,
  },
  taskField: {
    width: 350,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  statusField: {
    width: 25,
    height: 25,
    borderRadius: 2,
    borderWidth: 3,
    borderColor: '#444',
    marginLeft: 10,
    marginRight: 10,
  },
  deleteButton: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    borderWidth: 3,
    borderColor: '#444',
    marginLeft: 10,
    marginRight: 10,
  },
  newTaskButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
    borderColor: '#F2B33D',
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    position: 'absolute',
    backgroundColor: '#f1f1f1',
    height: '25%',
    bottom: 0,
    padding: 20,
    alignItems: 'center',
  },
});

export default App;
