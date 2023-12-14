// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "propertyprovision-11c96.firebaseapp.com",
    projectId: "propertyprovision-11c96",
    storageBucket: "propertyprovision-11c96.appspot.com",
    messagingSenderId: "189315759951",
    appId: "1:189315759951:web:d079ce968cb3d86dfd8f3a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
