import React, { useState } from "react";
import { usernameValidator } from "../helpers/usernameValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Login({ navigation }) {
    const [username, setUsername] = useState({ value: "", error: "" })
    const [password, setPassword] = useState({ value: "", error: "" })

    const onPressLogin = async () => {
        const usernameErr = usernameValidator(username.value)
        const passwordErr = passwordValidator(password.value)

        if (usernameErr || passwordErr) {
            setUsername({ ...username, error: usernameErr })
            setPassword({ ...password, error: passwordErr })
            return
        }
        const credential = await getCredential()
        if (credential.username == username.value && credential.password == password.value) {
            navigation.reset({
                index: 0,
                routes: [{ name: "Home" }]
            })
        } else {
            showWrongCredentialAlert()
        }
    }
    const onPressForgotPassword = () => {
        navigation.navigate("ResetPassword")
    }
    const onPressSignUp = () => {
        navigation.navigate("SignUp")
    }

    const getCredential = async () => {
        try {
            const value = await AsyncStorage.getItem("credential")
            if (value !== null) {
                return JSON.parse(value)
            }

        } catch (e) {
            console.log(e)
        }
    }

    const showWrongCredentialAlert = () =>
        Alert.alert('Login fail', 'Incorrect username or password.', [
            {
                text: 'Ok',
                style: 'cancel',
            }
        ]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>React Native</Text>
            <View style={styles.inputView}>
                <View style={styles.inputTextView}>
                    <TextInput
                        style={styles.textField}
                        placeholder="Username"
                        placeholderTextColor="#003f5c"
                        onChangeText={text => setUsername({ value: text, error: "" })}></TextInput>
                </View>
                <Text style={styles.errorText}>{username.error}</Text><Text />
            </View>
            <View style={styles.inputView}>
                <View style={styles.inputTextView}>
                    <TextInput
                        secureTextEntry
                        style={styles.textField}
                        placeholder="Password"
                        placeholderTextColor="#003f5c"
                        onChangeText={text => setPassword({ value: text, error: "" })}></TextInput>
                </View>
                <Text style={styles.errorText}>{password.error}</Text><Text />
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
    inputTextView: {
        backgroundColor: "#465881",
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        paddingLeft: 20,
        paddingRight: 20
    },
    inputView: {
        width: "100%",
        marginTop: 26,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        paddingLeft: 20,
        paddingRight: 20
    },
    errorText: {
        fontSize: 12,
        fontWeight: "bold",
        fontStyle: "italic",
        color: "#fb5b5a",
        marginLeft: 20
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