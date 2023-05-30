// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, setDoc, addDoc, serverTimestamp, FieldValue, where, orderBy, query } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, connectDatabaseEmulator} from "firebase/database"
import { getAuth, FacebookAuthProvider, signInWithPopup, onAuthStateChanged, getAdditionalUserInfo, connectAuthEmulator } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAN2ougO9SXnhxdtEqbL_W9lDCpr5g1lVM",
    authDomain: "interactive-chat-app-c1945.firebaseapp.com",
    projectId: "interactive-chat-app-c1945",
    storageBucket: "interactive-chat-app-c1945.appspot.com",
    messagingSenderId: "829348004157",
    appId: "1:829348004157:web:0f71a191172a3a496f0554",
    measurementId: "G-G2SQ6G2YJV"
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
    auth, FacebookAuthProvider,
    signInWithPopup, onAuthStateChanged, getAdditionalUserInfo,
    FieldValue, serverTimestamp, getDatabase
};  