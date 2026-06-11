// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC24Y2HhSWzQbEY0GGA8TRIFJuIWyp_Zf0",
  authDomain: "forschung-122fa.firebaseapp.com",
  projectId: "forschung-122fa",
  storageBucket: "forschung-122fa.firebasestorage.app",
  messagingSenderId: "730755344587",
  appId: "1:730755344587:web:2816fce4114e3efcd8934e",
  measurementId: "G-5CDQQ7TMS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);