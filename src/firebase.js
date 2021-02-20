import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBs6ctgOJ2n2_DTI5P49vaSlefoL1GvdS8",
	authDomain: "slack-clone-48c26.firebaseapp.com",
	projectId: "slack-clone-48c26",
	storageBucket: "slack-clone-48c26.appspot.com",
	messagingSenderId: "620844053063",
	appId: "1:620844053063:web:c548813c5925ccf2cfb762",
	measurementId: "G-64EW0NSYD9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
