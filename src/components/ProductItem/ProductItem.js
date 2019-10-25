import React, { useState } from "react";
import { useSelector } from "react-redux";

import { canUpdate, canDelete } from "config/permissions";
import ActionButton from "components/ActionButton/ActionButton";
import { UpdateProductModal, DeleteProductModal } from "components/modals";

const ProductItem = ({ product }) => {
  const permissions = useSelector(({ permissions }) => permissions.data);
  const canUpdateProducts = canUpdate(permissions);
  const canDeleteProducts = canDelete(permissions);
  const [isUpdateModalVisible, setUpdateModalVisibility] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisibility] = useState(false);

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.currency}</td>
      <td>
        {canUpdateProducts && (
          <ActionButton
            text="Update"
            buttonStyle="success"
            onClick={() => setUpdateModalVisibility(true)}
          />
        )}
        {canDeleteProducts && (
          <ActionButton
            text="Delete"
            buttonStyle="danger"
            onClick={() => setDeleteModalVisibility(true)}
          />
        )}
      </td>
      {canUpdateProducts && (
        <UpdateProductModal
          product={product}
          show={isUpdateModalVisible}
          onClose={() => setUpdateModalVisibility(false)}
        />
      )}
      {canDeleteProducts && (
        <DeleteProductModal
          product={product}
          show={isDeleteModalVisible}
          onClose={() => setDeleteModalVisibility(false)}
        />
      )}
    </tr>
  );
};

export default ProductItem;
