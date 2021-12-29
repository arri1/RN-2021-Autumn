import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  ActivityIndicator,
} from 'react-native'
import { useMutation } from "@apollo/client"
import { UPDATE_USER } from "../../../sql/mutations/RNUser"
import { useSelector, useDispatch } from 'react-redux'
import { setLoginValue } from '../lab4/RNSlice'

const RNUpdate = () => {
  const dispatch = useDispatch()
  const [login, setLogin] = useState(useSelector((state) => state.rnSlice.login))
  const [password, setPassword] = useState(null)
  const [name, setName] = useState(null)
  const [group, setGroup] = useState(null)

  const [updt, {loading}] = useMutation(UPDATE_USER, {
    onCompleted: async () => {
      console.log('Update succeded')
    },                                  
    onError: ({message}) => {
        console.log(message)
        console.log('Something went wrong')
    }
  })

  const isDataCorrect = () => {
    if (login === '') {
      console.log('Null login')
      return false
    }
    if (password === '') {
      console.log('Null password')
      return false
    }
    return true
  }

  if (loading)
    return (
      <SafeAreaView style={styles.rnMain}>
        <ActivityIndicator color="#82D2FF" backgroundColor="#333333"/>
      </SafeAreaView>
    )

  const onUpdate = () => {
    dispatch(setLoginValue(login))
    if (isDataCorrect())
      updt({
        variables: {
          data: {
            name:{set:name},
            group:{set:group},
            password:{set:password},
            // name,
            // group,
            // password
          }
        }
      })
  }

  return (
    <SafeAreaView style={styles.rnMain}>
      <View style={styles.rnCenter}>
        <TextInput style = {styles.rnInput} onChangeText={text => setLogin(text)} value={login} placeholder='Login'/>
        <TextInput style = {styles.rnInput} onChangeText={text => setPassword(text)} value={password} placeholder='Password'/>
        <TextInput style = {styles.rnInput} onChangeText={text => setName(text)} value={name} placeholder='Name'/>
        <TextInput style = {styles.rnInput} onChangeText={text => setGroup(text)} value={group} placeholder='Group'/>
        <Pressable 
          onPress={() => {onUpdate()}}
          style = {styles.rnButton}
        >
          <Text style={styles.rnButtonText}>
            Update user
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rnCenter: {
    alignItems: 'center'
  },
  rnButton: {
    marginTop: 54.9,
    height: 46.54,
    width: 282.54,
    borderRadius: 8.72,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#5E5E5E",
  },
  rnButtonText: {
    lineHeight: 34.91,
    height: 34.91,
    color: '#FFFFFF',
    fontSize: 16
  },
  rnInput: {
    height: 46.54,
    width: 369.45,
    borderRadius: 8.72,
    marginTop: 11.63,
    padding: 5.81,
    paddingLeft: 11.63,
    lineHeight: 34.91,
    backgroundColor: "#5E5E5E",
    color: '#FFFFFF',
    fontSize: 16
  },
  rnMain: {
    backgroundColor: "#333333",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default RNUpdate