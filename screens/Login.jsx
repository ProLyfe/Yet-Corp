import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AuthForm from '../components/AuthForm';
import FlatButton from '../components/FlatButton';
import Firebase from '../firebase';

const Login = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  
  const login = () => {
    Firebase.auth()
    .signInWithEmailAndPassword(email, password)
      .then(user =>{
        navigation.navigate('Home')
      })
      .catch(err =>{
        if (err.code === 'auth/email-already-in-use') {
          setErrorMessage('| Le mail est déjà utilisé')
        };
    
        if (err.code === 'auth/invalid-email') {
          setErrorMessage('| Le mail est invalide')
        };
      });
  };

  const goRegister = () => {
    navigation.navigate('Register')
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <Image source={require('../assets/yet-logo.png')} style={styles.logo}/>
            <View style={styles.inputContainer}>
                <AuthForm title="Email" placeholder="Entrer votre email" onChangeText={setEmail} errorMessage={errorMessage}/>
                <AuthForm title="Mot de passe" placeholder="Entrer votre mot de passe" onChangeText={setPassword}/>
            </View>
            <FlatButton backgroundColor="black" textColor="white" text="se connecter" onPress={login} />
            <FlatButton backgroundColor="white" textColor="black" text="s'enregistrer" onPress={goRegister} />
        </View>
    </TouchableWithoutFeedback>
  );
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
    },
});

export default Login;