// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "@firebase/firestore"
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDdx-MPMgZ82dO4wYNRY55p6FM75iqoO8s",
  authDomain: "firstproject-a39d1.firebaseapp.com",
  projectId: "firstproject-a39d1",
  storageBucket: "firstproject-a39d1.appspot.com",
  messagingSenderId: "86908767702",
  appId: "1:86908767702:web:59b825135ed0fe1b8ee877",
  measurementId: "G-92LLNKVE3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app)
export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        const name = result.user.displayName
        const email = result.user.email
        const pfp = result.user.photoURL

        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("pfp", pfp)

    }).catch((error) => {
        console.log(error)
    })
}
// const analytics = getAnalytics(app);
