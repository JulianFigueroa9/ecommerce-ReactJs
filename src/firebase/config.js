// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkf77CH4bpetCWc7lnsr5d0BHZQSb0Xh4",
  authDomain: "ecommerce-julian98.firebaseapp.com",
  projectId: "ecommerce-julian98",
  storageBucket: "ecommerce-julian98.appspot.com",
  messagingSenderId: "830434215887",
  appId: "1:830434215887:web:32dbb56bd755dbab01b4ba",
  measurementId: "G-RF2ESVZK2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () =>{
    return app;
}