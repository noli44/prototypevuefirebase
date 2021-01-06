import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAi47pyIuJWGjITsbTW-L5-WN79SF5r4oM",
    authDomain: "servicestacks.firebaseapp.com",
    databaseURL: "https://servicestacks-default-rtdb.firebaseio.com",
    projectId: "servicestacks",
    storageBucket: "servicestacks.appspot.com",
    messagingSenderId: "404723895288",
    appId: "1:404723895288:web:a5f6f007e16724b984e40d",
    measurementId: "G-1G49P2LB60"
  };

export default firebase.initializeApp(firebaseConfig);

