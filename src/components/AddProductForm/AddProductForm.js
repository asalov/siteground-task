import React, { Component } from 'react';

import ProductFormFields from '../ProductFormFields/ProductFormFields';
import ActionButton from '../ActionButton/ActionButton';

export default class AddProduct extends Component {
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

    console.log(this.state);

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
