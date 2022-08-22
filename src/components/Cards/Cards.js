import React from "react";
// in order to create the Cards for the Characters I came from App.js here=> paste "results" in {}into const Cards:const Cards = ({results}) => {
// remove in App.js the same clo
// now I want to .map all this results-data to Cards(in WebSite)
// write if-statement and declare a statement, if no characters are found
const Cards = ({results}) => {
  let display;
  console.log('results :>> ', results);

  if(results){
    display = results.map((x)=> {
      let {id, name, image} = x;
      return(
      <div key= {id} className="col-4">
        <div className="">
          <img src={image}  alt="" className="img-fluid"/>
          </div>
        </div>
        );
      });
  } else{
    display = "Sorry, no characters found :-/";
  }
  return <>{display}</>;
};


export default Cards;
