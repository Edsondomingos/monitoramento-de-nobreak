// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCJ5QsSE3ikoavnaqP93qJE_KQyYF8Xliw",
//   authDomain: "nobreak-b714a.firebaseapp.com",
//   projectId: "nobreak-b714a",
//   storageBucket: "nobreak-b714a.appspot.com",
//   messagingSenderId: "987534923711",
//   appId: "1:987534923711:web:f80c12033fc46ebd50730a"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);

import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDs7UfeiXZkKtYU8x6YE4bZbwLnhOP8Fdg",
  authDomain: "teste-2a807.firebaseapp.com",
  databaseURL: "https://teste-2a807-default-rtdb.firebaseio.com",
  projectId: "teste-2a807",
  storageBucket: "teste-2a807.appspot.com",
  messagingSenderId: "863468657844",
  appId: "1:863468657844:web:2610df93590ae32899cbe1",
  measurementId: "G-PRJ5P1N0QH"
  };
firebase.initializeApp(firebaseConfig);
export default firebase