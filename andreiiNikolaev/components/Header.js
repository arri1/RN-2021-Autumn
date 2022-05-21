import {StyleSheet,Text, View} from 'react-native';

export default function Header() {
    return (
        <View style = {styles.main}>
            <Text style={styles.text}>Color Generate</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    main: {
        paddingTop: 30,
        height: 70,
        backgroundColor: 'silver'
    },
    text: {
        fontSize: 21,
        color: 'red',
        textAlign: 'center'
    }

},
)
