import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {deleteItem} from '../../store/history';

const Lab4 = () => {
    const data = useSelector(state => state.data);
    const dispatch = useDispatch();

    return(
        <View style={styles.main}>
            <ScrollView>
                <Text style={styles.title}>
                    История калькулятора факториалов:
                </Text>
                {data.map(item => {
                    return (
                        <View style={styles.block} key={item.id}>
                            <Text style={styles.text} key={item.id}>
                                {item.number} != {item.result}
                            </Text>
                            <TouchableOpacity 
                                style={styles.button} 
                                onPress={() => {
                                    dispatch(deleteItem(item.id))
                                }}>
                                <Text>DELETE</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </ScrollView> 
        </View>
    );
}

const styles = StyleSheet.create({
    main:{
        backgroundColor: '#FFE6DC',
        flex: 1
    },
    item:{
        borderWidth: 1,
        padding: 10
    },
    block:{
        backgroundColor: 'white',
        height: 136,
        margin: 24,
        marginBottom: 0,
        alignItems:"center"
    },
    button:{
        backgroundColor: '#E88F5D',
        width: 200,
        height: 50,
        borderRadius: 5,
        alignItems:"center",
        justifyContent:"center",
        margin: 18
    },
    text:{
        fontFamily: "Montserrat",
        fontSize: 15,
        marginTop: 24
    },
    title:{
        fontFamily: "Montserrat",
        fontSize: 17,
        marginTop: 24, 
        textAlign: 'center'
    }
});

export default Lab4;