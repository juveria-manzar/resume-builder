import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDrXk-EEMkLtVkgyeUWyf1kjF_6U9lYgxM",
    authDomain: "resume-builder-7dbc0.firebaseapp.com",
    projectId: "resume-builder-7dbc0",
    storageBucket: "resume-builder-7dbc0.appspot.com",
    messagingSenderId: "258466534570",
    appId: "1:258466534570:web:395751ec876f13d8392cd3"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();