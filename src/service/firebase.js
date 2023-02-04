import firebase from "firebase/compat/app"
import "firebase/compat/database"
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBL7lKMuUFQeLbTvVdqG99UU03b5DSwWOE",
  authDomain: "react-lesson-19cf9.firebaseapp.com",
  projectId: "react-lesson-19cf9",
  storageBucket: "react-lesson-19cf9.appspot.com",
  messagingSenderId: "773559588545",
  appId: "1:773559588545:web:458a9d81b0d13b20f12640"
};

const firebaseBd = firebase.initializeApp(firebaseConfig);
export const db = firebaseBd.database().ref();
export const auth = firebase.auth();