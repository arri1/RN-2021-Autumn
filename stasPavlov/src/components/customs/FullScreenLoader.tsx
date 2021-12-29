import React from 'react'
import { StyleSheet, View } from 'react-native'
import { colors } from '../../constants/colors'
import { ProgressBar } from '@react-native-community/progress-bar-android'

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
})

const FullScreenLoader: React.FC = () => {
    return (
        <View style={styles.loader}>
            <ProgressBar />
        </View>
    )
}

export default FullScreenLoader
