import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

function Login({ navigation }) {
    const [username, setUsername] = useState({ value: "", error: "" })
    const [password, setPassword] = useState({ value: "", error: "" })

    const onPressLogin = () => {
        console.log("Login with username: " + username.value + " password: " + password.value)
        navigation.navigate("Home")
    }
    const onPressForgotPassword = () => {
        console.log("Login with username: " + username.value + " password: " + password.value)
    }
    const onPressSignUp = () => {
        console.log("Login with username: " + username.value + " password: " + password.value)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>React Native</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.textField}
                    placeholder="Username"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setUsername({ value: text, error: "" })}></TextInput>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    secureTextEntry
                    style={styles.textField}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setPassword({ value: text, error: "" })}></TextInput>
            </View>
            <TouchableOpacity onPress={onPressForgotPassword}>
                <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} onPress={onPressLogin}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressSignUp}>
                <Text style={styles.signUp}>Sign up</Text>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#003f5c',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 50,
        fontWeight: "bold",
        color: "#fb5b5a"
    },
    inputView: {
        width: "80%",
        backgroundColor: "#465881",
        marginTop: 20,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        paddingLeft: 20,
        paddingRight: 20
    },
    textField: {
        color: "white"
    },
    forgotPassword: {
        color: "white",
        fontWeight: "bold",
        marginTop: 10
    },
    loginButton: {
        backgroundColor: "#fb5b5a",
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        marginTop: 40,
        borderRadius: 25
    },
    loginText: {
        color: "white",
        fontWeight: "bold"
    },
    signUp: {
        color: "white",
        fontWeight: "bold",
        marginTop: 10
    }
})

export default Login;