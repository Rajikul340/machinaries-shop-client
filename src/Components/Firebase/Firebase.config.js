
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};


const app = initializeApp(firebaseConfig);

export default app;



// const firebaseConfig = {
//   apiKey: "AIzaSyDxwLGJE6get0P3nQRCBzKEU9_M7_2Ky88",
//   authDomain: "machinaries-shop.firebaseapp.com",
//   projectId: "machinaries-shop",
//   storageBucket: "machinaries-shop.appspot.com",
//   messagingSenderId: "283783188536",
//   appId: "1:283783188536:web:c35f389891d8e19c96d6cd"
// };

// const app = initializeApp(firebaseConfig);

// export default app ;