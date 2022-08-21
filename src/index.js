import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ===============================================================
//1.>>> >Start-Infos: Index.js here is the first file to execute.this File "index.js" is actually the first code file, which will be executed whenever this page is loaded. Actually it's a transformed version of the code.
// Therefore, the npm start process,which I started at the beginning,which started this development server,which is watching the code,this process will not just watch the code and then take it and deliver it to the browser,but before it delivers it,it will transform it.(For example, this import here where we import a CSS file into a JavaScript file.))
// I am importing ReactDOM from react-dom,which in the end means we're importing something,some ReactDOM object from the react-dom third-party library,which is one of our dependencies,which is downloaded and installed locally.=>, in the package.json file,you actually see two React dependencies,
// If you define a feature,let's say a function in file A,and you wanna use it in file B to split your code across multiple files to keep every file small and manageable,then you have to export the feature,which you wanna use in file B in file A,and then import it in file B.
// the createRoot method.This creates basically the main entry point.
// this process leads us to one other file,the index.html file in that public folder0> go to index.html (2.>>>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
