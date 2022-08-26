// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJ5QsSE3ikoavnaqP93qJE_KQyYF8Xliw",
  authDomain: "nobreak-b714a.firebaseapp.com",
  projectId: "nobreak-b714a",
  storageBucket: "nobreak-b714a.appspot.com",
  messagingSenderId: "987534923711",
  appId: "1:987534923711:web:f80c12033fc46ebd50730a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);