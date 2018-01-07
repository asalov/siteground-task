import config from '../config/config';

class ProductsService {
  constructor() {
    this.endpoint = `${config.apiEndpoint}/products`;
  }

  sendRequest(url) {
    return fetch(url)
          .then(response => response.json());
  }

  getAll() {
    return this.sendRequest(this.endpoint);
  }

  getById(id) {
    return this.sendRequest(`${this.endpoint}/${id}`);
  }

  create(product) {
    // TODO
  }

  update(product) {
    // TODO
  }

  delete(id) {
    // TODO
  }
}

export default ProductsService;
