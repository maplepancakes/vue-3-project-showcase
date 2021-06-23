import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
apiKey: "AIzaSyBkhcti8m-CCgwEe8jaGPI1B5FJ6hkMwXU",
authDomain: "vue-3-project-showcase.firebaseapp.com",
projectId: "vue-3-project-showcase",
storageBucket: "vue-3-project-showcase.appspot.com",
messagingSenderId: "439050846293",
appId: "1:439050846293:web:0b747c6c902ef77dd594dc"
};

firebase.initializeApp(firebaseConfig);

export default firebase;