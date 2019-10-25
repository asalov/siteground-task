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
    const { getByText, queryByText } = renderWithRedux(productItem, {
      initialState: { permissions: { data: ["UPDATE"] } }
    });

    const updateButton = getByText("Update");
    expect(updateButton).toBeVisible();
    expect(queryByText("Delete")).toBeNull();

    fireEvent.click(updateButton);

    expect(getByText(`Update ${product.name}`)).toBeVisible();
  });

  it("should show delete button & modal", () => {
    const { getByText, queryByText } = renderWithRedux(productItem, {
      initialState: { permissions: { data: ["DELETE"] } }
    });

    const deleteButton = getByText("Delete");
    expect(deleteButton).toBeVisible();
    expect(queryByText("Update")).toBeNull();

    fireEvent.click(deleteButton);

    expect(getByText(`Delete ${product.name}`)).toBeVisible();
  });
});
