import React, { useState, useMemo } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/history';

const Lab3 = () => {
    const [number, setNumber] = useState(0);
    const [result, setResult] = useState('');
    const [text, setText] = useState(0);
    const [id, setId] = useState(0);
    const dispatch = useDispatch();

    const getRandomNumber = () => {
        const a = Math.floor((Math.random() * 15) + 5);
        setNumber(a);
    }

    const mainFunction = () => {
        let i = 0;
        while (i < 80000000) {
            i++;
        }
        return 'Результат: ';
    }

    const factorialFunction = () => {
        let i = 1;
        let s = 1;
        while (i <= number) {
            s *= i;
            i++;
        }
        return s;
    }

    const clickedButton1 = () => {
        const text = mainFunction();
        const m = factorialFunction();
        setResult(m);
        setText(`${text} ${m}`);
        setId(id+1);
        const data = {
            "id": id,
            "number": number,
            "result": m
        };
        dispatch(addItem(data));
    };

    const operation = useMemo(mainFunction, []);

    const clickedButton2 = () => {
        const text = operation;
        const m = factorialFunction();
        setResult(m);
        setText(`${text} ${m}`);
        setId(id+1);
        const data = {
            "id": id,
            "number": number,
            "result": m
        };
        dispatch(addItem(data));
    };

    return(
        <View style={styles.main}>
            <Text style={styles.mainText}>Факториал случайного числа (5, 20):</Text>
            <Text style={styles.number}>{number}</Text>
            <TouchableOpacity style={styles.button} onPress={getRandomNumber}>
                <Text style={styles.buttonText}>RANDOM</Text>
            </TouchableOpacity>
            <Text style={styles.text}>{text}</Text>
            <View style={styles.buttonsView}>
                <TouchableOpacity style={styles.button1} onPress={clickedButton1}>
                    <Text style={styles.buttonText}>COUNT1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={clickedButton2}>
                    <Text style={styles.buttonText}>COUNT2</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    main:{
        backgroundColor: '#FFE6DC',
        flex: 1,
        alignItems:"center",
        justifyContent:"center"
    },
    button:{
        backgroundColor: '#E88F5D',
        width: 200,
        height: 50,
        borderRadius: 5,
        alignItems:"center",
        justifyContent:"center"
    },
    button1:{
        backgroundColor: '#E88F5D',
        width: 136,
        height: 50,
        borderRadius: 5,
        alignItems:"center",
        justifyContent:"center",
        marginRight: 40
    },
    button2:{
        backgroundColor: '#E88F5D',
        width: 136,
        height: 50,
        borderRadius: 5,
        alignItems:"center",
        justifyContent:"center"
    },
    buttonsView:{
        flexDirection: "row"
    },
    mainText:{
        fontFamily: "Montserrat",
        fontSize: 18
    },
    number:{
        fontFamily: "Montserrat",
        fontSize: 16,
        margin: 44,
        color: '#E88F5D',
        fontWeight: "bold"
    }, 
    text:{
        fontFamily: "Montserrat",
        fontSize: 16,
        margin: 44 
    }
});

export default Lab3;