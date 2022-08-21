// import { useState, useEffect } from "react";
//
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
//!:

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-4">Cards</div>
              <Cards />
              <Cards />
              {/* <div className="col-4">Cards</div>
              <div className="col-4">Cards</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {
  title: "Rick and Morty App",
};

export default App;

// After creating the component-folders, I want to import the component(s)=> create inside div-tab division "Container"-> inside "Container" div "row"-> inside "row" div with the columns I want to display in my WebPage later-->set all the Divs with a className
// after doing so, I want to import(insert) for example the "Filter"-Component inside the div with the classname ="col-3", by opening < and writing "Filters"=> usually the path should pop up ( ./components/Filters/Filters..).
// If it doesnt, you have to import the "Filters " manualy, by writing  on top of this file "import Filters from "./" ->propositions should be shown then
// --> if not short-cut_ strg  / control and space
// The import-syntax: <Filters /> ==> it is automatically importing file from src: import Filters from "./components/Filters/Filters";
