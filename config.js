import firebase from "firebase";
require("@firebase/firestore");



const firebaseConfig = {
    apiKey: "AIzaSyDbFHZITCohmqQz1X-3zygJ4eOqU4Z2J3g",
    authDomain: "biblioteca-digital-d955e.firebaseapp.com",
    projectId: "biblioteca-digital-d955e",
    storageBucket: "biblioteca-digital-d955e.appspot.com",
    messagingSenderId: "830102841441",
    appId: "1:830102841441:web:dbe72c50db96bb5beee220"
  };



firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


