import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  databaseURL: 'https://yet-project-74379-default-rtdb.europe-west1.firebasedatabase.app/',
  apiKey: "AIzaSyB815HMf8m7i1BVVJhWwfECUAYOOYMQcGo",
  authDomain: "yet-project-74379.firebaseapp.com",
  projectId: "yet-project-74379",
  storageBucket: "yet-project-74379.appspot.com",
  messagingSenderId: "742198646600",
  appId: "1:742198646600:web:133fb6295d2e9c9757457d"
};

let Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;
