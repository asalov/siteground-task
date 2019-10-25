import React from "react";
import { render, fireEvent } from "@testing-library/react";

import ProductFormFields from "./ProductFormFields";

describe("ProductFormFields", () => {
  it("should show correct form values", () => {
    const formValues = {
      name: "Product",
      price: 50,
      currency: "USD"
    };
    const { getByLabelText } = render(
      <ProductFormFields {...formValues} handleChange={() => {}} />
    );

    expect(getByLabelText("Name")).toHaveValue(formValues.name);
    expect(getByLabelText("Price")).toHaveValue(formValues.price.toString());
    expect(getByLabelText("Currency")).toHaveValue(formValues.currency);
  });

  it("should call on change handler", () => {
    const handleChangeHandler = jest.fn();
    const { getByLabelText } = render(
      <ProductFormFields handleChange={handleChangeHandler} />
    );

    fireEvent.change(getByLabelText("Name"), { target: { value: "Test" } });

    expect(getByLabelText("Name")).toHaveValue("Test");
    expect(handleChangeHandler).toHaveBeenCalled();
  });
});
