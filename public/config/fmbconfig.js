 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
  import {  signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAYvMZHL4rq69sU60RSlIGIyM2doedrIJk",
    authDomain: "car-showroom-36398.firebaseapp.com",
    projectId: "car-showroom-36398",
    storageBucket: "car-showroom-36398.appspot.com",
    messagingSenderId: "904188511848",
    appId: "1:904188511848:web:0e7788ac3a2bcf2f7d1ddd"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)

  export{auth, createUserWithEmailAndPassword , signInWithEmailAndPassword}