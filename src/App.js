import React, { Component } from 'react';

import ProductsService from './services/ProductsService';
import PermissionsService from './services/PermissionsService';

import {
  AddProductForm,
  ListProducts
} from './components';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.productsService = new ProductsService();
    this.permissionsService = new PermissionsService();

    this.state = {
      products: [],
      permissions: []
    };
  }

  componentDidMount() {
    this.productsService.getAll().then((data) => {
      this.setState({
        products: data
      });
    });
  }

  render() {
    const { products } = this.state;
    const permissions = this.permissionsService;

    return (
      <div className="container">
        {permissions.canCreate() && <AddProductForm />}
        {permissions.canRead() && <ListProducts products={products} />}
      </div>
    );
  }
}

export default App;
