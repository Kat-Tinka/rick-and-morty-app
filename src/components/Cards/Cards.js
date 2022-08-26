import React, { useState } from "react";
import { CloseButton, Modal } from "react-bootstrap";
import CardModal from "./CardModal";
import styles from "./Cards.module.css";

const Cards = ({ results }) => {
  /*  const [show, setShow] = useState(false); */
  let display;
  console.log("results :>> ", results);

  if (results) {
    display = results.map((x) => {
      let { id, name, image, gender, species, location, status, episode } = x;

      return (
        <>
          <div
            key={id}
            className={`${styles.flipCard} col-lg-4 col-md-6 col-12 mb-4 position-relative`}
          >
            <div
              style={{ backgroundColor: "#fff" }}
              className={`${styles.cards} d-flex flex-column justify-content-center ${styles.flipCardInner}`}
            >
              <div className={`${styles.flipCardFront}`}>
                <img
                  src={image}
                  alt="CharacterImage"
                  className={`${styles.img} img-fluid`}
                />
                <div style={{ padding: "30px" }} className="content">
                  <div className="fs-4 fw-bold mb-4">{name}</div>
                </div>
                {(() => {
                  if (status === "Dead") {
                    return (
                      <div
                        className={`${styles.badge} position-absolute badge bg-danger`}
                      >
                        {status}
                      </div>
                    );
                  } else if (status === "Alive") {
                    return (
                      <div
                        className={`${styles.badge} position-absolute badge bg-success`}
                      >
                        {status}
                      </div>
                    );
                  } else {
                    return (
                      <div
                        className={`${styles.badge} position-absolute badge bg-secondary`}
                      >
                        {status}
                      </div>
                    );
                  }
                })()}
              </div>
              <div className={`${styles.flipCardBack}`}>
                <p>{name}</p>
                <CardModal
                  name={name}
                  status={status}
                  image={image}
                  gender={gender}
                  species={species}
                  location={location.name}
                  episode={episode}
                />
              </div>
            </div>
          </div>
        </>
      );
    });
  } else {
    display = "Sorry, no characters found :-/";
  }
  return <>{display}</>;
};

export default Cards;
