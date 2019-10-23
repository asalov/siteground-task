import ProductsService from "services/ProductsService";

export const ACTIONS = {
  GET_PRODUCTS: "GET_PRODUCTS",
  GET_PRODUCTS_SUCCESS: "GET_PRODUCTS_SUCCESS",
  GET_PRODUCTS_ERROR: "GET_PRODUCTS_ERROR",
  CREATE_PRODUCT: "CREATE_PRODUCT",
  CREATE_PRODUCT_SUCCESS: "CREATE_PRODUCT_SUCCESS",
  CREATE_PRODUCT_ERROR: "CREATE_PRODUCT_ERROR",
  UPDATE_PRODUCT: "UPDATE_PRODUCT",
  UPDATE_PRODUCT_SUCCESS: "UPDATE_PRODUCT_SUCCESS",
  UPDATE_PRODUCT_ERROR: "UPDATE_PRODUCT_ERROR",
  DELETE_PRODUCT: "DELETE_PRODUCT",
  DELETE_PRODUCT_SUCCESS: "DELETE_PRODUCT_SUCCESS",
  DELETE_PRODUCT_ERROR: "DELETE_PRODUCT_ERROR"
};

const productService = new ProductsService();

export const getProducts = () => dispatch => {
  dispatch({
    type: ACTIONS.GET_PRODUCTS
  });

  productService
    .getAll()
    .then(products => {
      dispatch({
        type: ACTIONS.GET_PRODUCTS_SUCCESS,
        payload: products
      });
    })
    .catch(err => {
      dispatch({
        type: ACTIONS.GET_PRODUCTS_ERROR,
        payload: err
      });
    });
};

export const createProduct = product => dispatch => {
  dispatch({
    type: ACTIONS.CREATE_PRODUCT
  });

  productService
    .create(product)
    .then(res => {
      dispatch({
        type: ACTIONS.CREATE_PRODUCT_SUCCESS,
        payload: res
      });
    })
    .catch(err => {
      dispatch({
        type: ACTIONS.CREATE_PRODUCT_ERROR,
        payload: err
      });
    });
};

export const updateProduct = product => dispatch => {
  dispatch({
    type: ACTIONS.UPDATE_PRODUCT
  });

  productService
    .update(product)
    .then(res => {
      dispatch({
        type: ACTIONS.UPDATE_PRODUCT_SUCCESS,
        payload: res
      });
    })
    .catch(err => {
      dispatch({
        type: ACTIONS.UPDATE_PRODUCT_ERROR,
        payload: err
      });
    });
};

export const deleteProduct = productId => dispatch => {
  dispatch({
    type: ACTIONS.DELETE_PRODUCT,
    payload: productId
  });

  productService
    .delete(productId)
    .then(res => {
      dispatch({
        type: ACTIONS.DELETE_PRODUCT_SUCCESS,
        payload: res
      });
    })
    .catch(err => {
      dispatch({
        type: ACTIONS.DELETE_PRODUCT_ERROR,
        payload: err
      });
    });
};
