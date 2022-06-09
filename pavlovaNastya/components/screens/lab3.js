import React, { useState, useMemo } from 'react';
import { 
    StyleSheet, 
    ScrollView, 
    SafeAreaView, 
    TouchableOpacity,
    Text,
} from 'react-native';

const expensiveFunction = () => {
    let i = 0;
    while (i < 60000000) {
      i++;
    }
    return;
  };

const Lab3 = () =>{
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const operation = useMemo(expensiveFunction, []);
    
    const onPressHandler = () => {
        expensiveFunction();
        setCount(count + 1);
    };
    
    const onPressHandlerWithMemo = () => {
        operation;
        setCount(count + 1);
    };

    return(
        <SafeAreaView style = {{...styles.main}}>
            <ScrollView>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() =>  onPressHandler()}
                ><Text style={styles.buttonText}>+</Text></TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() =>  onPressHandlerWithMemo()}
                ><Text style={styles.buttonText}>+</Text></TouchableOpacity>
                <Text style={styles.texts}>{count}</Text>
            </ScrollView>
            
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    main:{
        backgroundColor: '#D2E0BF',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{
        marginTop: 40,
        height: 40,
        width: 130,
        backgroundColor: '#D1A7A0',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
    },
    buttonText:{
        fontFamily: 'Roboto',
        fontSize: 20,
        color:'#000000',
    },
    texts:{
        marginTop: 50,
        alignSelf: 'center',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 20,
        color:'#000000',
    },
});

export default Lab3;