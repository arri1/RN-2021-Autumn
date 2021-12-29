import React, {useState} from "react";
import { Text, View, TextInput, TouchableOpacity, Image} from "react-native";
import {useDispatch} from "react-redux";
import {setTitle} from "../store/actions";
import Figma from "../styles/styles.js";
import StylesLab4 from "../styles/stylesLab4.js";
import LinearGradient from 'react-native-linear-gradient';
import uuid from 'react-native-uuid';

export default Lab4 = ({navigation}) => {
    const [titleT, setTitleT] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();
    const onChangeTitle = (text) => {
        setTitleT(text);
    }
    const onChangeBody = (text) => {
        setBody(text);
    }
    const addTodo = () => {
        rand = uuid.v4();
        dispatch(setTitle(rand,titleT,body, 0));
    }
    return (
        <View style={Figma.container}>
            <LinearGradient colors={['#4A90E0', '#4BFAF1']} style={Figma.backgRect1}/>
            <Text style={Figma.titleText}>Задание 4</Text>
            <TouchableOpacity style={Figma.titleBox} onPress={() => navigation.goBack()}>
                <Image source = {require('../img/left-arrow.png')} style = {Figma.img}/>
            </TouchableOpacity>
            <View style={Figma.backRect2}>
                <View style={StylesLab4.box}>
                    <TextInput style={StylesLab4.inputTitle} onChangeText={onChangeTitle} maxLength={25} placeholder="Добавить название..."/>
                    <TextInput style={StylesLab4.inputBody}  onChangeText={onChangeBody} multiline={true} placeholder="Добавить текст..."/>
                    <TouchableOpacity onPress={addTodo}>
                        <Text style={StylesLab4.button}>Добавить</Text>
                    </TouchableOpacity>           
                </View>
                <View style={StylesLab4.box}> 
                    <Text style={StylesLab4.textTitle}>{titleT}</Text>
                    <View style={StylesLab4.textBox}>
                        <Text style={StylesLab4.text}>{body}</Text>
                    </View> 
                    <View style={StylesLab4.like}>
                        <Text style={StylesLab4.text}>0</Text>
                        <TouchableOpacity style={StylesLab4.buttonLike}>
                            <Image source = {require('../img/like.png')} style = {StylesLab4.imgLikes}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={StylesLab4.buttonLike}>
                            <Image source = {require('../img/likeSlow.png')} style = {StylesLab4.imgLikes}/>
                        </TouchableOpacity>
                    </View>
                </View>       
            </View> 
        </View>         
    );
}

