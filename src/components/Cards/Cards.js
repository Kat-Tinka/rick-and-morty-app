import React from "react";
import styles from "./Cards.module.css";

const Cards = ({results}) => {
  let display;
  console.log('results :>> ', results);

  if(results){
    display = results.map((x)=> {
      let {id, name, image, location, status, species} = x;
      return(
        // <div class="flip-card">
        //   <div class="flip-card-inner">
        //     <div class="flip-card-front">
      <div key={id} className="col-4 mb-4 position-relative">
                <div className={styles.cards}>
                  <img src={image} alt="CharacterImage" className={`${styles.img} img-fluid`}/>
          <div style={{padding: "30px"}}className="content">
            <div className="fs-4 fw-bold mb-4">{name}</div>
            <div className="">
              <div className="fs-6 fw-bold">Last location:</div>
            <div className="fs-5 ">{location.name}</div>
            {/* <div className="fs-9 fw-bold">Species</div>
            <div className="">{species}</div> */}

            <button>Open for more Infos</button>
              <div>
                <div>
                  <div className='popup'>
                    <div className='popup-header'>
                      <h1 >PopUp Modal</h1>
                      <h1>x</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>



          </div>
          </div>
          {(()=>{
            if(status==="Dead"){
              return(
                <div className={`${styles.badge} position-absolute badge bg-danger`}>{status}</div>
              )
            }
            else if(status==="Alive"){
              return(
                <div className={`${styles.badge} position-absolute badge bg-success`}>{status}</div>
              )
            }
            else{
              return(
                <div className={`${styles.badge} position-absolute badge bg-secondary`}>{status}</div>
              )
            }

          })()}

          
      </div>
    
        );
      });
  } else{
    display = "Sorry, no characters found :-/";
  }
  return <>{display}</>;
};


export default Cards;
