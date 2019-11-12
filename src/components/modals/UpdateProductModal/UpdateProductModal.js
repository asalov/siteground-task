import React from "react";
import { useDispatch } from "react-redux";

import { updateProduct } from "actions/products";
import { useFormState } from "hooks/useFormState";
import ProductFormFields from "components/ProductFormFields/ProductFormFields";
import ProductModal from "components/modals/ProductModal/ProductModal";
import ActionButton from "components/ActionButton/ActionButton";

const UpdateProductModal = ({ show, product, onClose }) => {
  const dispatch = useDispatch();
  const [productDetails, handleChange, resetForm] = useFormState({
    ...product
  });

  const handleUpdate = () => {
    dispatch(updateProduct(productDetails));
    onClose();
  };

  const handleModalClose = () => {
    onClose();
    resetForm();
  };

  const renderModalButtons = () => (
    <>
      <ActionButton buttonStyle="primary" text="Save" onClick={handleUpdate} />
      <ActionButton text="Cancel" onClick={handleModalClose} />
    </>
  );

  return (
    <ProductModal
      show={show}
      title={`Update ${product.name}`}
      content={
        <ProductFormFields handleChange={handleChange} {...productDetails} />
      }
      modalButtons={renderModalButtons()}
      onClose={handleModalClose}
    />
  );
};

export default UpdateProductModal;
