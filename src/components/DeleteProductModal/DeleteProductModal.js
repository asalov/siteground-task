import React from 'react';

import { Modal } from 'react-bootstrap';

import ActionButton from '../ActionButton/ActionButton';

const DeleteProductModal = ({ show, product, onClose }) => (
  <Modal show={show} onHide={onClose}>
    <Modal.Header>
      <Modal.Title>Delete {product.name}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      Are you sure you want to delete this product?
    </Modal.Body>
    <Modal.Footer>
      <ActionButton type="danger" text="Yes" />
      <ActionButton type="default" text="No" onClick={onClose} />
    </Modal.Footer>
  </Modal>
);

export default DeleteProductModal;
