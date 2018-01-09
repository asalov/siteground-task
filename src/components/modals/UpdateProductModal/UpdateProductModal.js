import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';

import { updateProduct } from 'actions/products';

import ProductFormFields from 'components/ProductFormFields/ProductFormFields';
import { ActionButton } from 'components/buttons';

class UpdateProductModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.product
    };
  }

  handleChange = (e) => {
    const field = e.target;

    this.setState({
      [field.id]: field.value
    });
  }

  handleUpdate = () => {
    this.props.updateProduct(this.state);

    this.props.onClose();
  }

  render() {
    const { product, show, onClose } = this.props;

    return (
      <Modal show={show} onHide={onClose}>
        <Modal.Header>
          <Modal.Title>Update {product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductFormFields handleChange={this.handleChange} {...this.state} />
        </Modal.Body>
        <Modal.Footer>
          <ActionButton type="primary" text="Save" onClick={this.handleUpdate} />
          <ActionButton type="default" text="Cancel" onClick={onClose} />
        </Modal.Footer>
      </Modal>
    );
  }
}

export default connect(null, {
  updateProduct
})(UpdateProductModal);
