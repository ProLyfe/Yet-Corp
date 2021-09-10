import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ActionButton = ({ title, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{title}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 15,
        borderColor: 'black',
        borderWidth: 1,
        width: 100
    },
    buttonText: {
        textAlign: 'center'
    }
});

export default ActionButton;