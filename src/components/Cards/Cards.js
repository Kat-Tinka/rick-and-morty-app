import React from "react";
// in order to create the Cards for the Characters I came from App.js here=> paste "results" in {}into const Cards:const Cards = ({results}) => {
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
      // write "col-4", because so many columns are occupied  by a singel card in the row
      // I will use the id as the key=> so , I have to destructure it let{id}=x AND put key={id} inside the the div brackets
      // also , I want to display the names of the characters -> destructure  this ( and put it  in the let variable next to id) and pass the id to the return function
      // => because I set in App.js a default page number (1)=> I got here the results of pagenumber 1
      let {id, name, image}= x
      return(<div key= {id} className=" .col-4">
        <div className="">
          <img src={image}  alt=""/>
        
          </div>
        </div>

      )

    });
  } else{
    display = "Sorry, no characters found :-/";

  }
  return <>{display}</>;
};


export default Cards;
