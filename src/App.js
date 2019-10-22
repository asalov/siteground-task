import React, { useEffect } from "react";
import { connect } from "react-redux";

import { canRead, canCreate } from "reducers/permissions";
import { fetchPermissions } from "actions/permissions";
import { getProducts } from "actions/products";
import AddProductForm from "components/AddProductForm/AddProductForm";
import ListProducts from "components/ListProducts/ListProducts";

import "./App.css";

const App = ({
  fetchPermissions,
  getProducts,
  canRead,
  canCreate,
  products,
  productsFetched
}) => {
  useEffect(() => {
    fetchPermissions();
  }, [fetchPermissions]);

  useEffect(() => {
    if (canRead && !productsFetched) {
      getProducts();
    }
  }, [getProducts, canRead, productsFetched]);

  return (
    <div className="container">
      {canCreate && <AddProductForm />}
      {canRead && <ListProducts products={products} />}
    </div>
  );
};

export default connect(
  ({ products, permissions }) => ({
    products: products.data,
    productsFetched: products.fetched,
    canRead: canRead(permissions.data),
    canCreate: canCreate(permissions.data)
  }),
  {
    fetchPermissions,
    getProducts
  }
)(App);
