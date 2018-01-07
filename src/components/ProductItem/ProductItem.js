import React, { Component } from 'react';

import UpdateButton from '../UpdateButton/UpdateButton';
import DeleteButton from '../DeleteButton/DeleteButton';

import UpdateProductModal from '../UpdateProductModal/UpdateProductModal';
import DeleteProductModal from '../DeleteProductModal/DeleteProductModal';

export default class ProductItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updateModalVisible: false,
      deleteModalVisible: false
    };
  }

  showUpdateModal = () => {
    this.setState({
      updateModalVisible: true
    });
  };

  closeUpdateModal = () => {
    this.setState({
      updateModalVisible: false
    });
  }

  showDeleteModal = () => {
    this.setState({
      deleteModalVisible: true
    });
  }

  closeDeleteModal = () => {
    this.setState({
      deleteModalVisible: false
    });
  }

  render() {
    const { product } = this.props;
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
          <UpdateButton onClick={this.showUpdateModal} />
          <DeleteButton onClick={this.showDeleteModal} />
        </td>
        <UpdateProductModal product={product} show={updateModalVisible} onClose={this.closeUpdateModal} />
        <DeleteProductModal product={product} show={deleteModalVisible} onClose={this.closeDeleteModal} />
      </tr>
    );
  }
};
