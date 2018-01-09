import { actions } from 'actions/products';

const initialState = {
  data: [],
  fetched: false,
  error: null
};

let deleteId;

const products = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.getProductsSuccess:
      return {
        ...state,
        fetched: true,
        data: payload
      };
    case actions.createProductSuccess:
      return {
        ...state,
        data: [...state.data, payload]
      };
    case actions.updateProductSuccess:
      return {
        ...state,
        data: state.data.map((product) => {
          if (product.id === payload.id) {
            return payload;
          }

          return product;
        })
      }
    case actions.deleteProduct:
      deleteId = payload;
      return state;
    case actions.deleteProductSuccess:
      return {
        ...state,
        data: state.data.filter((product) => {
          return product.id !== deleteId;
        })
      }
    case actions.getProductsError:
    case actions.createProductError:
    case actions.updateProductError:
    case actions.deleteProductError:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
}

export default products;
