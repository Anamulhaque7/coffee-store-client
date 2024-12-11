// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVYgv73b-mqcRFaweapTUS4OH_mnp5-J8",
    authDomain: "coffee-store-ed643.firebaseapp.com",
    projectId: "coffee-store-ed643",
    storageBucket: "coffee-store-ed643.firebasestorage.app",
    messagingSenderId: "991045694137",
    appId: "1:991045694137:web:6225d032f14ccb98ba6168"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);