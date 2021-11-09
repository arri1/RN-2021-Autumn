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

import axios from 'axios';

const Lab2 = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos?userId=1';
    axios.get(apiUrl).then((resp) => {     
      setTasks(resp.data);
    });
  }, []);

  const getCompletedSign = completed => {
    return (completed) ? '#21434F' : '#E6D899';
  };

  return (
    <View style={styles.container}>
      <View style={styles.textArea}>
        <Text style={styles.title}>TODAY'S TASKS</Text>
      </View>
      <View style={styles.tasksContainer}>
        <ImageBackground
          style={styles.imgBackGround}
          imageStyle={{borderRadius: 40}}
          source={require('../../android/app/src/main/assets/images/bgd.jpg')}>
          <ScrollView style={styles.tasksArea}>
            {tasks.map(item => {
              return (
                <View key={item.id} style={styles.taskField}>
                  <View
                    style={[
                      styles.completedField,
                      {backgroundColor: getCompletedSign(item.completed)}]}>
                  </View>
                  <Text style={styles.text}>{item.title}</Text>
                  <View
                    style={styles.redCircle}>                     
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
  redCircle: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    backgroundColor: '#FD442E',
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
  }
});

export default Lab2;
