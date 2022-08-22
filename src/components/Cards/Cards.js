import React from "react";
import styles from "./Cards.module.css";

const Cards = ({results}) => {
  let display;
  console.log('results :>> ', results);

  if(results){
    display = results.map((x)=> {
      let {id, name, image, location, status, species} = x;
      return(
        // set position relative for the parent div
      <div key={id} className="col-4 mb-4 position-relative">
       {/* as follows, I pasted "styles.cards" (from the "Cards.module.css"-file) inside curly braces in the div for the Cards */}
        <div className={styles.cards}>
          <img src={image} alt="" className={`${styles.img} img-fluid`}/>
          <div style={{padding: "30px"}}className="content">
            <div className="fs-4 fw-bold mb-4">{name}</div>
            <div className="">
              <div className="fs-6 fw-bold">Last location:</div>
            <div className="fs-5 ">{location.name}</div>
            {/* <div className="fs-9 fw-bold">Species</div>
            <div className="">{species}</div> */}
            </div>
          </div>
          </div>
          {/* in order to use the style inside the cards,I need also to paste "styles.badge" inside the classname (App.js)=>you must to use {} for this and, because  "position-absolute badge bg-danger " of the div is in a string, I have to convert this by using backticks( thats a template literal), $-sign  and again a {} => to use it as a variable: */}
          <div className={`${styles.badge} position-absolute badge bg-danger`}>{status}</div> 
      </div>
        );
      });
  } else{
    display = "Sorry, no characters found :-/";
  }
  return <>{display}</>;
};


export default Cards;
