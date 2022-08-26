import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./Cards.module.css";

// ===CARDMODAL FUNCTION  --> ====================================================
function CardModal(props) {
  const { name, status, gender, image, location, species } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log("show", show);

  //! === CARD BACKSIDE================================================================
  return (
    <>
      {/* Button for more Infos-> leads to CardModal  */}
      <button onClick={handleShow} style={{ backgroundColor: "white" }}>
        Open for more Infos
      </button>

      <Modal
        show={show}
        style={{ backgroundColor: "rgb(13, 110, 253)" }}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="fs-4 fw-bold">{name}</div>

            {/* {image} */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={image}
            alt="CharacterImage"
            className={`${styles.img} img-fluid`}
          />
          <div className="fs-5 fw-bold">Status:</div>
          <div className="fs-5">{status}</div>
          <div className="fs-5 fw-bold">Gender:</div>
          <div className="fs-5">{gender}</div>
          <div className="fs-5 fw-bold">Species:</div>
          <div className="fs-5">{species}</div>
          <div className="fs-5 fw-bold">Last location:</div>
          <div className="fs-5">{location}</div>
          {/* <div className="fs-5 fw-bold">Episode:</div> */}
          {/* <div className="fs-5 ">{episode}</div> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CardModal;
