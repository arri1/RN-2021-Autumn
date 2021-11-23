import React, {useMemo, useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Lab3 = () => {
    const [num, setNum] = useState(0)
    const func = () => {
        let i = 0;
        while (i < 100000000) {
          i++;
        }
        return true;
    }
    const memoFunc = useMemo(func,[]);
    const onPressHandler = () => {
        const bool = func()
        setNum(num+1)
    };
    const onPressHandlerSecond = () => {
        const bool = memoFunc;
        setNum(num+1)  
    };
    return (
      <View>
        <View>
            <Text style={styles.title}>  
                Без использования useMemo()
            </Text>
            <Text style={styles.sum}>
                Счет {num}
            </Text>
            <TouchableOpacity onPress={(onPressHandler)} style={styles.button}>
                <Text style={styles.text}>
                    Нажми
                </Text>
            </TouchableOpacity>
        </View>
        <View>
            <Text style={styles.title}>  
                С использованием useMemo()
            </Text>
            <Text style={styles.sum}>
                Счет {num}
            </Text>
            <TouchableOpacity onPress={(onPressHandlerSecond)} style={styles.button}>
                <Text style={styles.text}>
                    Нажми
                </Text>
            </TouchableOpacity>
        </View>
      </View>
    );
}

export default Lab3;

const styles = StyleSheet.create({
    sum: {
        fontSize: 30,
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 20,
    },
    title: {
        paddingTop: 40,
        fontSize: 30,
        textAlign: 'center',
        color: 'blue',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#bbb',
        borderRadius: 20,
        marginLeft: 100,
        marginRight: 100,
    },
    text: {
        fontSize: 40,
    }

})
