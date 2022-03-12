import * as firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA2uGw7nM1S4iYDhzhVgvURnl07PSYlRK4",
  authDomain: "tripplanner-9b05d.firebaseapp.com",
  databaseURL: "https://tripplanner-9b05d-default-rtdb.firebaseio.com",
  projectId: "tripplanner-9b05d",
  storageBucket: "tripplanner-9b05d.appspot.com",
  messagingSenderId: "1077597827775",
  appId: "1:1077597827775:web:b7cadaad7d54ed37b28c0a",
  measurementId: "G-5SBRM1G95T"
};

  const app = initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };