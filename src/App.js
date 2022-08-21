// SUMMARY of the mechanism here: 
// 1. store api-link inside api-variable 
// 2.and instead of making it into a string-> make it into a template literal, so that I can work with variables
// The dafault pageNumber is 1. whenever I load the react-app, it will run for the first time and upload all Data, according to the api 
// with [api], I created a "watch/observer"( after useEffect)=> whenever the code will run, it will fetch fresh data => console.log(results)
// whenever I click on a page, "setPageNumber" runs and changes the api with the var "pageNumber"=> whenever this happens, also the rest of the api (with charcters) is changed =>useEffect &async Function

// ===================================================================

// to beable to use the Variables/"let page"=> we use two hooks: useState and useEffect from react:
// after that I am gonna to convert " let pageNumber = 7; into a useState-var"
import React, { useState, useEffect, useLayoutEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";

const App = () => {
  // NOT!: let api = "https://rickandmortyapi.com/api/character" =>
  // if we want to use variables in the API, what we want to do, to be able to get directly to chosen pagenumber(like: "let pageNumber = ...App"), we can't put the API in quotationmarks=> string! We need to use state hooks to get the page number
  // => you need Backtics instead

  // let pageNumber = 7;
  // => "pageNumber = a variable and setPageNumber = a function"
  // the 1 ( useState(1)) is the dafault value => so the pageNumber is set to 1 , in this case
  // I also want to bind this "setPageNumber" to the "pageButtons" which will later be displayed on the WebPage= whenever I'll click on a page Number, this will be updated exactly in the variable  with the "pageNumber"
  // put the "pageNumber" as a variable  inside the curlyBraces after $ in the api
  let [pageNumber, setPageNumber] = useState(1);
  // I don't want to connsole log the data all the time ( like in : console.log("dataResults", data.results);)-> I need a variable for this, with useState and an empty Array[]: "let[fetchedData, updateFetchedData] =useState([])"
  // ==> "fetchedData"= a variable and "updateFetchedData"= a function
  let[fetchedData, updateFetchedData] =useState([])
  // destructuring it with "let{info, results}= fetchedData" and 
  //becausee "results" holds all our character-Card-components, I will pass it inside the "Cards.js-Component"
  // AND because "info" store the pages =< I will put this info into the Pagination.js-Component
  let{info, results}= fetchedData

  // if I want to work only with the characters -> I have to put ".results" after "fetchedData"
  // OR: if I want to work only with the info -> I have to put ".info" after "fetchedData"
  //=> not a good way=> therefore I need to destructure
  console.log("fetchedData.results",fetchedData.results)
  console.log("fetchedData.info",fetchedData.info)
  
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  // whenever the api changes, I want to fetch new data inside the [api] = the "setPageNumber"-Function runs then and it will update the variable "pageNumber"
  // I have to run the async Function: 3 ways to write a function:
  //1.-regular function:
  // first you have to define it:function ab() { }
  // and then you have to invoce it: ab()

  //or://2. arrowFunction:    let cd = () => {}

  // With IIFE(An IIFE (Immediately Invoked Function Expression=> see link:https://developer.mozilla.org/en-US/docs/Glossary/IIFE) is a JavaScript function that runs as soon as it is defined.) you don't have to write the name (like in a regular function), we just have to directly write the function: (function () {})(); => and we will use async in the function as well

  useEffect(() => {
    (async function () {
      // in the next line: the data from the api will be fetched=>use the keyWord "await", because it has to tell javaScript, "wait a little bit as long as our fetch-function doesn't fetch data from my api"-> because it will take some more time until the data from the api is fetched
      // if we don't use "await" the code will break, because js runs from top to bottom and will not wait

      // after that we have to convert our raw data with the .then-smethod into readable jason-format
      let data = await fetch(api).then((res) => res.json());

      updateFetchedData(data);
      // check , if it's working by writing console.log("data", data)=> go to console: there you'll see an object with two endpoints: "info" and "results"
      //=> the result right now is an Array of 20 characters (Cards)
      // => the infosection shows "next" , on which page you are; it shows how many pages there are => this section will work with the pagination part
      //=> if you want to fetch only the results, without "info" etc => you have to write data.results
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


