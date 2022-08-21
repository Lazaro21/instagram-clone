// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyD-SHsR7ojfxqk5q4lUW98hvXTMAGReDn0",
	authDomain: "instagram-clone-69a03.firebaseapp.com",
	projectId: "instagram-clone-69a03",
	storageBucket: "instagram-clone-69a03.appspot.com",
	messagingSenderId: "754546857446",
	appId: "1:754546857446:web:12eb45261b088966c27227",
};

// Initialize Firebase
const app = !getApps().lenght ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
