import React from "react";
import {Button, Modal} from "react-bootstrap";
import PropTypes from 'prop-types';

export const AppModal = ({ show = false, onClose, children, title, closeLabel, actionLabel }) => (
  <Modal show={show} onHide={onClose}>
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{children}</Modal.Body>
    {closeLabel &&
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          {closeLabel}
        </Button>
        {actionLabel &&
        <Button variant="primary" onClick={onClose}>
        </Button>
        }
    </Modal.Footer>
    }
  </Modal>
);

AppModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.any,
  title: PropTypes.string.isRequired,
  closeLabel: PropTypes.string,
  actionLabel: PropTypes.string,
};
