// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyoXS7usGBURELOae_xyb169vwRYrPVNY",
  authDomain: "clone-610d6.firebaseapp.com",
  projectId: "clone-610d6",
  storageBucket: "clone-610d6.appspot.com",
  messagingSenderId: "416217870816",
  appId: "1:416217870816:web:be7dfe84a5b16719ab3b85",
  measurementId: "G-WL9X284GXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider  = new GoogleAuthProvider()

export {auth,provider};