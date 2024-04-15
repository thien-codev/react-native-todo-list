import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, SafeAreaView, ActivityIndicator } from "react-native";
import BackButton from "../components/back-button";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ResetPassword = ({ navigation }) => {
    const [email, setEmail] = useState({ value: "", error: "" })
    const [password, setPassword] = useState({ value: "", error: "" });
    const [isLoading, setIsLoading] = useState(false)
    const [isValidEmail, setIsValidEmail] = useState(false);

    const onAction = async () => {
        setIsLoading(true)
        if (!isValidEmail) {
            const credential = await findCredentialByEmail()
            if (credential.email == email.value) {
                console.log(credential.email, email.value)
                setIsValidEmail(true)
            } else {
                console.log(credential.email, email.value)
                setIsValidEmail(false)
                showWrongEmail()
            }
        } else {
            await saveNewPassword()
            navigation.replace("Login")
        }
        setIsLoading(false)
    }

    const findCredentialByEmail = async () => {
        try {
            const value = await AsyncStorage.getItem("credential")
            if (value !== null) {
                return JSON.parse(value)
            }
        } catch (e) {
            console.log(e)
        }
    }

    const saveNewPassword = async () => {
        try {
            const credential = await findCredentialByEmail()
            credential.password = password.value
            const jsonValue = JSON.stringify(credential)
            await AsyncStorage.setItem('credential', jsonValue)
        } catch (e) {
            console.log(e)
        }
    }

    const showWrongEmail = () =>
    Alert.alert('Reset fail', 'Incorrect email.', [
      {
        text: 'Ok',
        style: 'cancel',
      },
    ]);

    return (
        <SafeAreaView style={styles.safeArea}>
            <BackButton style={styles.backButton} goBack={navigation.goBack}></BackButton>
            <View style={styles.containerOfContainer}>
                <View style={styles.container}>
                    <Text style={styles.title}>Reset password</Text>
                    <View style={styles.inputView}>
                        <View style={styles.inputTextView}>
                            <TextInput
                                style={styles.textField}
                                placeholder="Email"
                                placeholderTextColor="#003f5c"
                                onChangeText={text => setEmail({ value: text, error: "" })}></TextInput>
                        </View>
                        <Text style={styles.errorText}>{email.error}</Text><Text />
                    </View>
                    {(() => {
                        if (isValidEmail) {
                            return (
                                <View style={{ width: "100%" }}>
                                    <View style={styles.inputView}>
                                        <View style={styles.inputTextView}>
                                            <TextInput
                                                secureTextEntry
                                                style={styles.textField}
                                                placeholder="New password"
                                                placeholderTextColor="#003f5c" />
                                        </View>
                                        <Text style={styles.errorText}>{email.error}</Text><Text />
                                    </View>

                                    <View style={styles.inputView}>
                                        <View style={styles.inputTextView}>
                                            <TextInput
                                                secureTextEntry
                                                style={styles.textField}
                                                placeholder="Repeat password"
                                                placeholderTextColor="#003f5c"
                                                onChangeText={text => setPassword({ value: text, error: "" })}></TextInput>
                                        </View>
                                        <Text style={styles.errorText}>{email.error}</Text><Text />
                                    </View>
                                </View>
                            )
                        }
                    })()}


                    <TouchableOpacity style={styles.loginButton} onPress={onAction}>
                        <Text style={styles.loginText}>{isValidEmail ? "SAVE" : "FIND"}</Text>
                    </TouchableOpacity>
                </View>
                {isLoading && <ActivityIndicator style={styles.loadingIndicator}></ActivityIndicator>}
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#003f5c"
    },
    backButton: {
        marginLeft: 10,
        marginTop: 10
    },
    container: {
        backgroundColor: '#003f5c',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerOfContainer: {
        backgroundColor: '#003f5c',
        flex: 1,
        justifyContent: 'center'
    },
    loadingIndicator: {
        position: 'absolute',
        left: "48%"
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#fb5b5a",
        marginBottom: 20
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

export default ResetPassword;