import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';

import { deleteProduct as deleteProductItem } from 'actions/products';

import { ActionButton } from 'components/buttons';

const DeleteProductModal = ({
  show,
  product,
  onClose,
  deleteProduct
}) => {
  const removeProduct = () => {
    deleteProduct(product.id);
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header>
        <Modal.Title>Delete {product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete this product?
    </Modal.Body>
      <Modal.Footer>
        <ActionButton type="danger" text="Yes" onClick={removeProduct} />
        <ActionButton type="default" text="No" onClick={onClose} />
      </Modal.Footer>
    </Modal>
  );
}

export default connect(null, {
  deleteProduct: deleteProductItem
})(DeleteProductModal);
