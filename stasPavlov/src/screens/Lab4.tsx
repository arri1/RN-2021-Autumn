import React from 'react'
import {View} from 'react-native'
import BoldText from '../components/customs/text/BoldText'
import {useAppSelector} from '../app/hooks'
import MediumText from '../components/customs/text/MediumText'
import { v4 } from 'uuid'

const Lab4 = () => {
    const tasks = useAppSelector(state => state.items.items)
    return (
        <View>
            <BoldText>Task List</BoldText>
            {tasks.map((task) => {
                return (
                    <View key={v4()}>
                        <BoldText>{task.heading}</BoldText>
                        <MediumText>{task.text}</MediumText>
                    </View>
                )
            })}
        </View>
    )
}

export default Lab4
