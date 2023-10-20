import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({ onPress, text, type = 'PRIMARY', bgColor, fgColor }) => {
    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.container,
                styles[`container_${type}`],
                bgColor ? { backgroundColor: bgColor } : {},
            ]}>
            <Text
                style={[
                    styles.text,
                    styles[`text_${type}`],
                    fgColor ? { color: fgColor } : {},
                ]}>
                {text}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 8,
        marginVertical: 5,
        marginRight:8,
        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY: {
        backgroundColor: 'white',
        borderColor:'red',
        borderWidth:1
    },

    container_SECONDARY: {
        backgroundColor:'red',
        borderColor: 'red',
        borderWidth: 1,
    },

    text: {
        color: 'red',
        fontSize:11
    },

    text_SECONDARY: {
        color: 'white',
    },
});

export default CustomButton;