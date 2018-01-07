import React, { Component } from 'react';

import { Modal } from 'react-bootstrap';

import ProductFormFields from '../ProductFormFields/ProductFormFields';
import ActionButton from '../ActionButton/ActionButton';

export default class UpdateProductModal extends Component {
  constructor(props) {
    super(props);

    const { name, price, currency } = this.props.product;
    this.state = {
      name,
      price,
      currency
    };
  }

  handleChange = (e) => {
    const field = e.target;

    this.setState({
      [field.id]: field.value
    });
  }

  handleUpdate = () => {
    console.log(this.state);

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
