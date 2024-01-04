import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOTCSRddMH_C_DR6GoDYKLL8O9tpHlHt8",
  authDomain: "e-commerce-a96d2.firebaseapp.com",
  projectId: "e-commerce-a96d2",
  storageBucket: "e-commerce-a96d2.appspot.com",
  messagingSenderId: "828866901129",
  appId: "1:828866901129:web:8abcd92fc3c15fffb54258"
};

const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app);

export { fireDb, auth };