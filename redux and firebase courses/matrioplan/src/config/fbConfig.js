import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAp6gSmxWEBqw5KizlgDfEKACHn5epK8IQ",
    authDomain: "reduxwebapp.firebaseapp.com",
    databaseURL: "https://reduxwebapp.firebaseio.com",
    projectId: "reduxwebapp",
    storageBucket: "reduxwebapp.appspot.com",
    messagingSenderId: "179110843712",
    appId: "1:179110843712:web:9349678f5e8f358121d6a5",
    measurementId: "G-9S3HW26ZER"
  };

firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ timestampsInSnapshots: true})
 
export default firebase; 