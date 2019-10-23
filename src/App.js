import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { canRead, canCreate } from "config/permissions";
import { fetchPermissions } from "actions/permissions";
import { getProducts } from "actions/products";
import AddProductForm from "components/AddProductForm/AddProductForm";
import ListProducts from "components/ListProducts/ListProducts";

import "./App.css";

const App = () => {
  const { data: products, fetched: productsFetched } = useSelector(
    state => state.products
  );
  const permissions = useSelector(({ permissions }) => permissions.data);
  const canReadProducts = canRead(permissions);
  const canCreateProducts = canCreate(permissions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPermissions());
  }, [dispatch]);

  useEffect(() => {
    if (canReadProducts && !productsFetched) {
      dispatch(getProducts());
    }
  }, [dispatch, canReadProducts, productsFetched]);

  return (
    <div className="container">
      {canCreateProducts && <AddProductForm />}
      {canReadProducts && <ListProducts products={products} />}
    </div>
  );
};

export default App;
