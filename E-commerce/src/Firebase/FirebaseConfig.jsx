// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCOTCSRddMH_C_DR6GoDYKLL8O9tpHlHt8",
//   authDomain: "e-commerce-a96d2.firebaseapp.com",
//   projectId: "e-commerce-a96d2",
//   storageBucket: "e-commerce-a96d2.appspot.com",
//   messagingSenderId: "828866901129",
//   appId: "1:828866901129:web:8abcd92fc3c15fffb54258"
// };

// const app = initializeApp(firebaseConfig);
// const fireDb = getFirestore(app);
// const auth = getAuth(app);

// export { fireDb, auth };


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWnnvzTvxRKQyY3HTBfZk2yjmrfVzJg8E",
  authDomain: "glitzhub-24f78.firebaseapp.com",
  projectId: "glitzhub-24f78",
  storageBucket: "glitzhub-24f78.appspot.com",
  messagingSenderId: "684607657417",
  appId: "1:684607657417:web:b277c67c39de18c2550418"
};

const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app);

export { fireDb, auth };