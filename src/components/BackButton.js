import React from "react";
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default function BackButton({ style, goBack }) {
    return (
        <TouchableOpacity onPress={goBack} style={style}>
            <Image
                source={require("../assets/arrow_back.png")}
                style={styles.image}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 24,
        height: 24,
        tintColor: "white"
    }
})