import React from 'react';
import {
  Text, View, TouchableOpacity,
} from 'react-native';

import { auth } from '../../store/tasks';
import styles from '../../styles/styles';

const Menu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 10}}>
        <TouchableOpacity style={styles.menuButton} title="MyUser" onPress={() => navigation.navigate('User', { login: auth.getState()})}>
          <Text style={styles.menuButtonText}>MyAccount</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} title="Users" onPress={() => navigation.replace('Users')}>
          <Text style={styles.menuButtonText}>Users</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} title="Posts" onPress={() => navigation.replace('Posts')}>
          <Text style={styles.menuButtonText}>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} title="Log Out" onPress={() => navigation.replace('Login')}>
          <Text style={styles.menuButtonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Menu;
