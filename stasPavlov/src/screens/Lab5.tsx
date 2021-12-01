import React, { useEffect, useState } from 'react'
import {ScrollView, View} from 'react-native'
import BoldText from '../components/customs/text/BoldText'
import MediumText from '../components/customs/text/MediumText'
import { v4 } from 'uuid'
import { useQuery } from '@apollo/client'
import { FIND_MANY_USER } from '../query/user'

interface User {
    login: string
    name: string
}

const Lab5 = () => {
    const {data, loading, error} = useQuery(FIND_MANY_USER)
    const [users, setUsers] = useState([])
    useEffect(() => {
        if (!loading) {
            setUsers(data.findManyUser)
        }
    }, [data, loading])

    return (
        <ScrollView>
            {users.map((user : User) => {
                return (
                    <View key={v4()} style={{flexDirection: 'row'}}>
                        <BoldText style={{marginRight: 10}}>{user.login}</BoldText>
                        <MediumText>{user.name}</MediumText>
                    </View>
                )
            })}
        </ScrollView>
    )
}

export default Lab5
