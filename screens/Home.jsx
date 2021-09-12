import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TextInput, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import ActionButton from '../components/ActionButton';
import Firebase from '../firebase';

const Home = () => {

  const [tasks, setTasks] = useState([]);;

  const addInput = () => {
    setTasks(prevState => [
      { key: Math.random().toString(), text: '' },
      ...prevState,
    ]);
  };

  const sendData = () => {
    console.log('tasks :', tasks)
    Firebase.database()
      .ref('/tasks')
      .set(tasks)
      .then(() => {
        Alert.alert("Succès", "Vos messages ont bien été envoyé", [
          { text: "Ok", onPress: () => Keyboard.dismiss()}
        ]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <View style={styles.textInputContainer}>
                <TextInput
                  placeholder={item.text}
                  placeholderTextColor="black"
                  style={styles.input}
                  onChangeText={textValue => item.text = textValue}
                />
              </View>
          )}/>
          <View style={styles.buttonContainer}>
            <ActionButton title="Envoyer" onPress={sendData}/>
            <ActionButton title="Ajouter" onPress={addInput}/>
          </View>
      </View>
    </TouchableWithoutFeedback>
  )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      width: '100%'
    },
    input: {
      borderColor: 'black',
      borderBottomWidth: 1,
      padding: 10,
      backgroundColor: 'white',
      width: 240,
      marginTop: 3
    },
    textInputContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }
  });

export default Home;
