import React from "react";
import { useDispatch } from "react-redux";

import { createProduct } from "actions/products";
import { useFormState } from "hooks/useFormState";
import ProductFormFields from "components/ProductFormFields/ProductFormFields";
import ActionButton from "components/ActionButton/ActionButton";

const AddProductForm = () => {
  const dispatch = useDispatch();
  const [formState, handleChange, resetForm] = useFormState({
    name: "",
    price: "",
    currency: ""
  });

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(createProduct(formState));
    resetForm();
  };

  const isFormValid = () =>
    Object.values(formState).every(field => field !== "");

  return (
    <div>
      <h3 data-testid="add-product-form-title">Add New Product</h3>
      <form>
        <ProductFormFields handleChange={handleChange} {...formState} />
        <ActionButton
          data-testid="add-product-button"
          text="Add"
          buttonStyle="primary"
          disabled={!isFormValid()}
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default AddProductForm;
