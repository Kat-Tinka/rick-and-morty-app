import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// const defaultEndpoint = "https://rickandmortyapi.com/api/character";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Fetch Data from Rick and Morty endpoint:
// 1.>>> You can just use the given endpoint(go to https://rickandmortyapi.com/documentation and chose an endpoint or take the already given one in LMS-> create a const defaultEndpoint)=> const defaultEndpoint = "https://rickandmortyapi.com/api/character";
// 2.create function to fetch the data (given endpoint with characters)
