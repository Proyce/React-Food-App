import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjD-tDQhqm31MqBFKy1H37LgvjSzJylas",
  authDomain: "proyce-react-food-app.firebaseapp.com",
  projectId: "proyce-react-food-app",
  storageBucket: "proyce-react-food-app.appspot.com",
  messagingSenderId: "464383423485",
  appId: "1:464383423485:web:63f1bf0e6b57138b045f94",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore };
