// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF5rLWiH-qJCfbiEzUOXGCApHwj_7Bb5U",
  authDomain: "warpyoonai-d4126.firebaseapp.com",
  projectId: "warpyoonai-d4126",
  storageBucket: "warpyoonai-d4126.appspot.com",
  messagingSenderId: "460458802314",
  appId: "1:460458802314:web:85a1db14ff804cba464173"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };