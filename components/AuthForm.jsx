import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const AuthForm = ({ title, placeholder, onChangeText }) => (
       <View style={styles.container}>
           <Text style={styles.text}>{title}</Text>
            <TextInput
            placeholder={placeholder}
            placeholderTextColor="black"
            keyboardType="email-address"
            style={styles.input}
            onChangeText={text => onChangeText(text)}
            />
       </View>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 15
    },
    text: {
        fontWeight: 'bold'
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        width: 240,
        marginTop: 3
    }
});


export default AuthForm;