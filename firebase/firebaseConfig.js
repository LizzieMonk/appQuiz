import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';
// import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAu_sYL2QYMwZvZm2_EYZMgB8M7UZloJEU",
    authDomain: "lab23-8de0d.firebaseapp.com",
    databaseURL: "https://lab23-8de0d-default-rtdb.firebaseio.com",
    projectId: "lab23-8de0d",
    storageBucket: "lab23-8de0d.appspot.com",
    messagingSenderId: "979386617066",
    appId: "1:979386617066:web:870d8222dde1b3e7ac9b93"
};

// const app = initializeApp(firebaseConfig);

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
export  { firebase };
