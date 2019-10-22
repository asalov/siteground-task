import { actions } from "actions/permissions";

const initialState = {
  data: [],
  fetching: false,
  fetched: false,
  error: null
};

const permissions = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.fetchPermissions:
      return {
        ...state,
        fetching: true
      };
    case actions.fetchPermissionsSuccess:
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: payload
      };
    case actions.fetchPermissionsError:
      return {
        ...state,
        fetching: false,
        error: payload
      };
    default:
      return state;
  }
};

const keyExists = (permissions, key) => {
  return permissions.includes(key);
};

export const canRead = permissions => {
  return keyExists(permissions, "READ");
};

export const canCreate = permissions => {
  return keyExists(permissions, "CREATE");
};

export const canUpdate = permissions => {
  return keyExists(permissions, "UPDATE");
};

export const canDelete = permissions => {
  return keyExists(permissions, "DELETE");
};

export default permissions;
