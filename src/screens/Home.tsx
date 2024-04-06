import React, { useState } from "react";
import { View, Text, Button, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
    const goBack = () => {
        navigation.reset({
            index: 0,
            routes: [{name: 'Login'}],
          });
    }
    return (
        <View style={styles.container}>
            <Button title={"Logout"} onPress={goBack}></Button>
            <Text style={styles.title}>Mission completed!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#003f5c",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#fb5b5a"
    }
})

export default Home;