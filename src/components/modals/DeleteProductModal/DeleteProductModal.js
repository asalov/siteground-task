import React from "react";
import { useDispatch } from "react-redux";

import { deleteProduct } from "actions/products";
import ProductModal from "../ProductModal/ProductModal";

const DeleteProductModal = ({ show, product, onClose }) => {
  const dispatch = useDispatch();

  const removeProduct = () => {
    dispatch(deleteProduct(product.id));
    onClose();
  };

  const actionButtonConfig = [
    { text: "Yes", style: "danger", onClick: removeProduct },
    { text: "No", onClick: onClose }
  ];

  return (
    <ProductModal
      show={show}
      title={`Delete ${product.name}`}
      content={"Are you sure you want to delete this product?"}
      actionButtons={actionButtonConfig}
      onClose={onClose}
    />
  );
};

export default DeleteProductModal;
