import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhtlTnsmhFUcuuUQEarnObzFRCQnHb2-o",
    authDomain: "movies-project2-c6b37.firebaseapp.com",
    projectId: "movies-project2-c6b37",
    storageBucket: "movies-project2-c6b37.appspot.com",
    messagingSenderId: "1091767996638",
    appId: "1:1091767996638:web:67ad4de4efa3a8d6e6724f"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const projectFirestore = firebase.firestore();

export { projectFirestore };