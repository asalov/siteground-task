import React from "react";
import { useSelector } from "react-redux";

import { canUpdate, canDelete } from "config/permissions";
import { useModal } from "hooks/useModal";
import ActionButton from "components/ActionButton/ActionButton";
import { UpdateProductModal, DeleteProductModal } from "components/modals";

const ProductItem = ({ product }) => {
  const permissions = useSelector(({ permissions }) => permissions.data);
  const canUpdateProducts = canUpdate(permissions);
  const canDeleteProducts = canDelete(permissions);
  const [isUpdateModalVisible, toggleUpdateModal] = useModal(false);
  const [isDeleteModalVisible, toggleDeleteModal] = useModal(false);

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.currency}</td>
      <td>
        {canUpdateProducts && (
          <ActionButton
            data-testid="update-product-button"
            text="Update"
            buttonStyle="success"
            onClick={toggleUpdateModal}
          />
        )}
        {canDeleteProducts && (
          <ActionButton
            data-testid="delete-product-button"
            text="Delete"
            buttonStyle="danger"
            onClick={toggleDeleteModal}
          />
        )}
      </td>
      {canUpdateProducts && (
        <UpdateProductModal
          product={product}
          show={isUpdateModalVisible}
          onClose={toggleUpdateModal}
        />
      )}
      {canDeleteProducts && (
        <DeleteProductModal
          product={product}
          show={isDeleteModalVisible}
          onClose={toggleDeleteModal}
        />
      )}
    </tr>
  );
};

export default ProductItem;
