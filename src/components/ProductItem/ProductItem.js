import React, { useState } from "react";
import { useSelector } from "react-redux";

import { canUpdate, canDelete } from "config/permissions";
import { UpdateButton, DeleteButton } from "components/buttons";
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
          <UpdateButton onClick={() => setUpdateModalVisibility(true)} />
        )}
        {canDeleteProducts && (
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

export default ProductItem;
