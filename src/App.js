import React, { useState, useEffect} from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";

const App = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let[fetchedData, updateFetchedData] =useState([])
  let{info, results}= fetchedData

  console.log("fetchedData.results",fetchedData.results)
  console.log("fetchedData.info",fetchedData.info)
  
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());

      updateFetchedData(data);
      // console.log("dataResults", data.results);
    })();
  }, [api]);

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


