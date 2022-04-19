// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnf0FLHgXaXA-VxzgkD2eElK72HGzMHQA",
  authDomain: "memory-retention-29e99.firebaseapp.com",
  projectId: "memory-retention-29e99",
  storageBucket: "memory-retention-29e99.appspot.com",
  messagingSenderId: "698628831194",
  appId: "1:698628831194:web:60425332016c89324bb2e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app)

export default auth;