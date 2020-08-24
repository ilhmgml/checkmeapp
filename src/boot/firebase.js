// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAzlscUiFGSLBhyWe_7p01yGRVwuUiAncs",
  authDomain: "checkmeappdb.firebaseapp.com",
  databaseURL: "https://checkmeappdb.firebaseio.com",
  projectId: "checkmeappdb",
  storageBucket: "checkmeappdb.appspot.com",
  messagingSenderId: "1045249126708",
  appId: "1:1045249126708:web:9b5a79e34701b4dd26b561"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }