import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./Cards.module.css";
function CardModal(props) {
  const { name, status, gender, image, location, species } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log("show", show);
  return (
    <>
      {/* FLIP CARD CODE  ---> ========================================================== */}
      {/* <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={image} alt="Avatar" style="width:300px;height:300px;" />
          </div>
          <div class="flip-card-back"></div>
        </div>
      </div> */}
      {/* <--- FLIP CARD CODE  ========================================================== */}

      <button
        onClick={handleShow}
        style={{ backgroundColor: "rgb(144, 181, 237)" }}
      >
        Open for more Infos
      </button>
      <Modal
        show={show}
        style={{ backgroundColor: "rgb(13, 110, 253)" }}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {name}
            {/* {image} */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={image}
            alt="CharacterImage"
            className={`${styles.img} img-fluid`}
          />
          <div className="fs-6 fw-bold">Status:</div>
          <div className="">{status}</div>
          <div className="fs-6 fw-bold">Gender:</div>
          <div className="">{gender}</div>
          <div className="fs-9 fw-bold">Species:</div>
          <div className="">{species}</div>
          <div className="fs-6 fw-bold">Last location:</div>
          <div className="fs-5 ">{location}</div>
          <div className="fs-6 fw-bold">Episode:</div>
          {/* <div className="fs-6 fw-bold">Episode:</div>
          <div className="fs-5 ">{episode}</div> */}
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
