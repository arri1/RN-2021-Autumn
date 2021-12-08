import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import BoldText from '../components/customs/text/BoldText'
import MediumText from '../components/customs/text/MediumText'
import { v4 } from 'uuid'
import { useQuery } from '@apollo/client'
import { FIND_MANY_USER } from '../query/user'
import FullScreenLoader from '../components/customs/FullScreenLoader'
import { colors } from '../constants/colors'

interface User {
    login: string
    name: string
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    user: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        backgroundColor: colors.lightLilac,
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    header: {
        fontSize: 20,
        margin: 10
    }
})

const Lab5 = () => {
    const {data, loading} = useQuery(FIND_MANY_USER)

    if (loading) {
        return <FullScreenLoader />
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <BoldText style={styles.header}>User List</BoldText>
            {data.findManyUser.map((user : User) => {
                return (
                    <View key={v4()} style={styles.user}>
                        <BoldText style={{marginRight: 10}}>{user.login}</BoldText>
                        <MediumText>{user.name}</MediumText>
                    </View>
                )
            })}
        </ScrollView>
    )
}

export default Lab5
