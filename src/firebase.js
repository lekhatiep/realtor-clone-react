// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXk9X8L4MCkKUykJLbvQbjhBqC2weYOlQ",
  authDomain: "realtor-clone-react-ff6d5.firebaseapp.com",
  projectId: "realtor-clone-react-ff6d5",
  storageBucket: "realtor-clone-react-ff6d5.appspot.com",
  messagingSenderId: "142731332283",
  appId: "1:142731332283:web:02320735cd0adbb2c0379e"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();