// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2Kdc7Eekz-zsrXUtusxrXyylzAbi7q7s",
  authDomain: "e-commerce-react-b2cff.firebaseapp.com",
  projectId: "e-commerce-react-b2cff",
  storageBucket: "e-commerce-react-b2cff.firebasestorage.app",
  messagingSenderId: "70576676058",
  appId: "1:70576676058:web:0cf194d3c4f1585aa419e3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);