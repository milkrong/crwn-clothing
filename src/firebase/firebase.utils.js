import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyAhBjny01MeUeQr00qM6m-WFwAfV6GOPPI",
        authDomain: "crwn-data-fbb99.firebaseapp.com",
        databaseURL: "https://crwn-data-fbb99.firebaseio.com",
        projectId: "crwn-data-fbb99",
        storageBucket: "crwn-data-fbb99.appspot.com",
        messagingSenderId: "755850065926",
        appId: "1:755850065926:web:b2933d5d4977406c8eab87"
    };

export const createUserProfileDoc = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const creatAt = new Date();

        try {
            userRef.set({
                displayName,
                email,
                creatAt,
                ...additionalData
            })
        } catch(err) {
            console.log('error creating user');
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;