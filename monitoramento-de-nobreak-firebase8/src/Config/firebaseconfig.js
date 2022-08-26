// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCJ5QsSE3ikoavnaqP93qJE_KQyYF8Xliw",
  authDomain: "nobreak-b714a.firebaseapp.com",
  projectId: "nobreak-b714a",
  storageBucket: "nobreak-b714a.appspot.com",
  messagingSenderId: "987534923711",
  appId: "1:987534923711:web:f80c12033fc46ebd50730a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
