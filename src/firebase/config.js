import firebase from "firebase/app";

import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBAeuTpxTTf6pLNpxaico5kNdnpTEDkSRo",
    authDomain: "cooking-website-eed41.firebaseapp.com",
    projectId: "cooking-website-eed41",
    storageBucket: "cooking-website-eed41.appspot.com",
    messagingSenderId: "931626069900",
    appId: "1:931626069900:web:61212420e5242187f930a9"
  };

  //init firebase : This connects us to our backend firebase
  firebase.initializeApp(firebaseConfig)
  
  //init services
  const projectFirestore= firebase.firestore()

  export {projectFirestore}

