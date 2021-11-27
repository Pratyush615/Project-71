import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyBtJF32-ywHbH_jY5KolhXetSZD60tIsZw",
    authDomain: "storyhub-9814e.firebaseapp.com",
    projectId: "storyhub-9814e",
    storageBucket: "storyhub-9814e.appspot.com",
    messagingSenderId: "648979822735",
    appId: "1:648979822735:web:8a9fbcb797d48a35a498fa"
  };

firebase.initializeApp(firebaseConfig)

export default firebase.firestore()