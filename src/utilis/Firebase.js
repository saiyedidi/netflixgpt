// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR9M1BaK3T42US963zXRw2EZTuDT8WiRE",
  authDomain: "netflixgpt-25251.firebaseapp.com",
  projectId: "netflixgpt-25251",
  storageBucket: "netflixgpt-25251.appspot.com",
  messagingSenderId: "795887607135",
  appId: "1:795887607135:web:c4cd9111d32cdff3966aea",
  measurementId: "G-Z1DJMLS1RF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();