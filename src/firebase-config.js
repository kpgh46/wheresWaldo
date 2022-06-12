import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyD1ydgpYR9c6ux2-Pi3lcIUf6zWTvTLsHU",
	authDomain: "whereswaldo-5f2ee.firebaseapp.com",
	projectId: "whereswaldo-5f2ee",
	storageBucket: "whereswaldo-5f2ee.appspot.com",
	messagingSenderId: "628102905263",
	appId: "1:628102905263:web:c38b255678e975fbbb835a",
	measurementId: "G-K8FQFNDKL8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD1ydgpYR9c6ux2-Pi3lcIUf6zWTvTLsHU",
//   authDomain: "whereswaldo-5f2ee.firebaseapp.com",
//   projectId: "whereswaldo-5f2ee",
//   storageBucket: "whereswaldo-5f2ee.appspot.com",
//   messagingSenderId: "628102905263",
//   appId: "1:628102905263:web:c38b255678e975fbbb835a",
//   measurementId: "G-K8FQFNDKL8"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
