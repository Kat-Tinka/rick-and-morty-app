import React from "react";
// in order to create the Cards for the Characters I came from App.js here=> paste "results" in {}into const Cards
// remove in App.js the same clo
// now I want to .map all this results-data to Cards(in WebSite)
// write if-statement and declare a statement, if no characters are found
const Cards = ({results}) => {

  let display;
  console.log('results :>> ', results);
  if(results){
    //the x will target the results one by one
    display = results.map(x=>{
      // in order to check this, put some random word/letters between div brackets: the result will be 20 time the random letters 
      return(<div className=" .col-4">test</div>
      )

    });
  } else{
    display = "Sorry, no characters found :-/";

  }


  console.log('results', results);
  return <>{display}</>;
};

export default Cards;
