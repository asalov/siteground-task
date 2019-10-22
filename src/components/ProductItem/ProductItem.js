import React, { useState } from "react";
import { connect } from "react-redux";

import { canUpdate, canDelete } from "reducers/permissions";
import { UpdateButton, DeleteButton } from "components/buttons";
import { UpdateProductModal, DeleteProductModal } from "components/modals";

const ProductItem = ({ product, canUpdate, canDelete }) => {
  const [isUpdateModalVisible, setUpdateModalVisibility] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisibility] = useState(false);

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.currency}</td>
      <td>
        {canUpdate && (
          <UpdateButton onClick={() => setUpdateModalVisibility(true)} />
        )}
        {canDelete && (
          <DeleteButton onClick={() => setDeleteModalVisibility(true)} />
        )}
      </td>
      {canUpdate && (
        <UpdateProductModal
          product={product}
          show={isUpdateModalVisible}
          onClose={() => setUpdateModalVisibility(false)}
        />
      )}
      {canDelete && (
        <DeleteProductModal
          product={product}
          show={isDeleteModalVisible}
          onClose={() => setDeleteModalVisibility(false)}
        />
      )}
    </tr>
  );
};

export default connect(
  ({ permissions }) => ({
    canUpdate: canUpdate(permissions.data),
    canDelete: canDelete(permissions.data)
  }),
  {}
)(ProductItem);
