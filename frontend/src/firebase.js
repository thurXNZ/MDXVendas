import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAVMAiKaZhUjiZ9SuqVg2KpNF2A4h4R9ME",
  authDomain: "fir-1ff52.firebaseapp.com",
  projectId: "fir-1ff52",
  storageBucket: "fir-1ff52.firebasestorage.app",
  messagingSenderId: "617352350651",
  appId: "1:617352350651:web:02ff67a9a0507e3611529e",
  measurementId: "G-FZP2JLTWQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

//Provedor Google
const googleProvider = new GoogleAuthProvider();

//Função login popup
async function signInWithGooglePopup() {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        return result.user;
    } catch (error) {
        throw error;
    }
}

//Função para logout
async function logout() {
    await signOut(auth);
}

export { auth, googleProvider, signInWithGooglePopup, logout };