import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createProduct } from '../../actions/products';

import ProductFormFields from '../ProductFormFields/ProductFormFields';
import ActionButton from '../ActionButton/ActionButton';

class AddProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      name: '',
      price: '',
      currency: ''
    };
  }

  handleChange = (e) => {
    const field = e.target;

    this.setState({
      [field.id]: field.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.createProduct(this.state);
    this.setState(this.getInitialState());
  };

  render() {
    return (
      <div>
        <h3>Add New Product</h3>
        <form>
          <ProductFormFields handleChange={this.handleChange} {...this.state} />
          <ActionButton type="primary" text="Add" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
};

export default connect(null, {
  createProduct
})(AddProductForm);
