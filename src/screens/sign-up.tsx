import React, { useState } from "react";
import { usernameValidator } from "../helpers/username-validator";
import { passwordValidator } from "../helpers/password-validator";
import { emailValidator } from "../helpers/email-validator";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Image } from "react-native";
import BackButton from "../components/back-button";
import AsyncStorage from "@react-native-async-storage/async-storage";

function SignUp({ navigation }) {
    const [username, setUsername] = useState({ value: "", error: "" })
    const [password, setPassword] = useState({ value: "", error: "" })
    const [email, setEmail] = useState({ value: "", error: "" })
    const [visiblePassword, setVisiblePassword] = useState(false)

    const onPressSignUp = () => {
        const usernameErr = usernameValidator(username.value)
        const passwordErr = passwordValidator(password.value)
        const emailErr = emailValidator(email.value)

        if (usernameErr || passwordErr || emailErr) {
            setUsername({ ...username, error: usernameErr })
            setPassword({ ...password, error: passwordErr })
            setEmail({ ...email, error: emailErr })
            return
        }

        const credential = { email: email.value, username: username.value, password: password.value }
        storeData(credential)

        navigation.navigate("Login")
    }

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('credential', jsonValue)
            await getStoredData()
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <BackButton style={styles.backButton} goBack={navigation.goBack}></BackButton>
            <View style={styles.container}>
                <Text style={styles.title}>Sign up</Text>

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
                        <View style={styles.passwordContainer}>
                            <TextInput
                                secureTextEntry={!visiblePassword}
                                style={styles.textField}
                                placeholder="Password"
                                placeholderTextColor="#003f5c"
                                onChangeText={text => setPassword({ value: text, error: "" })}></TextInput>
                            <TouchableOpacity onPress={() => setVisiblePassword(!visiblePassword)}>
                                <Image
                                    source={require("../assets/view.png")}
                                    style={styles.viewImage}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={styles.errorText}>{password.error}</Text><Text />
                </View>

                <TouchableOpacity style={styles.signupButton} onPress={onPressSignUp}>
                    <Text style={styles.signupText}>SIGN UP</Text>
                </TouchableOpacity>
            </View >
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#003f5c"
    },
    viewImage: {
        width: 24,
        height: 24,
        tintColor: "white",
        right: 0,
        position: "absolute",
        bottom: -4
    },
    backButton: {
        marginLeft: 10,
        marginTop: 10
    },
    container: {
        backgroundColor: '#003f5c',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 100
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
    signupButton: {
        backgroundColor: "#fb5b5a",
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        marginTop: 40,
        borderRadius: 25
    },
    signupText: {
        color: "white",
        fontWeight: "bold"
    }
})

export default SignUp;