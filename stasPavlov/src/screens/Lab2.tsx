import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'
import {v4} from 'uuid'
import { Todo } from '../constants/types'
import { fetchData, todoAdded } from '../features/items-slice'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { colors } from '../constants/colors'
import FullScreenLoader from '../components/customs/FullScreenLoader'
import CalendarIcon from '../components/SVG/CalendarIcon'
import SemiBoldText from '../components/customs/text/SemiBoldText'
import MediumText from '../components/customs/text/MediumText'
import moment from 'moment'
import BoldText from '../components/customs/text/BoldText'
import { dimensions } from '../constants/dimensions'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        minHeight: '100%',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    todoText: {
        fontSize: 15,
    },
    header: {
        width: '90%',
        marginTop: '5%',
    },
    headerInfo: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    heading: {
        fontSize: 20,
        width: '50%',
    },
    deleteButton: {
        marginLeft: 5,
        padding: 2,
        backgroundColor: '#AAA',
    },
    date: {
        backgroundColor: colors.gray,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 50,
    },
    todo: {
        width: dimensions.width * 0.40,
        height: dimensions.height * 0.25,
        marginHorizontal: dimensions.width * 0.02,
        marginVertical: dimensions.width * 0.02,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: colors.gray,
        padding: 20,
    },
    todoList: {
        width: '90%',
        marginBottom: '10%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    todoListHeading: {
        marginRight: '20%',
        borderBottomWidth: 5,
        borderBottomColor: colors.orange,
    },
    todoListHeader: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    taskCreatorHeadingContainer: {
        width: '100%',
        marginTop: 20,
        marginBottom: 10,
    },
    taskCreatorHeading: {
        fontSize: 13,
        marginLeft: '10%',
    },
    taskCreator: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    taskCreatorLeft: {
        justifyContent: 'center',
        width: '68%'
    },
    submitButton: {
        width: '28%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    headingInput: {
        backgroundColor: colors.white,
        borderRadius: 10,
        margin: 10,
        padding: 10,
        height: 30,
        fontSize: 10,
    },
    textInput: {
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 10,
        marginBottom: 10,
        fontSize: 10,
    },
    submitButtonText: {
        fontSize: 13,
        color: colors.white,
    },
    tasksCounter: {
        fontSize: 18,
        color: colors.lightLilac,
    },
})

const Lab2: React.FC = () => {
    const todos = useAppSelector(state => state.items.items)
    const isFetching = useAppSelector(state => state.items.isFetching)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])
    const [newTaskHeading, setNewTaskHeading] = useState('')
    const [newTaskText, setNewTaskText] = useState('')
    const submitTask = () => {
        dispatch(todoAdded({
            heading: newTaskHeading,
            text: newTaskText,
            timestamp: Date.now(),
            id: v4(),
            isChecked: false,
        }))
        setNewTaskHeading('')
        setNewTaskText('')
    }
    if (isFetching) {
        return <FullScreenLoader />
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <View style={styles.header}>
                        <MediumText style={styles.heading}>Good morning, whoever you are</MediumText>
                        <View style={styles.headerInfo}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <View style={{marginRight: 10}}>
                                    <CalendarIcon />
                                </View>
                                <View style={styles.date}>
                                    <SemiBoldText style={{fontSize: 13}}>
                                        {moment().format('Do MMM')}
                                    </SemiBoldText>
                                </View>
                            </View>
                            <MediumText>{todos.length} tasks to do today</MediumText>
                        </View>
                    </View>
                    <View style={styles.taskCreatorHeadingContainer}>
                        <SemiBoldText style={styles.taskCreatorHeading}>What's your task for today?</SemiBoldText>
                    </View>
                    <View
                        style={styles.taskCreator}
                    >
                        <View style={styles.taskCreatorLeft}>
                            <View style={{backgroundColor: colors.gray, borderRadius: 20}}>
                                <TextInput
                                    placeholder={'Your task\'s heading'}
                                    style={styles.headingInput}
                                    value={newTaskHeading}
                                    onChangeText={setNewTaskHeading}/>
                                <TextInput
                                    placeholder={'Write your task here...'}
                                    multiline
                                    style={styles.textInput}
                                    value={newTaskText}
                                    onChangeText={setNewTaskText}/>
                            </View>
                        </View>
                        <TouchableOpacity style={[styles.submitButton, {backgroundColor: newTaskText && newTaskHeading ? colors.purple : colors.gray}]}
                            disabled={!(newTaskText && newTaskHeading)}
                            onPress={submitTask}
                        >
                            <BoldText style={styles.submitButtonText}>Submit</BoldText>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.todoListHeader}>
                        <View style={styles.todoListHeading}>
                            <SemiBoldText style={{fontSize: 22 }}>Tasks</SemiBoldText>
                        </View>
                        <SemiBoldText style={styles.tasksCounter}>{todos.length} tasks</SemiBoldText>
                    </View>
                    <View style={styles.todoList}>
                        {todos && todos.map((todo : Todo) => {
                            return (
                                <View key={v4()} style={styles.todo}>
                                    <MediumText style={{fontSize: 15}}>{todo.heading}</MediumText>
                                    <MediumText style={styles.todoText}>{todo.text}</MediumText>
                                </View>
                            )
                        })}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Lab2
