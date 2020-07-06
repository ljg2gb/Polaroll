import * as firebase from 'firebase';
import "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBLUvii_-ooHndB9fePUMmtugES9_3ALlk",
  authDomain: "polaroll.firebaseapp.com",
  databaseURL: "https://polaroll.firebaseio.com",
  projectId: "polaroll",
  storageBucket: "polaroll.appspot.com",
  appId: "1:293088880664:ios:08b3a05da2f812698cfb6d",
  measurementId: "G-measurement-id"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();