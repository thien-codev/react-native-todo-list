import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, SafeAreaView, ActivityIndicator } from "react-native";
import BackButton from "../components/BackButton";
import { useState } from "react";

const ResetPassword = ({ navigation }) => {
    const [email, setEmail] = useState({ value: "", error: "" })
    const [isLoading, setIsLoading] = useState(false)

    const onPressLogin = () => {

    }

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

                    <View style={styles.inputView}>
                        <View style={styles.inputTextView}>
                            <TextInput
                                secureTextEntry
                                style={styles.textField}
                                placeholder="New password"
                                placeholderTextColor="#003f5c"
                                onChangeText={text => setEmail({ value: text, error: "" })}></TextInput>
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
                                onChangeText={text => setEmail({ value: text, error: "" })}></TextInput>
                        </View>
                        <Text style={styles.errorText}>{email.error}</Text><Text />
                    </View>

                    <TouchableOpacity style={styles.loginButton} onPress={onPressLogin}>
                        <Text style={styles.loginText}>SAVE</Text>
                    </TouchableOpacity>
                </View>
                <ActivityIndicator style={styles.loadingIndicator}></ActivityIndicator>
            </View >

            {/* <View style={styles.inputView}>
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
                </View> */}


        </SafeAreaView>
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

export default ResetPassword;