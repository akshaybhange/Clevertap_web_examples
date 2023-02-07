
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBr0R7zkD-2VW4vz6xUiutd-WWDW9CeBBw",
    authDomain: "akshaydemo-190c4.firebaseapp.com",
    projectId: "akshaydemo-190c4",
    storageBucket: "akshaydemo-190c4.appspot.com",
    messagingSenderId: "874549939173",
    appId: "1:874549939173:web:fb33d46a32b1a67221fd0c",
    measurementId: "G-WNPEH6PX6Q"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
