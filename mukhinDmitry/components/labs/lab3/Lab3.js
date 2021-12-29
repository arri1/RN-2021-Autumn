import React, { useMemo, useCallback, useState } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import RoundedButton from '../../common/buttons/RoundedButton'

let memoCalls = 0
let callbackCalls = 0
let calls = 0

const rnLab3 = () => {
    const RNInfoView = (title, value, calls) => {
        return (
            <View style = {styles.rnItemView}>
                <Text style = {styles.rnItemText}>
                    {title[0]}{calls}
                </Text>
                <Text style = {styles.rnItemText}>
                    {title[1]}{value}
                </Text>
            </View>
        )
    }

    const [num, setNum] = useState(0)
    const [callbackTrigger, setCallbackTrigger] = useState(false)

    const rn = () => {
        return  num + 231;
    };

    const rnCount = () => {
        ++calls;
        return rn(num);
    }
    
    const rnCallback = useCallback((a, func) => {
            ++callbackCalls;
            return a + 231;
            },
            [callbackTrigger]
        );

    const rnNumMemo = useMemo(() => {
        ++memoCalls;
        return rn();
        }, [num]);

    const onPressAddNum = () => {
        setNum(num + 1)
    }

    const onPressCheckPtr = () => {
        setCallbackTrigger(!callbackTrigger)
    }
  
  
    return (
      <SafeAreaView style = {styles.rnSafeArea}>
        {RNInfoView(['Calls : ',' Num + 231 : '],rnCount(),calls)}
        {RNInfoView(['Memo calls : ',' Memo Num + 231 : '],rnNumMemo,memoCalls)}
        {RNInfoView(['Callback calls : ',' Callback Num + 231 : '],rnCallback(num, callbackTrigger),callbackCalls)}
        <RoundedButton onPress={onPressAddNum} title='Num++'/>
        <RoundedButton onPress={onPressCheckPtr} title={callbackTrigger ? 'Callback trigger : True' : 'Callback trigger : False'}/>
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
    rnSafeArea: {
        backgroundColor: "#333333",
        height: "100%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    rnItemView: {
        backgroundColor: "#5E5E5E",
        height: 152.72,
        width: 369.45,
        marginTop: 11.63,
        marginLeft: 11.63,
        borderRadius: 8.72,
        justifyContent: 'center',
        alignContent: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    rnItemText: {
        lineHeight: 34.91,
        height: 34.91,
        color: '#FFFFFF',
        alignSelf: 'center',
        fontSize: 16
    },
  });

export default rnLab3
