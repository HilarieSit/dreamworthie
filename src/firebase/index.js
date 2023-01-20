// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMM4sj1QtyKN7ImEpDKqE2WRinffr68SU",
  authDomain: "dreamworthie-auth.firebaseapp.com",
  projectId: "dreamworthie-auth",
  storageBucket: "dreamworthie-auth.appspot.com",
  messagingSenderId: "296359929427",
  appId: "1:296359929427:web:04362582934243768808a6",
  measurementId: "G-T6WPFFVL1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth }