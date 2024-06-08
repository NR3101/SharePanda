// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "web-projects-36848.firebaseapp.com",
  projectId: "web-projects-36848",
  storageBucket: "web-projects-36848.appspot.com",
  messagingSenderId: "796816756493",
  appId: "1:796816756493:web:b7634fc057f6c8fe54aa44",
  measurementId: "G-VG46Y2Z0TK",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
