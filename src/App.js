import React, { useState, useEffect} from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";


function App() {
  let [pageNumber, setPageNumber] = useState(1);
  // 1.add FUNCTIONALITY to SEARCH:In order to add some main functionaltity to the search button; I start with a new useState (with: let [] =>and  with the variable: "search" and the function "updateSearch"):
  //2. copy "updateSearch" and paste it in the <Search/>
  let [search, updateSearch] = useState("");
;
  console.log(pageNumber);
  let [fetchedData, updateFetchedData] = useState("");
  let { info, results } = fetchedData;

  // console.log("fetchedData.results",fetchedData.results)
  // console.log("fetchedData.info",fetchedData.info)

  // 4.add FUNCTIONALITY to SEARCH: go to API and add name PLUS use the variable, named "search" ((=> see: let [search, updateSearch] useState("");)
  //5.add FUNCTIONALITY to SEARCH: copy functionName "updateSearch" and go to Search.js-File
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
    {/* 2. add FUNCTIONALITY to SEARCH: paste the copied name of the SEAR>CH Function in => <Search updateSearch/> */}
    {/* 3.add FUNCTIONALITY to SEARCH: look up the docs of rick and Morty -> look up: Character-> gGet a single character AND Filter characters => and look up the given URL: I have to use "&name" in the API */}
    
      <Search updateSearch={updateSearch}/>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-4">Cards</div>
              <Cards />
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


