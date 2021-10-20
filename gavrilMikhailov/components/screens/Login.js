import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Alert,
    Text,
    Button,
    TextInput,
    View,
} from 'react-native';

const Login = () => {
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");

    const didTapButton = () => {
        Alert.alert('Далее', `Почта: ${email}\nПароль: ${password}`, [
            { text: "Ok", onPress: () => {} }
        ])
    }

    const isValidEmail = () => {
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(email)
    }

    const isValidPassword = () => {
        return password.length > 6
    }

    return (
        <SafeAreaView>
            <View style={styles.view}>
                <Text style={styles.title}>
                    Вход в какую то систему
                </Text>
                <TextInput 
                    style={styles.textInput}
                    onChangeText={onChangeEmail} 
                    value={email}
                    placeholder={"E-mail"}/>
                <TextInput 
                    style={styles.textInput}
                    onChangeText={onChangePassword} 
                    value={password}
                    secureTextEntry={true}
                    placeholder={"Пароль"}/>
                <Button 
                    title={"Продолжить"}
                    disabled={!(isValidEmail() && isValidPassword())}
                    onPress={didTapButton}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 36.0,
    },
    title: {
        color: '#000',
        width: '100%',
        fontSize: 18,
        marginBottom: 16,
    },
    textInput: {
        width: '100%',
        height: 40,
        marginHorizontal: 16.0,
        borderWidth: 0.5,
        padding: 10,
        color: '#2C394B',
        marginVertical: 5,
        borderRadius: 5,
        borderColor: '#2C394B'
    }
});

export default Login