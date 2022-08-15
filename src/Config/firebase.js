/*import firebase from "firebase"
import "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyBYeToSanRH_Q4dexpn0sl7j-yi5D4IHgk",
    authDomain: "login-a01ad.firebaseapp.com",
    projectId: "login-a01ad",
    storageBucket: "login-a01ad.appspot.com",
    messagingSenderId: "683392104723",
    appId: "1:683392104723:web:db9d38599b0705bd3a02e6"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase*/

  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH3OFlxNP01-3b4e_-vwQ3Oc6r2eupNIs",
  authDomain: "monitoramentonobreak-3f9fd.firebaseapp.com",
  projectId: "monitoramentonobreak-3f9fd",
  storageBucket: "monitoramentonobreak-3f9fd.appspot.com",
  messagingSenderId: "6154950518",
  appId: "1:6154950518:web:47205e1ccc5f17232acc57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);