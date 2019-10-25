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
    const { getByTestId } = render(
      <ProductFormFields {...formValues} handleChange={() => {}} />
    );

    expect(getByTestId("product-name")).toHaveValue(formValues.name);
    expect(getByTestId("product-price")).toHaveValue(
      formValues.price.toString()
    );
    expect(getByTestId("product-currency")).toHaveValue(formValues.currency);
  });

  it("should call on change handler", () => {
    const handleChangeHandler = jest.fn();
    const { getByTestId } = render(
      <ProductFormFields handleChange={handleChangeHandler} />
    );

    fireEvent.change(getByTestId("product-name"), {
      target: { value: "Test" }
    });

    expect(getByTestId("product-name")).toHaveValue("Test");
    expect(handleChangeHandler).toHaveBeenCalled();
  });
});
