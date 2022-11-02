import React, { useState } from "react";
import Modal from "./Modal";
import MapComp from "./Map";

export default function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  return (
    <>
      <MapComp onOpen={handleOpen} />
      <Modal show={show} onClose={handleClose} />
    </>
  );
}
