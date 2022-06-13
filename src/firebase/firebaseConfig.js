import { initializeApp } from 'firebase/app'
import { getFirestore, collection, doc, setDoc, addDoc, Timestamp } from 'firebase/firestore'

import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


 const firebaseConfig = {
  apiKey: "AIzaSyDDqKwJ0juVWCSAVgthF0z3PKoyzJa7A1A",
  authDomain: "journal-app-9da91.firebaseapp.com",
  projectId: "journal-app-9da91",
  storageBucket: "journal-app-9da91.appspot.com",
  messagingSenderId: "428793471182",
  appId: "1:428793471182:web:20754cdc7fe1622e4c309f"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const googleAuthProvider = new GoogleAuthProvider()
const auth = getAuth()

export {
  auth,
  googleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  Timestamp,
  db, collection, doc, setDoc, addDoc
}