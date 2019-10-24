import React from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";

import { deleteProduct } from "actions/products";
import ActionButton from "components/ActionButton/ActionButton";

const DeleteProductModal = ({ show, product, onClose }) => {
  const dispatch = useDispatch();

  const removeProduct = () => {
    dispatch(deleteProduct(product.id));
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header>
        <Modal.Title>Delete {product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
      <Modal.Footer>
        <ActionButton type="danger" text="Yes" onClick={removeProduct} />
        <ActionButton type="default" text="No" onClick={onClose} />
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteProductModal;
