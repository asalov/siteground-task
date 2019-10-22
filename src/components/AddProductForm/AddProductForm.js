import React, { useState } from "react";
import { connect } from "react-redux";

import { createProduct } from "actions/products";

import ProductFormFields from "components/ProductFormFields/ProductFormFields";
import { ActionButton } from "components/buttons";

const initialState = {
  name: "",
  price: "",
  currency: ""
};

const AddProductForm = ({ createProduct }) => {
  const [formState, setFormState] = useState(initialState);

  const handleChange = e => {
    const field = e.target;

    setFormState({
      ...formState,
      [field.id]: field.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    createProduct(formState);
    setFormState(initialState);
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
