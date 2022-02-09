import  firebase from "firebase";
import 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAnteoM0g7vX-XFIFOl1BtuUmGIIcqLP9M",
  authDomain: "mad-project-f0f3e.firebaseapp.com",
  projectId: "mad-project-f0f3e",
  storageBucket: "mad-project-f0f3e.appspot.com",
  messagingSenderId: "11959625641",
  appId: "1:11959625641:web:5259ba1cd0551f996c86b8",
};
let app = firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default app;
