// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyKjed-7DhX31gIXIzyJETQSmdA5u-NTo",
  authDomain: "bioco-tech-b0193.firebaseapp.com",
  projectId: "bioco-tech-b0193",
  storageBucket: "bioco-tech-b0193.appspot.com",
  messagingSenderId: "147536987176",
  appId: "1:147536987176:web:d1f4db52a34040917f211d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)