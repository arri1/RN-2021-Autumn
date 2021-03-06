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

const SignUp = ({navigation}) => {
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
    <SafeAreaView style={styles.main}>
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
        <Pressable 
          onPress={() => {navigation.replace('Login')}}
          style = {styles.Button}
        >
          <Text style={styles.ButtonText}>
            Back
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    Button: {
      marginTop: 30,
      height: 40,
      width: 200,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#2F88F0",      
      alignSelf: 'center'
    },
    ButtonText: {
      lineHeight: 35,
      height: 35,
      marginLeft: 6,
      color: '#FFFFFF',
      fontSize: 16
    },
    Input: {
      height: 45,
      width: 300,
      borderRadius: 10,
      marginTop: 10,
      padding: 6,
      paddingLeft: 12,
      lineHeight: 35,
      backgroundColor: "#AEAEAE",
      color: '#FFFFFF',
      fontSize: 16, 
      alignSelf: 'center',
    },
    main: {
      backgroundColor: "#E1E4E7",
      height: "100%",
      justifyContent: 'center',
      alignItems: 'center' 
    }
  });

export default SignUp 