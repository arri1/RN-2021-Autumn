import React, {useState, useMemo} from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList} from "react-native";
import Figma from "../styles/styles.js";
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from "react-redux";
export default Lab3 = ({navigation}) => {
    const whileFunc = () => {
        let i = 0;
        while (i < 50000000) {
          i++;
        }
        return 1;
    };
    const data = useSelector(state=>state.userReducer);
    const onPressHandler = () => {
        const count = func;
        setNum(num+1);
    };
    const onPressHandlerSecond = () => {
        const count = whileFunc();
        setNum(num+1);
    };
    const func = useMemo(whileFunc,[]);
    const [num, setNum] = useState(0);
    return (
        <View style={Figma.container}>
            <LinearGradient colors={['#4A90E0', '#4BFAF1']} style={Figma.backgRect1}/>
            <Text style={Figma.titleText}>Задание 3</Text>
            <TouchableOpacity style={Figma.titleBox} onPress={() => navigation.goBack()}>
                <Image source = {require('../img/left-arrow.png')} style = {Figma.img}/>
            </TouchableOpacity>
            <View style={Figma.backRect2}>
                <FlatList data={data} keyExtractor={(item)=>item.id} renderItem={({item})=>(
                    <View style={styles.box}>
                        <Text style={styles.textTitle}>{item.title}</Text>
                        <View style={styles.textBox}>
                            <Text style={styles.text}>{item.body}</Text>
                        </View>
                        <View style={styles.like}>
                            <Text style={styles.text}>{num}</Text>
                            <TouchableOpacity style={styles.button} onPress={onPressHandler}>
                                <Image source = {require('../img/like.png')} style = {styles.imgLikes}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={onPressHandlerSecond}>
                                <Image source = {require('../img/likeSlow.png')} style = {styles.imgLikes}/>
                            </TouchableOpacity>
                        </View> 
                    </View>  
                )}/>    
            </View> 
        </View>     
  );
}

const styles = StyleSheet.create({
    
    box: {
        borderRadius: 35,
        borderWidth: 1,
        borderColor: "#C4C4C4",
        height:286,
        width: 300,
        marginBottom:20,
        backgroundColor:'#F2F2F2',
        paddingHorizontal:20,
        alignSelf: 'center',
    },
    button: {
        marginLeft:2
    },
    like: {
        flexDirection: 'row',
        alignSelf: "flex-start",
        justifyContent: "center"
    },
    textTitle: {
        textAlign: 'center',
        fontSize: 18,
        marginVertical:20
    },
    textBox:{
        marginBottom:20,
        height:160,
    },
    text:{
        textAlign: 'justify',
        fontSize: 16,
    },
    imgLikes: {
        width:22,
        height:22
    }
    
});
