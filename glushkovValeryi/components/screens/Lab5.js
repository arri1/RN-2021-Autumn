import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, SafeAreaView, View  } from 'react-native';
import { gql, useQuery } from '@apollo/client'

const FIND_MANY_POST = gql`
    query {
        findManyPost {
            id
            title
            text
        }
    }
`

const Lab5 = () => {
    const { loading, error, data } = useQuery(FIND_MANY_POST);
    
    if (loading) {
        return (
        <SafeAreaView style = {styles.main}>
                <View style = {styles.scroll}>
                    <Text style = {styles.statusText}>Loading...</Text>
                </View>
            </SafeAreaView>
        )
    }
    if (error) {
        console.error(error);
        return (
            <SafeAreaView style = {styles.main}>
                <View style = {styles.scroll}>
                    <Text style = {styles.statusText}>Error!</Text>
                </View>
            </SafeAreaView>
        )
    }
    return (
        <SafeAreaView style = {styles.main}>
        <View style = {styles.scroll}>
            <ScrollView style = {styles.content}>
                { data.findManyPost.map(item => <Text style = {styles.item} key = {item.id}>{ item.title }</Text>) }
            </ScrollView>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    item: {
        marginTop: '5%',
        marginBottom: '0%',
        margin: '5%',
        padding: 15,
        height: 50, 
        width: '90%',
        backgroundColor: "#D7FCD4",
        borderRadius: 10,
        fontSize: 15
    },
    content: {
        backgroundColor: '#545454',
        width: '100%'
    },
    scroll: {
        width: '100%',
        height: '85%', 
        backgroundColor: '#545454',
        justifyContent: 'center',
        alignItems: 'center'
    },
    main: {
        margin: 0,
        padding: 0,
        height: '100%', 
        width: '100%',
        backgroundColor: '#545454',
    },
    statusText: {
        textAlign: "center",
        fontSize: 100,
    }
});

export default Lab5;