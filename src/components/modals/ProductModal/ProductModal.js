import React from "react";
import { Modal } from "react-bootstrap";

const ProductModal = ({ show, title, content, modalButtons, onClose }) => (
  <Modal data-testid="modal" show={show} onHide={onClose}>
    <Modal.Header>
      <Modal.Title data-testid="modal-title">{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{content}</Modal.Body>
    <Modal.Footer>{modalButtons}</Modal.Footer>
  </Modal>
);

export default ProductModal;
