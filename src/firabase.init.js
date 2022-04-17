
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDr1Vv6JZ2uLrC0FXweMPWyqAWVxcVL3U",
    authDomain: "takepic-f1d3a.firebaseapp.com",
    projectId: "takepic-f1d3a",
    storageBucket: "takepic-f1d3a.appspot.com",
    messagingSenderId: "865067107331",
    appId: "1:865067107331:web:beaa342c2bf9857d4f3a36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
