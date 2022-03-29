import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8BEnZEvdx1LeiMTfuqjxuasdyUirbuHc",
  authDomain: "sign-up-665e7.firebaseapp.com",
  projectId: "sign-up-665e7",
  storageBucket: "sign-up-665e7.appspot.com",
  messagingSenderId: "400913918043",
  appId: "1:400913918043:web:ad1d38342cba80a1df377e",
  measurementId: "G-25Z12YQW6G"
};

// Initialize Firebase
const FirebaseApp = firebase.initializeApp(firebaseConfig);
const db = FirebaseApp.firestore();
const auth = getAuth();

export default FirebaseApp;
export { db, auth };


