import React, {useState} from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet, TextInput, Alert} from "react-native";
import Figma from "../styles/styles.js"
import LinearGradient from 'react-native-linear-gradient';
import {useQuery, useMutation} from "@apollo/client"
import {USER_NAME} from "./graphQL/query";
import {UPDATE_USER} from "./graphQL/mutation";

export default Lab5 = ({navigation}) => {
    const [login, setLogin] = useState('');
    const [name, setName] = useState('');
    const [group, setGroup] = useState('');
    const [updateMode, setUpdateMode] = useState(false);
    const [updateModePassword, setUpdateModePassword] = useState(false);
    const [changeName, setChangeName] = useState('');
    const [changeGroup, setChangeGroup] = useState('');
    const [changeLogin, setChangeLogin] = useState('');
    const [changePassword, setChangePassword] = useState('');
    const {client} = useQuery(USER_NAME, {
      onCompleted: ({user}) => {
        setLogin(user.login);
        setName(user.name);
        setGroup(user.group);
      },
      onError: () => {},
    });
    const onPressUpdate = () => {
        update({
            variables:{
                data:{
                    login: {set:(changeLogin==='')?login:changeLogin},
                    name: {set:(changeName==='')?name:changeName},
                    group: {set:(changeGroup==='')?login:changeGroup}
                }
            }
        })
        setUpdateMode(!updateMode);
        client.resetStore();
    };
    const [update] = useMutation(UPDATE_USER, {
        onCompleted: () => {
            Alert.alert("Изменения сохранены","успешно", [{
                text:"OK",
                style: "cancel"
            }]);
        },
        onError: () => {
            Alert.alert("Ошибка","не удалось сохранить значения", [{
                text:"OK",
                style: "cancel"
            }]);
        },
    });
    return ( 
        <View style={Figma.container}>
            <LinearGradient colors={['#4A90E0', '#4BFAF1']} style={Figma.backgRect1}/>
            <Text style={Figma.titleText}>Профиль</Text>
            <TouchableOpacity style={Figma.titleBox} onPress={() => navigation.goBack()}>
                <Image source = {require('../img/left-arrow.png')} style = {Figma.img}/>
            </TouchableOpacity>
            <View style={Figma.backRect2}>
                <Image source = {require('../img/user.png')} style = {styles.user}/>
                <Text style={styles.text}>Логин: {login}</Text>
                <Text style={styles.text}>Имя: {name}</Text>
                <Text style={styles.text}>Группа: {group}</Text>
                {updateMode && (
                    <View>
                        <TextInput  onChangeText={(text)=>{setChangeLogin(text)}} placeholder="Логин"/>
                        <TextInput  onChangeText={(text)=>{setChangeName(text)}} placeholder="Имя"/>
                        <TextInput  onChangeText={(text)=>{setChangeGroup(text)}} placeholder="Группа"/>
                        <TouchableOpacity onPress={onPressUpdate}>
                            <Text style={styles.button}>Сохранить</Text>
                        </TouchableOpacity>
                    </View>
                )}
                {!updateMode && (
                    <View>
                        <TouchableOpacity onPress={()=>{setUpdateMode(!updateMode)}}>
                            <Text style={styles.button}>Изменить данные</Text>
                        </TouchableOpacity>
                    </View>          
                )}                        
            </View> 
        </View>         
    );
}

const styles = StyleSheet.create({
    user: {
        height:200,
        width:200,
        alignSelf: 'center',
    },
    text: { 
      fontSize: 18,
      textAlign: 'center',
    },
    textBtn: { 
      padding:10,
      borderWidth: 1,
      borderColor: '#C4C4C4',
      borderRadius: 35,
      textAlign: 'center',
      marginBottom:10
    },
    button: {
        padding:10,
        borderWidth: 1,
        borderColor: '#C4C4C4',
        borderRadius: 35,
        textAlign: 'center',
        marginTop:20,   
        backgroundColor: '#fff'
      }
  });