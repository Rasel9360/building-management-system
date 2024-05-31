// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP98vzmkuCVCI5yvPrD8h_RLn7lziHejw",
  authDomain: "assignment-twelve-1044b.firebaseapp.com",
  projectId: "assignment-twelve-1044b",
  storageBucket: "assignment-twelve-1044b.appspot.com",
  messagingSenderId: "674864108598",
  appId: "1:674864108598:web:d0f8532089dcc64b2fb497"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;