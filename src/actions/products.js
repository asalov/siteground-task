import ProductsService from '../services/ProductsService';

export const actions = {
  getProducts: 'GET_PRODUCTS',
  getProductsSuccess: 'GET_PRODUCTS_SUCCESS',
  getProductsError: 'GET_PRODUCTS_ERROR',
  createProduct: 'CREATE_PRODUCT',
  createProductSuccess: 'CREATE_PRODUCT_SUCCESS',
  createProductError: 'CREATE_PRODUCT_SUCCESS',
  updateProduct: 'UPDATE_PRODUCT',
  updateProductSuccess: 'UPDATE_PRODUCT_SUCCESS',
  updateProductError: 'UPDATE_PRODUCT_ERROR',
  deleteProduct: 'DELETE_PRODUCT',
  deleteProductSuccess: 'DELETE_PRODUCT_SUCCESS',
  deleteProductError: 'DELETE_PRODUCT_ERROR'
};

const productService = new ProductsService();

export const getProducts = () => (dispatch) => {
  dispatch({
    type: actions.getProducts
  });

  productService.getAll()
    .then((products) => {
      dispatch({
        type: actions.getProductsSuccess,
        payload: products
      });
    })
    .catch((err) => {
      dispatch({
        type: actions.getProductsError,
        payload: err
      });
    });
};

export const createProduct = (product) => (dispatch) => {
  dispatch({
    type: actions.createProduct
  });

  productService.create(product)
    .then((res) => {
      dispatch({
        type: actions.createProductSuccess,
        payload: res
      });
    })
    .catch((err) => {
      dispatch({
        type: actions.createProductError,
        payload: err
      });
    });
};

export const updateProduct = (product) => (dispatch) => {
  dispatch({
    type: actions.updateProduct
  });

  productService.update(product)
    .then((res) => {
      dispatch({
        type: actions.updateProductSuccess,
        payload: res
      });
    })
    .catch((err) => {
      dispatch({
        type: actions.updateProductError,
        payload: err
      });
    });
};

export const deleteProduct = (productId) => (dispatch) => {
  dispatch({
    type: actions.deleteProduct,
    payload: productId
  });

  productService.delete(productId)
    .then((res) => {
      dispatch({
        type: actions.deleteProductSuccess,
        payload: res
      });
    })
    .catch((err) => {
      dispatch({
        type: actions.deleteProductError,
        payload: err
      });
    });
};
