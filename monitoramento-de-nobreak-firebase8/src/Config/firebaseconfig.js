// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  authDomain: "teste-2a807.firebaseapp.com",
  databaseURL: "https://teste-2a807-default-rtdb.firebaseio.com",
  projectId: "teste-2a807",
  storageBucket: "teste-2a807.appspot.com",
  messagingSenderId: "863468657844",
  appId: "1:863468657844:web:2610df93590ae32899cbe1",
  measurementId: "G-PRJ5P1N0QH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
