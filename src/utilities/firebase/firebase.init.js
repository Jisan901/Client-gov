// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrSEBDQfa8yDu68b5tRP0PmHtqKryS3kU",
  authDomain: "govt-service.firebaseapp.com",
  projectId: "govt-service",
  storageBucket: "govt-service.appspot.com",
  messagingSenderId: "950109394461",
  appId: "1:950109394461:web:79b59d1d5b1286f66cd8f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;