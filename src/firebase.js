import firebase from "firebase";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "myform-1c75c.firebaseapp.com",
  databaseURL: "https://myform-1c75c.firebaseio.com",
  projectId: "myform-1c75c",
  storageBucket: "myform-1c75c.appspot.com",
  messagingSenderId: "991319986853"
};

firebase.initializeApp(config);
export default firebase;
