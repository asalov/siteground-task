import PermissionsService from "services/PermissionsService";

export const ACTIONS = {
  FETCH_PERMISSIONS: "FETCH_PERMISSIONS",
  FETCH_PERMISSIONS_SUCCESS: "FETCH_PERMISSIONS_SUCCESS",
  FETCH_PERMISSIONS_ERROR: "FETCH_PERMISSIONS_ERROR"
};

export const fetchPermissions = () => dispatch => {
  const permissionService = new PermissionsService();

  dispatch({
    type: ACTIONS.FETCH_PERMISSIONS
  });

  permissionService
    .getPermissions()
    .then(permissions => {
      dispatch({
        type: ACTIONS.FETCH_PERMISSIONS_SUCCESS,
        payload: permissions
      });
    })
    .catch(err => {
      dispatch({
        type: ACTIONS.FETCH_PERMISSIONS_ERROR,
        payload: err
      });
    });
};
