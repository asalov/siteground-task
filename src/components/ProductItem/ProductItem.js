import React, { Component } from 'react';
import { connect } from 'react-redux';

import { canUpdate, canDelete } from '../../reducers/permissions';

import UpdateButton from '../UpdateButton/UpdateButton';
import DeleteButton from '../DeleteButton/DeleteButton';

import UpdateProductModal from '../UpdateProductModal/UpdateProductModal';
import DeleteProductModal from '../DeleteProductModal/DeleteProductModal';

class ProductItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updateModalVisible: false,
      deleteModalVisible: false
    };
  }

  showUpdateModal = () => this.toggleModal('update', true);

  closeUpdateModal = () => this.toggleModal('update', false);

  showDeleteModal = () => this.toggleModal('delete', true);

  closeDeleteModal = () => this.toggleModal('delete', false);

  toggleModal = (name, isOpen) => {
    const modal = `${name}ModalVisible`;

    this.setState({
      [modal]: isOpen
    });
  }

  render() {
    const { product, canUpdate, canDelete } = this.props;
    const {
      updateModalVisible,
      deleteModalVisible
    } = this.state;

    return (
      <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.currency}</td>
        <td>
          {canUpdate && <UpdateButton onClick={this.showUpdateModal} />}
          {canDelete && <DeleteButton onClick={this.showDeleteModal} />}
        </td>
        {canUpdate &&
          <UpdateProductModal
            product={product}
            show={updateModalVisible}
            onClose={this.closeUpdateModal}
          />
        }
        {canDelete &&
          <DeleteProductModal
            product={product}
            show={deleteModalVisible}
            onClose={this.closeDeleteModal}
          />
        }
      </tr>
    );
  }
};

export default connect(({ permissions }) => ({
  canUpdate: canUpdate(permissions.data),
  canDelete: canDelete(permissions.data)
}), {})(ProductItem);
