import React, {useEffect} from 'react'
import {StyleSheet, View, Text, Link} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import { fetchData} from '../features/items-slice'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'gray',
    },
    task: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
})

const Lab4 = () => {
    const isFetching = useSelector(state => state.items.isFetching)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])
    const tasks = useSelector(state => state.items.items)
    if (isFetching) {
        return <Text>Loading...</Text>
    }
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20, margin: 10}}>Suggestion for a random activity </Text>
            {tasks.map((task) => {
                return (
                    <View key={task.text} style={styles.task}>
                        <Text style={{marginRight: 10}}>{task.heading}</Text>
                        <Text>{task.text}</Text>
                    </View>
                )
            })}
        </View>
    )
}

export default Lab4