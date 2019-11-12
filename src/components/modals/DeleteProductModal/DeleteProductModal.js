import React from "react";
import { useDispatch } from "react-redux";

import { deleteProduct } from "actions/products";
import ProductModal from "components/modals/ProductModal/ProductModal";
import ActionButton from "components/ActionButton/ActionButton";

const DeleteProductModal = ({ show, product, onClose }) => {
  const dispatch = useDispatch();

  const removeProduct = () => {
    dispatch(deleteProduct(product.id));
    onClose();
  };

  const renderModalButtons = () => (
    <>
      <ActionButton buttonStyle="danger" text="Yes" onClick={removeProduct} />
      <ActionButton text="No" onClick={onClose} />
    </>
  );

  return (
    <ProductModal
      show={show}
      title={`Delete ${product.name}`}
      content="Are you sure you want to delete this product?"
      modalButtons={renderModalButtons()}
      onClose={onClose}
    />
  );
};

export default DeleteProductModal;
