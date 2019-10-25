import React from "react";

import { renderWithRedux } from "setupTests";
import App from "App";

describe("App", () => {
  it("should show add form", () => {
    const { getByText, queryByText } = renderWithRedux(<App />, {
      initialState: {
        permissions: { data: ["CREATE"] },
        products: { data: [] }
      }
    });

    expect(getByText("Add New Product")).toBeVisible();
    expect(queryByText("All Products")).toBeNull();
  });

  it("should show list of added products", () => {
    const products = [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" }
    ];
    const { getByText, queryByText, getByTestId } = renderWithRedux(<App />, {
      initialState: {
        permissions: { data: ["READ"] },
        products: { data: products }
      }
    });

    expect(getByText("All Products")).toBeVisible();
    expect(getByTestId("product-list").children.length).toEqual(
      products.length
    );
    expect(queryByText("Add New Product")).toBeNull();
  });
});
