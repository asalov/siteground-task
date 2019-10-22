import React, { useState } from "react";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";

import { updateProduct } from "actions/products";
import ProductFormFields from "components/ProductFormFields/ProductFormFields";
import { ActionButton } from "components/buttons";

const UpdateProductModal = ({ show, product, onClose, updateProduct }) => {
  const [productDetails, updateProductDetails] = useState({ ...product });

  const handleChange = e => {
    const field = e.target;

    updateProductDetails({
      ...productDetails,
      [field.id]: field.value
    });
  };

  const handleUpdate = () => {
    updateProduct(productDetails);
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

export default connect(
  null,
  {
    updateProduct
  }
)(UpdateProductModal);
