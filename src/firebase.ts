import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIL3rOdfg8joJIz0pZ9CUJ5BHw__YIbaM",
  authDomain: "social-media-app-98f7f.firebaseapp.com",
  projectId: "social-media-app-98f7f",
  storageBucket: "social-media-app-98f7f.firebasestorage.app",
  messagingSenderId: "830449186692",
  appId: "1:830449186692:web:b6c8fced8ac01167048fd1",
  measurementId: "G-QL3KP36Y9H",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
