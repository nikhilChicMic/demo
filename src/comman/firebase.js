// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwjqcuDeEPZURj2BftLCTciMd2mdZLLWg",
  authDomain: "fir-dd83a.firebaseapp.com",
  projectId: "fir-dd83a",
  storageBucket: "fir-dd83a.appspot.com",
  messagingSenderId: "1025066172223",
  appId: "1:1025066172223:web:1f2ddc154a231e7fd2dd8a",
  measurementId: "G-5S2RN9KXYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// var auth = firebase.auth();
// var provider = new firebase.auth.GoogleAuthProvider(); 
// export {auth , provider};
export {analytics}