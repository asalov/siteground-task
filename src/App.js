import React, { Component } from 'react';
import { connect } from 'react-redux';

import { canRead, canCreate } from './reducers/permissions';
import { fetchPermissions } from './actions/permissions';
import { getProducts } from './actions/products';

import {
  AddProductForm,
  ListProducts
} from './components';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.props.fetchPermissions();
  }

  componentWillReceiveProps(nextProps) {
    const { canRead, productsFetched } = nextProps;

    if (canRead && !productsFetched) {
      this.props.getProducts();
    }
  }

  render() {
    const { canRead, canCreate, products } = this.props;

    return (
      <div className="container">
        {canCreate && <AddProductForm />}
        {canRead && <ListProducts products={products} />}
      </div>
    );
  }
}

export default connect(({ products, permissions }) => ({
  products: products.data,
  productsFetched: products.fetched,
  canRead: canRead(permissions.data),
  canCreate: canCreate(permissions.data)
}), {
  fetchPermissions,
  getProducts
})(App);
