import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCbPNzt8HP1fYkg7qbCWmgZUDF0AFSiwEU",
  authDomain: "alps-1f606.firebaseapp.com",
  projectId: "alps-1f606",
  storageBucket: "alps-1f606.appspot.com",
  messagingSenderId: "518545860995",
  appId: "1:518545860995:web:61295c91d8301cd5936eb6",
  measurementId: "G-WYTVP7XKJX",
};
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
