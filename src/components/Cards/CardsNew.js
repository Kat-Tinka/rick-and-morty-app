// import React, { useState } from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import { CloseButton, Modal } from "react-bootstrap";

// export default function CardsNew({ results }) {
//   // fetch mit id
//   const getData = async () => {
//     const response = await fetch(
//       `https://rickandmortyapi.com/api/character/?id=${id}`
//     );
//     const data = await response.json();
//     const resultsId = data.results;
//     console.log("results", resultsId);
//   };

//   const [id, setId] = useState();
//   const [show, setShow] = useState(false);

//   // handle modal
//   const handleShow = () => {
//     setShow((prev) => true);
//     setId(3);
//     getData();
//   };

//   const handleClose = () => {
//     setShow((prev) => !prev);
//   };

//   return (
//     results &&
//     results.map((result, index) => (
//       <>
//         <Card key={index} style={{ width: "18rem" }}>
//           <Card.Img variant="top" src={result.image} />
//           <Card.Body>
//             <Card.Title>{result.name}</Card.Title>
//             <Card.Text>{result.species}</Card.Text>
//             <Card.Text>{result.id}</Card.Text>
//             <Button onClick={handleShow} variant="primary">
//               Go somewhere
//             </Button>
//           </Card.Body>
//         </Card>
//         resultsId && resultsId.map((e) => (
//         <Modal show={show} style={{ backgroundColor: "rgb(13, 110, 253)" }}>
//           <Modal.Header>
//             <Modal.Title>foo</Modal.Title>
//             <CloseButton onClick={handleClose}></CloseButton>
//           </Modal.Header>
//           <Modal.Body>
//             <img src={e.image} alt="CharacterImage" />
//             <div className="fs-5 fw-bold">Last location:</div>
//           </Modal.Body>
//           <Modal.Footer></Modal.Footer>
//         </Modal>
//         ) )
//       </>
//     ))
//   );
// }
