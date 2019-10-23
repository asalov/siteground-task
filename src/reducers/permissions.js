import { ACTIONS } from "actions/permissions";

const initialState = {
  data: [],
  fetching: false,
  fetched: false,
  error: null
};

const permissions = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.FETCH_PERMISSIONS:
      return {
        ...state,
        fetching: true
      };
    case ACTIONS.FETCH_PERMISSIONS_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: payload
      };
    case ACTIONS.FETCH_PERMISSIONS_ERROR:
      return {
        ...state,
        fetching: false,
        error: payload
      };
    default:
      return state;
  }
};

export default permissions;
