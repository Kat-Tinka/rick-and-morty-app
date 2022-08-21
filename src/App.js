// import { useState, useEffect } from "react";
//
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
    </div>
  );
};

Header.defaultProps = {
  title: "Rick and Morty App",
};

export default App;
