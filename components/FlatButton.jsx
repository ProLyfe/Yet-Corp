import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const FlatButton = ({ backgroundColor, textColor, text, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <View style={{...styles.buttonContainer, backgroundColor: backgroundColor}}>
            <Text style={{...styles.buttonText, color: textColor}}>{text.toUpperCase()}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    buttonContainer: {
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 20,
        width: 200
    },
    buttonText: {
        padding: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default FlatButton;