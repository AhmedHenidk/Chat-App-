import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCFjA2gnUre8ThvD9RfsvD_LYbm01ovLTw",
  authDomain: "chat-app-14362.firebaseapp.com",
  projectId: "chat-app-14362",
  storageBucket: "chat-app-14362.appspot.com",
  messagingSenderId: "338435016469",
  appId: "1:338435016469:web:99ea8076775ace09604b1c",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();
