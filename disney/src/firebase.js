 import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {firebase,firebaseApp} from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD4BuuZwwcGtAG1OJeenhOkmnDItOprVU0",
    authDomain: "disney-clone-7c598.firebaseapp.com",
    projectId: "disney-clone-7c598",
    storageBucket: "disney-clone-7c598.appspot.com",
    messagingSenderId: "542818300477",
    appId: "1:542818300477:web:6f4595941fe25e3bddb054",
    measurementId: "G-QJQJ66N43B"
  };    

  
const app = initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage,};

 const analytics = getAnalytics(app);
 export default db;
