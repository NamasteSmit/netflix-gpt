// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth , createUserWithEmailAndPassword} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRp6GOfirrcqFfWQ0SZGqcoxgyk-9I348",
  authDomain: "netflixgpt-80ed1.firebaseapp.com",
  projectId: "netflixgpt-80ed1",
  storageBucket: "netflixgpt-80ed1.appspot.com",
  messagingSenderId: "13038656943",
  appId: "1:13038656943:web:72c297d29283833255a35a",
  measurementId: "G-X67S4M5NSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();