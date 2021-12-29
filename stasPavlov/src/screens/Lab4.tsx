import React from 'react'
import {StyleSheet, View} from 'react-native'
import BoldText from '../components/customs/text/BoldText'
import {useAppSelector} from '../app/hooks'
import MediumText from '../components/customs/text/MediumText'
import { v4 } from 'uuid'
import { colors } from '../constants/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    task: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        backgroundColor: colors.lightLilac,
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
})

const Lab4 = () => {
    const tasks = useAppSelector(state => state.items.items)
    return (
        <View style={styles.container}>
            <BoldText style={{fontSize: 20, margin: 10}}>Task List</BoldText>
            {tasks.map((task) => {
                return (
                    <View key={v4()} style={styles.task}>
                        <BoldText style={{marginRight: 10}}>{task.heading}</BoldText>
                        <MediumText>{task.text}</MediumText>
                    </View>
                )
            })}
        </View>
    )
}

export default Lab4
