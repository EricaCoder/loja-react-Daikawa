import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { initializeApp } from "firebase/app";
import App from "./App";

const firebaseConfig = {
  apiKey: "AIzaSyCw3T-iW0LIih4FZwtbquIzVrOU6_IEvlQ",
  authDomain: "coderhouse-ecommerce-erica.firebaseapp.com",
  projectId: "coderhouse-ecommerce-erica",
  storageBucket: "coderhouse-ecommerce-erica.appspot.com",
  messagingSenderId: "216704080991",
  appId: "1:216704080991:web:58da1b6d61f5e70b6b8fea",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
