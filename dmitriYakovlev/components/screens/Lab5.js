import React, {useState} from "react";
import { Text, View, TouchableOpacity, ImageBackground, StyleSheet, TextInput, Alert} from "react-native";
import {useQuery, useMutation} from "@apollo/client"
import {USER_NAME} from "../gql/query";
import {UPDATE_USER} from "../gql/mutations";
import AsyncStorage from '@react-native-async-storage/async-storage';

import picture from '../images/Lab3.png';

const Lab5 = ({navigation}) => {

    const [name, setName] = useState('');
    const [group, setGroup] = useState('');

    const [updateMode, setUpdateMode] = useState(false);
    const [changeName, setChangeName] = useState('');
    const [changeGroup, setChangeGroup] = useState('');

    const {client} = useQuery(USER_NAME, {
      onCompleted: ({user}) => {
        setName(user.name);
        setGroup(user.group);
      },
      onError: () => {},
    });

    // функция выхода из аккаунта
    const  exitAcc = async () => {
        await AsyncStorage.clear();  
        client.clearStore();   
        navigation.navigate("first");  
    }

    // функция изменяет имя или группу пользователя
    const onPressUpdate = () => {
        update({
            variables:{
                data:{
                    name: {set:(changeName==='')?name:changeName},
                    group: {set:(changeGroup==='')?login:changeGroup}
                }
            }
        })
        setUpdateMode(!updateMode);
        client.resetStore();
    };

    const [update] = useMutation(UPDATE_USER, {
        // функция выполнении запроса
        onCompleted: () => {
            Alert.alert("Изменения сохранены","успешно", [{
                text:"OK",
                style: "cancel"
            }]);
        },
        // если в запросе возникла ошибка
        onError: () => {
            Alert.alert("Ошибка","не удалось сохранить значения", [{
                text:"OK",
                style: "cancel"
            }]);
        },
    });
    return ( 
        <View style={styles.main}>
            <ImageBackground source={picture} resizeMode='cover' style={styles.image}>
                <View style={styles.container}>
                    <Text style={styles.title}>PROFILE</Text>
                    <TouchableOpacity  onPress={() => navigation.goBack()}>
                    </TouchableOpacity>
                    <View style={styles.nameContainer}>
                        <Text style={styles.text}>Name: {name}</Text>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.text}>Group: {group}</Text>
                    </View>
                    {updateMode && (
                        <View>
                            <Text style={styles.text}>UPDATE</Text>
                            <TextInput  onChangeText={(text)=>{setChangeName(text)}} placeholder="Name" style={styles.input}/>
                            <TextInput  onChangeText={(text)=>{setChangeGroup(text)}} placeholder="Group" style={styles.input}/>
                            <TouchableOpacity onPress={onPressUpdate} style={styles.btn}>
                                <Text style={styles.inside}>SAVE</Text>
                            </TouchableOpacity>
                            
                        </View> 
                    )}
                    {!updateMode && (
                        <View>
                            <TouchableOpacity onPress={()=>{setUpdateMode(!updateMode)}} style={styles.btn}>
                                <Text style={styles.inside}>UPDATE</Text>
                            </TouchableOpacity>
                        </View>          
                    )}                        
                </View>
                <TouchableOpacity onPress={exitAcc} style={styles.btn}>
                    <Text style={styles.inside}>LOG OUT</Text>
                </TouchableOpacity> 
            </ImageBackground>
        </View>         
    );
}


export default Lab5;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: "100%",
        backgroundColor: 'white'
    },
    title: {
        textAlign: 'center',
        fontFamily: 'Sofia-Regular',
        fontSize: 36,
    },
    text: {
        textAlign: 'center',
        fontFamily: 'Sofia-Regular',
        fontSize: 35,
    },
    btn: {
        borderRadius: 15,
        backgroundColor: '#0000A1',
        alignSelf: 'center',
        marginTop: 40,
        width: 250,
        height: 100,
        alignItems: 'center',
        borderRadius: 20,
        borderColor: 'black',
        paddingTop: 10,
    },
    input: {
        fontSize: 30,
        fontFamily: 'Sofia-Regular',
        alignSelf: 'center',
        borderColor: 'black',
        width: 200,
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 10,
    },
    inside: {
        fontSize: 50,
        fontFamily: 'Sofia-Regular',
        color: 'white',
    },
    image: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    container: {
        alignItems: 'center',
        paddingTop: 18,
    },
    nameContainer: {
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: '#B9EDF8',
        opacity: .4,
        paddingTop: 14,
        borderColor: 'black',
        borderWidth: .5, 
    },
})