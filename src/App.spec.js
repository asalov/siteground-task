import React from "react";

import { renderWithRedux } from "setupTests";
import App from "App";

describe("App", () => {
  it("should show add form", () => {
    const { getByTestId, queryByTestId } = renderWithRedux(<App />, {
      initialState: {
        permissions: { data: ["CREATE"] },
        products: { data: [] }
      }
    });

    expect(getByTestId("add-product-form-title")).toBeVisible();
    expect(queryByTestId("product-list")).toBeNull();
  });

  it("should show list of added products", () => {
    const products = [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" }
    ];
    const { getByTestId, queryByTestId } = renderWithRedux(<App />, {
      initialState: {
        permissions: { data: ["READ"] },
        products: { data: products }
      }
    });

    const productList = getByTestId("product-list");

    expect(productList).toBeVisible();
    expect(productList.children.length).toEqual(products.length);
    expect(queryByTestId("add-product-form-title")).toBeNull();
  });
});
