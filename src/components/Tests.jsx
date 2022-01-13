import React, {useState} from "react";
import { Modal, Button } from "react-bootstrap";

const Test = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleShow = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
      </Modal>
    </>
  )
};

export default Test;
