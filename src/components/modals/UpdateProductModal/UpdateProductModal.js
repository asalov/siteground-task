import React from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";

import { updateProduct } from "actions/products";
import { useFormState } from "hooks/useFormState";
import ProductFormFields from "components/ProductFormFields/ProductFormFields";
import ActionButton from "components/ActionButton/ActionButton";

const UpdateProductModal = ({ show, product, onClose }) => {
  const dispatch = useDispatch();
  const [productDetails, handleChange] = useFormState({ ...product });

  const handleUpdate = () => {
    dispatch(updateProduct(productDetails));
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header>
        <Modal.Title>Update {product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ProductFormFields handleChange={handleChange} {...productDetails} />
      </Modal.Body>
      <Modal.Footer>
        <ActionButton type="primary" text="Save" onClick={handleUpdate} />
        <ActionButton type="default" text="Cancel" onClick={onClose} />
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateProductModal;
