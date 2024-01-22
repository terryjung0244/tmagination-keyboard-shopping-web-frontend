import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyA-Q81BhIWRa6aXFgB0dJomXO9gdQG7SU0',
  authDomain: 'tmkeyboardshoppingweb.firebaseapp.com',
  projectId: 'tmkeyboardshoppingweb',
  storageBucket: 'tmkeyboardshoppingweb.appspot.com',
  messagingSenderId: '869074296227',
  appId: '1:869074296227:web:26caadaaf3143794258e16',
  measurementId: 'G-X1DVFR03FL',
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
