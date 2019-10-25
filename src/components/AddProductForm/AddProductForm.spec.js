import React from "react";
import { fireEvent } from "@testing-library/react";

import { renderWithRedux } from "setupTests";
import AddProductForm from "./AddProductForm";

describe("AddProductForm", () => {
  it("should disable submit button if some fields are empty", () => {
    const { getByTestId } = renderWithRedux(<AddProductForm />);

    expect(getByTestId("add-product-button")).toBeDisabled();
  });

  it("should enable submit button if all fields are filled in", () => {
    const { getByTestId, getByLabelText } = renderWithRedux(<AddProductForm />);

    fireEvent.change(getByLabelText("Name"), { target: { value: "Product" } });
    fireEvent.change(getByLabelText("Price"), { target: { value: "100" } });
    fireEvent.change(getByLabelText("Currency"), { target: { value: "GBP" } });

    expect(getByTestId("add-product-button")).toBeEnabled();
  });
});
