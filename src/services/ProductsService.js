import config from '../config/config';

class ProductsService {
  constructor() {
    this.endpoint = `${config.apiEndpoint}/products`;
  }

  sendRequest(url, options = {}) {
    const defaultOptions = {
      headers: {
        'Content-type': 'application/json'
      }
    };

    return fetch(url, { ...defaultOptions, ...options })
          .then(response => response.json());
  }

  getAll() {
    return this.sendRequest(this.endpoint);
  }

  create(product) {
    return this.sendRequest(this.endpoint, {
      method: 'POST',
      body: JSON.stringify(product)
    });
  }

  update(product) {
    const url = `${this.endpoint}/${product.id}`;

    return this.sendRequest(url, {
      method: 'PUT',
      body: JSON.stringify(product)
    });
  }

  delete(id) {
    const url = `${this.endpoint}/${id}`;

    return this.sendRequest(url, { method: 'DELETE'});
  }
}

export default ProductsService;
