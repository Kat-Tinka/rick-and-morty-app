import React, { useState, useEffect} from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Cardback from "./components/Cards/Cardback";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";



function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, updateSearch] = useState("");
;
  console.log(pageNumber);
  let [fetchedData, updateFetchedData] = useState("");
  let { info, results } = fetchedData;

  // console.log("fetchedData.results",fetchedData.results)
  // console.log("fetchedData.info",fetchedData.info)

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());

      updateFetchedData(data);
      // console.log("dataResults", data.results);
    })();
  }, [api]);

  return (
    // <div className="flip-card"></div>
    <div className="App">
    <h1 className="text-center ubuntu my-4">Rick & Morty</h1>

      <Header />

      <Search updateSearch={updateSearch}/>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-4">Cards</div>
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

Header.defaultProps = {
  title: "Rick and Morty App",
};


export default App;


