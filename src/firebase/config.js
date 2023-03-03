// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import "firebase/firestore"
import 'firebase/auth'
import 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOmbzfNrfjD6s5yjVmpFjD1q7m5YSZ60M",
  authDomain: "chat-app-6f747.firebaseapp.com",
  projectId: "chat-app-6f747",
  storageBucket: "chat-app-6f747.appspot.com",
  messagingSenderId: "107513632275",
  appId: "1:107513632275:web:ed292db850510f3d8951e6",
  measurementId: "G-4L1VHE84VG",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

auth.useEmulator('http://localhost:9099');
if (window.location.hostname === 'localhost') {
  db.useEmulator('localhost', '8080');
}
export { db, auth };
  
export default firebase;
