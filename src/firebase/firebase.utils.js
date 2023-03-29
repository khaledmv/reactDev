
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeaLo5tRVcCikVLPb9nXLCB7U7V8NbP7A",
  authDomain: "reactdev-3f145.firebaseapp.com",
  projectId: "reactdev-3f145",
  storageBucket: "reactdev-3f145.appspot.com",
  messagingSenderId: "616216797648",
  appId: "1:616216797648:web:9ddf6565d9e8723ccb99d5",
  measurementId: "G-EBFJSSWL97"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
 
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message );
        }
    }
    return userRef;
}

firebase.initializeApp(firebaseConfig);
// Export default auth && firestore
export const auth = firebase.auth();
export const firestore = firebase.firestore();



// initialize google auth 
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);