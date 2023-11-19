// React , ReactDom and Bosstrap was imported from react library and boostrap
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
//i imported App from the App component i created, it will rendered all component to the website through this main.jsx file to the index.html file
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
