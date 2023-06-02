// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, setDoc, addDoc, serverTimestamp, FieldValue, where, orderBy, query } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, connectDatabaseEmulator } from "firebase/database"
import { getAuth, FacebookAuthProvider,GoogleAuthProvider, signInWithPopup, onAuthStateChanged, getAdditionalUserInfo, connectAuthEmulator } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC8g9ZxVMv_NKRuSvUoT8f7SdoS8ue7DiA",
    authDomain: "interactive-chart-app.firebaseapp.com",
    projectId: "interactive-chart-app",
    storageBucket: "interactive-chart-app.appspot.com",
    messagingSenderId: "106944690721",
    appId: "1:106944690721:web:b623c47bbffdc559f9c160",
    measurementId: "G-CCPJ98FGKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

// Initialize Service
const db = getFirestore(app);

// connectAuthEmulator(auth,'http://localhost:9099')
// if(window.location.hostname === 'localhost') {
//     connectDatabaseEmulator(db, 'localhost', 8080)
// }


export {
    query, where, orderBy, db, collection, doc, getDocs, setDoc, addDoc,
    auth, FacebookAuthProvider,GoogleAuthProvider,
    signInWithPopup, onAuthStateChanged, getAdditionalUserInfo,
    FieldValue, serverTimestamp, getDatabase
};  