 import firebase from "firebase/app"
 import "firebase/firestore"
 import "firebase/auth"
 
 
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAPm6vK3Y6YcoOVsKdkzGP-Ikr_BbumEUk",
    authDomain: "project-status-updater.firebaseapp.com",
    databaseURL: "https://project-status-updater.firebaseio.com",
    projectId: "project-status-updater",
    storageBucket: "project-status-updater.appspot.com",
    messagingSenderId: "766552974105"
  };
  firebase.initializeApp(config);

  export default firebase;