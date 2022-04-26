// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVEg9zoXQADuigtziHIioOuQNJzzhf-pE",
  authDomain: "walton-refrigerator-support.firebaseapp.com",
  projectId: "walton-refrigerator-support",
  storageBucket: "walton-refrigerator-support.appspot.com",
  messagingSenderId: "782877502226",
  appId: "1:782877502226:web:7480d92c315e99a85c21cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;