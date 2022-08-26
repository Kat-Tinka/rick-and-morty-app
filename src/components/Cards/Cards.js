import React, { useState } from "react";
import { CloseButton, Modal } from "react-bootstrap";
import CardModal from "./CardModal";
import styles from "./Cards.module.css";

// destructure the data I got from the App.js component:
const Cards = ({ results }) => {
  /*  const [show, setShow] = useState(false); */
  let display;
  console.log("results :>> ", results);

  if (results) {
    display = results.map((x) => {
      let { id, name, image, gender, species, location, status, episode } = x;

      return (
        <>
          <div className={`${styles.flipCard}`}>
            <div className={`${styles.flipCardInner}`}>
              <div className={`${styles.flipCardFront}`}>
                <img
                  src={image}
                  alt="Avatar"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div className={`${styles.flipCardBack}`}>
                <p>{name}</p>
              </div>
            </div>
          </div>
          <div
            key={id}
            className="col-lg-4 col-md-6 col-12 mb-4 position-relative"
          >
            <div
              style={{ backgroundColor: "#fff" }}
              className={`${styles.cards} d-flex flex-column justify-content-center`}
            >
              <img
                src={image}
                alt="CharacterImage"
                className={`${styles.img} img-fluid`}
              />
              <div style={{ padding: "30px" }} className="content">
                <div className="fs-4 fw-bold mb-4">{name}</div>

                <div className="">
                  {/* <button onClick={handleShow}>Open for more Infos</button> */}
                  <CardModal
                    name={name}
                    status={status}
                    image={image}
                    gender={gender}
                    species={species}
                    location={location.name}
                    episode={episode}
                  />
                  {/* <Modal
                  show={show}
                  style={{ backgroundColor: "rgb(13, 110, 253)" }}
                >
                  <Modal.Header>
                    <Modal.Title></Modal.Title>
                    <CloseButton onClick={handleClose}></CloseButton>
                  </Modal.Header>
                  <Modal.Body>
                    <img
                      src={image}
                      alt="CharacterImage"
                      className={`${styles.img} img-fluid`}
                    />
                    <div className="fs-6 fw-bold">Last location:</div>
                    <div className="fs-5 ">{location.name}</div>
                    <div className="fs-9 fw-bold">Species</div>
                    <div className="">{species}</div>
                  </Modal.Body>
                  <Modal.Footer></Modal.Footer>
                </Modal> */}
                </div>
              </div>
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
        </>
      );
    });
  } else {
    display = "Sorry, no characters found :-/";
  }
  return <>{display}</>;
};

export default Cards;
