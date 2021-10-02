import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDwTp-iHgvWiqYXQgjwUw_sI5hhHo8mfI",
  authDomain: "imagecommunity-6e8bf.firebaseapp.com",
  projectId: "imagecommunity-6e8bf",
  storageBucket: "imagecommunity-6e8bf.appspot.com",
  messagingSenderId: "136151953598",
  appId: "1:136151953598:web:97e2616b5a804e9bc3aeef",
  measurementId: "G-7H7JFS4HXL"
};

firebase.initializeApp(firebaseConfig);

// 파이어 베이스 가져와서 사용
const auth = firebase.auth();

export{auth};