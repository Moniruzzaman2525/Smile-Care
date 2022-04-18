// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5IKkEM8h-dN3fG2EkvAewsvYg8FIh4aA",
    authDomain: "assigment-10-7d6db.firebaseapp.com",
    projectId: "assigment-10-7d6db",
    storageBucket: "assigment-10-7d6db.appspot.com",
    messagingSenderId: "309224285237",
    appId: "1:309224285237:web:20012e11d1951d43cdbd7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;