import firebase from 'firebase/app'
// import { initializeApp } from "firebase/app";
// Optionally import the services that you want to use
import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
//   apiKey: 'api-key',
//   authDomain: 'project-id.firebaseapp.com',
  databaseURL: 'https://yet-project-74379-default-rtdb.europe-west1.firebasedatabase.app/',
//   projectId: 'project-id',
//   storageBucket: 'project-id.appspot.com',
//   messagingSenderId: 'sender-id',
//   appId: 'app-id',
//   measurementId: 'G-measurement-id',
  apiKey: "AIzaSyB815HMf8m7i1BVVJhWwfECUAYOOYMQcGo",
  authDomain: "yet-project-74379.firebaseapp.com",
  projectId: "yet-project-74379",
  storageBucket: "yet-project-74379.appspot.com",
  messagingSenderId: "742198646600",
  appId: "1:742198646600:web:133fb6295d2e9c9757457d"
};

let Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;
// const app = initializeApp(firebaseConfig);