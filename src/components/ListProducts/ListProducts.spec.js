import React from "react";

import { renderWithRedux } from "setupTests";
import ListProducts from "./ListProducts";

describe("ListProducts", () => {
  it("should show products", () => {
    const products = [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
      { id: 3, name: "Product 3" }
    ];

    const { getByTestId } = renderWithRedux(
      <ListProducts products={products} />
    );

    expect(getByTestId("product-list").children.length).toEqual(
      products.length
    );
  });
});
