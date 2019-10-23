import { ACTIONS } from "actions/products";

const initialState = {
  data: [],
  fetched: false,
  error: null
};

let deleteId;

const products = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        fetched: true,
        data: payload
      };
    case ACTIONS.CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        data: [...state.data, payload]
      };
    case ACTIONS.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        data: state.data.map(product => {
          if (product.id === payload.id) {
            return payload;
          }

          return product;
        })
      };
    case ACTIONS.DELETE_PRODUCT:
      deleteId = payload;
      return state;
    case ACTIONS.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        data: state.data.filter(product => product.id !== deleteId)
      };
    case ACTIONS.GET_PRODUCTS_ERROR:
    case ACTIONS.CREATE_PRODUCT_ERROR:
    case ACTIONS.UPDATE_PRODUCT_ERROR:
    case ACTIONS.DELETE_PRODUCT_ERROR:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};

export default products;
