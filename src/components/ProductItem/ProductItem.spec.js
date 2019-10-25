import React from "react";
import { fireEvent } from "@testing-library/dom";

import { renderWithRedux } from "setupTests";
import ProductItem from "./ProductItem";

describe("ProductItem", () => {
  const product = { name: "Product name", price: 50, currency: "EUR" };
  const productItem = (
    <table>
      <tbody>
        <ProductItem product={product} />
      </tbody>
    </table>
  );

  it("should show product details", () => {
    const { getByText } = renderWithRedux(productItem);

    expect(getByText(product.name)).toBeVisible();
    expect(getByText(product.price.toString())).toBeVisible();
    expect(getByText(product.currency)).toBeVisible();
  });

  it("should show update button & modal", () => {
    const { getByTestId, queryByTestId } = renderWithRedux(productItem, {
      initialState: { permissions: { data: ["UPDATE"] } }
    });

    const updateButton = getByTestId("update-product-button");
    expect(updateButton).toBeVisible();
    expect(queryByTestId("delete-product-button")).toBeNull();

    fireEvent.click(updateButton);

    const updateModalTitle = getByTestId("modal-title");

    expect(updateModalTitle).toBeVisible();
    expect(updateModalTitle).toHaveTextContent(`Update ${product.name}`);
  });

  it("should show delete button & modal", () => {
    const { getByTestId, queryByTestId } = renderWithRedux(productItem, {
      initialState: { permissions: { data: ["DELETE"] } }
    });

    const deleteButton = getByTestId("delete-product-button");
    expect(deleteButton).toBeVisible();
    expect(queryByTestId("update-product-button")).toBeNull();

    fireEvent.click(deleteButton);

    const deleteModalTitle = getByTestId("modal-title");

    expect(deleteModalTitle).toBeVisible();
    expect(deleteModalTitle).toHaveTextContent(`Delete ${product.name}`);
  });
});
