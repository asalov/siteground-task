import React from "react";
import { useDispatch } from "react-redux";

import { updateProduct } from "actions/products";
import { useFormState } from "hooks/useFormState";
import ProductFormFields from "components/ProductFormFields/ProductFormFields";
import ProductModal from "../ProductModal/ProductModal";

const UpdateProductModal = ({ show, product, onClose }) => {
  const dispatch = useDispatch();
  const [productDetails, handleChange] = useFormState({ ...product });

  const handleUpdate = () => {
    dispatch(updateProduct(productDetails));
    onClose();
  };

  const actionButtonConfig = [
    {
      text: "Save",
      style: "primary",
      onClick: handleUpdate
    },
    { text: "Cancel", onClick: onClose }
  ];

  return (
    <ProductModal
      show={show}
      title={`Update ${product.name}`}
      content={
        <ProductFormFields handleChange={handleChange} {...productDetails} />
      }
      actionButtons={actionButtonConfig}
      onClose={onClose}
    />
  );
};

export default UpdateProductModal;
