// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB-DI8MboKZa-1CwKz5wpzbNK5sIg84zk",
  authDomain: "bong-doc.firebaseapp.com",
  projectId: "bong-doc",
  storageBucket: "bong-doc.appspot.com",
  messagingSenderId: "798848224795",
  appId: "1:798848224795:web:0144813bf3b2d922c9f2be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;