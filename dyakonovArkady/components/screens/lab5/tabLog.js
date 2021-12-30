import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image,} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TabNavigator from '../../navigation/TabNavigation';

const TabLog = ({navigation}) => {
  
  const signOut = () => {
    AsyncStorage.setItem('group', '');
    AsyncStorage.setItem('name', '');
    AsyncStorage.setItem('login', '');
    AsyncStorage.setItem('password', '');
    AsyncStorage.setItem('token', '');
    navigation.replace('Login');
  };

  return (
    <View style={styles.main}>
      <TabNavigator />
      <TouchableOpacity style={styles.SignOutBtn} onPress={signOut}>
        <Image 
          source = {require('../../../tabIcons/signOut.png')}
          resizeMode = "contain"
          style={{
            width: 30,
            height: 40,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#BCEEEB',
  },
  viewBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  viewInput: {
    marginTop: 15,
  },
  inputText: {
    width: 300,
    borderRadius: 10,  
    backgroundColor: '#64C9FA',
  },

  labelText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  text: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    backgroundColor: '#95D133',
    marginTop: 15,
    borderRadius: 10,
    padding: 10,
    width: 300,
    alignItems: 'center',
  },
  SignOutBtn: {
    position: 'absolute',
    left: 350,
    top: 5,
    height: 50,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 50,
  },
});

export default TabLog;