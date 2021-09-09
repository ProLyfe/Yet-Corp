import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AuthForm from '../components/AuthForm';
import FlatButton from '../components/FlatButton';
import Firebase from '../firebase';

const Register = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = () => {
    Firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      // console.log('User account created & signed in!');
      navigation.navigate('Login')
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.error(error);
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <Image source={require('../assets/yet-logo.png')} style={styles.logo}/>
            <View style={styles.inputContainer}>
                <AuthForm title="Email" placeholder="Entrer votre email" onChangeText={setEmail}/>
                <AuthForm title="Mot de passe" placeholder="Entrer votre mot de passe" onChangeText={setPassword}/>
            </View>
            <FlatButton backgroundColor="white" textColor="black" text="s'enregistrer" onPress={register}/>
        </View>
    </TouchableWithoutFeedback>
  ) 
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
    },
    logo: {
      height: 150,
      width: 150,
      marginTop: -70
    },
    inputContainer: {
        marginTop: 10
    }
  });

export default Register;