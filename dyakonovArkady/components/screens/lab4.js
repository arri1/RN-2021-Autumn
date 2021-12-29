import React from 'react';
import {View, ScrollView, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {applyItem, changeTitle} from '../../store/data';

const Lab4 = () => {
  const data = useSelector(state => state.data.value);
  const selectedItems = data?.filter(item => item.checked);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={[styles.main, {backgroundColor: '#52C0DE'}]}> 
        <View style={styles.container}>
            <ScrollView>
                {selectedItems?.map(item => {
                    return (
                        <View style={styles.itemSt} key={item.id}>
                            <TextInput style={[styles.text]} onChangeText={text => {
                              dispatch(changeTitle([item.id, item.name, text]));
                              }}>
                              {item.username}
                            </TextInput>

                            <TextInput style={[styles.text]} onChangeText={text => {
                              dispatch(changeTitle([item.id, text, item.username]));
                              }}>
                              {item.name}
                            </TextInput>  

                            <Text >Address: {item.address.city}, {item.address.street}, {item.address.suite}</Text>
                            <Text>email: {item.email}</Text>
                            <Text>phone: {item.phone}</Text>                           
                            
                            <TouchableOpacity key={item.id} onPress={() => {
                              dispatch(applyItem(item.id));
                              }}>
                                <Text style={[styles.buttonSt, item.checked ? {backgroundColor: '#95D133'} : undefined]}>
                                  Применить
                                </Text>
                            </TouchableOpacity>
                        </View>  
                    );
                })}  
            </ScrollView>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    main:{
        height: '100%'
      },
      buttonSt: {
        fontSize: 12,
        textTransform: 'uppercase',
        padding: 10,
        borderRadius: 10,
        marginTop: 5,
        width: 100,
        marginBottom: 5,
      },
      itemSt: {
        backgroundColor: '#BCEEEB',
        padding: 10,
        borderRadius: 10,
        marginTop: 5,
        width: 390,
        marginBottom: 5,
        shadowColor: '#000000',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
      },
      container: {
        marginBottom: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#52C0DE'
      },
      text: {
        fontSize: 15,
        fontWeight: 'bold',
        backgroundColor: '#64C9FA',
        padding: 5,
        marginBottom: 5,
        borderRadius: 10,
      },
});

export default Lab4;