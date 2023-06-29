import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';

// const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: 'AIzaSyBY_9H-_svE10Op0wci2lUzIShCTpmzOvE',
  authDomain: 'intelinvest-ec3ff.firebaseapp.com',
  projectId: 'intelinvest-ec3ff',
  storageBucket: 'intelinvest-ec3ff.appspot.com',
  messagingSenderId: '536837961137',
  appId: '1:536837961137:web:b5e11669558e0bb63e7990',
};

export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();
