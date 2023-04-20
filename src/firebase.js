import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAkOvng95nUpBlaJqvYEfQRB_35oNm36EA",
  authDomain: "chatapp-60dab.firebaseapp.com",
  projectId: "chatapp-60dab",
  storageBucket: "chatapp-60dab.appspot.com",
  messagingSenderId: "531577080837",
  appId: "1:531577080837:web:8a217e4b280eabc547606c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();