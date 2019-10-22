import React from "react";
import { connect } from "react-redux";

import { createProduct } from "actions/products";
import { useFormState } from "hooks/useFormState";
import ProductFormFields from "components/ProductFormFields/ProductFormFields";
import { ActionButton } from "components/buttons";

const AddProductForm = ({ createProduct }) => {
  const [formState, handleChange, resetForm] = useFormState({
    name: "",
    price: "",
    currency: ""
  });

  const handleSubmit = e => {
    e.preventDefault();

    createProduct(formState);
    resetForm();
  };

  const isFormValid = () =>
    Object.values(formState).every(field => field !== "");

  return (
    <div>
      <h3>Add New Product</h3>
      <form>
        <ProductFormFields handleChange={handleChange} {...formState} />
        <ActionButton
          type="primary"
          text="Add"
          disabled={!isFormValid()}
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default connect(
  null,
  {
    createProduct
  }
)(AddProductForm);
