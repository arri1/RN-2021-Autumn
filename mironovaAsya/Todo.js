import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput
} from 'react-native';

const { height, width } = Dimensions.get('window');

class TodoList extends Component {
 state = {
    todoValue: ''
  };

 toggleItem = () => {
    this.setState(prevState => {
       return{
          isCompleted: !prevState.isCompleted
       }
    })
 }
 startEditing = () => {
    const { textValue } = this.props;
    this.setState({
       isEditing: true,
       todoValue: textValue
      });
 }

 finishEditing = () => {
   this.setState({
     isEditing: false
   });
 }
 controlInput = textValue => {
   this.setState({ todoValue: textValue });
 };

  render() {
   const { isEditing, isCompleted, todoValue } = this.state;
    return (
      <View style={styles.container}>
         <TextInput style={styles.input} placeholder="Add an item!" />
      <View style={styles.rowContainer}>
      <TouchableOpacity onPress={this.toggleItem}>
      <View style={[styles.circle, isCompleted ? styles.completeCircle : styles.incompleteCircle]}>

      </View>
    </TouchableOpacity>
      <Text style={[styles.text, isCompleted ? styles.strikeText : styles.unstrikeText]}>
       here
      </Text>
      </View>
      {isEditing ? (
        <View style={styles.buttons}>
        <TouchableOpacity onPressOut={this.finishEditing}>
          <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>✅</Text>
          </View>
        </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.buttons}>
        <TouchableOpacity onPressOut={this.startEditing}>
          <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>✏</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>❌</Text>
          </View>
        </TouchableOpacity>
        </View>
      )}
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width - 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rowContainer: {
   flexDirection: 'row',
   width: width / 2,
   alignItems: 'center',
   justifyContent: 'space-between'
 },
 buttons: {
   flexDirection: 'row',
 },
 buttonContainer: {
   marginVertical: 10,
   marginHorizontal: 10,
 },
  text: {
    fontWeight: '300',
    fontSize: 18,
    marginVertical: 20
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: 'red',
    borderWidth: 3,
    marginRight: 20
  },
  input: {
   padding: 20,
   borderBottomColor: '#bbb',
   borderBottomWidth: 1,
   fontSize: 24
  },
  tasks: {
     flexDirection: 'row'
  },
  strikeText: {
   color: '#bbb',
   textDecorationLine: 'line-through'
  },
  unstrikeText: {
   color: "#29323c"
  }
});

export default TodoList;