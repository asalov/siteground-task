import React from "react";

import ProductItem from "components/ProductItem/ProductItem";

const ListProducts = ({ products }) => {
  const rows = products.map(prod => (
    <ProductItem key={prod.id} product={prod} />
  ));

  return (
    <div>
      <h3>All Products</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Currency</th>
            <th></th>
          </tr>
        </thead>
        <tbody data-testid="product-list">{rows}</tbody>
      </table>
    </div>
  );
};

export default ListProducts;
