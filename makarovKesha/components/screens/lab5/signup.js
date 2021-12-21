import React, {useState} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  ActivityIndicator,
} from 'react-native'
import {useApolloClient, useMutation} from "@apollo/client"
import {REG} from "../../graphQL/mutations"

const SignUp = () => {
  const [login, setLogin] = useState(null)
  const [password, setPassword] = useState(null)
  const [name, setName] = useState(null)

  const apollo = useApolloClient()

  const [reg, { data, loading }] = useMutation(REG, {
    onCompleted: async () => {
      console.log('Register completed')
    },
    onError: ({message}) => {
      console.log(message)
      if (message === 'GraphQL error: Unique constraint failed on the fields: (`login`)') {
        console.log('This login already exists')
        return null
      }
      console.log('Registration error')
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
      <ActivityIndicator color="#82D2FF"/>
    )

  const createUser = () => {
    if (isDataCorrect())
      reg({
        variables: {
            password,
            login,
            name
          }
      })
  }

  return (
    <SafeAreaView style={styles.Main}>
      <View>
        <TextInput style = {styles.Input} onChangeText={text => setLogin(text)} value={login} placeholder='Login'/>
        <TextInput style = {styles.Input} onChangeText={text => setPassword(text)} value={password} placeholder='Password'/>
        <TextInput style = {styles.Input} onChangeText={text => setName(text)} value={name} placeholder='Name'/>
        <Pressable 
          onPress={() => {createUser()}}
          style = {styles.Button}
        >
          <Text style={styles.ButtonText}>
            Register
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    Button: {
      marginTop: 54.9,
      marginLeft: 54.9,
      height: 46.54,
      width: 282.54,
      borderRadius: 8.72,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#5E5E5E",
    },
    ButtonText: {
      lineHeight: 34.91,
      height: 34.91,
      marginLeft: 5.81,
      color: '#FFFFFF',
      fontSize: 16
    },
    Input: {
      height: 46.54,
      width: 369.45,
      borderRadius: 8.72,
      marginTop: 11.63,
      marginLeft: 11.63,
      padding: 5.81,
      paddingLeft: 11.63,
      lineHeight: 34.91,
      backgroundColor: "#5E5E5E",
      color: '#FFFFFF',
      fontSize: 16
    },
    Main: {
      backgroundColor: "#333333",
      height: "100%",
      justifyContent: 'center',
      alignItems: 'center'
    }
  });

export default SignUp 