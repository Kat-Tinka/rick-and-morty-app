import React from 'react'
import App from '../../App'

// Create the Pagination-Buttons=>for previous page and next page there should be added a onClickFunction
// => go to the App.js-File and insert "setPageNumber" to the Pagination-div on the bottom

// so I destructured it and setPageNumber (which is a function)
const Pagination = ({setPageNumber}) => {
   let next = ()=>{
      // the x represents theh previous value ( which is the pageNumber in App.js set to number 1)- I use an arrowFunction here
      setPageNumber((x) =>x +1);
   };
   let previous = ()=>{
      setPageNumber((x) =>x -1);
   };

   // in order to center the perv and next buttons , write : d-flex justify-content-center in the container
  return <div className="container d-flex justify-content-center">
  <button onClick={previous} className="btn btn-primary">Previous</button>
  <button onClick={next}className="btn btn-primary">Next</button> 
      </div>;
}

export default Pagination
