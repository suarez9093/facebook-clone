// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB8tRbg5iiNMESdBqCL3dcX2NBiNEO3bmI',
  authDomain: 'facebook-clone-e505f.firebaseapp.com',
  projectId: 'facebook-clone-e505f',
  storageBucket: 'facebook-clone-e505f.appspot.com',
  messagingSenderId: '951038234383',
  appId: '1:951038234383:web:306ece3d0e7d9bb518f87a',
  measurementId: 'G-68F189LD8M',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
