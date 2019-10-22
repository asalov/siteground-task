import PermissionsService from "services/PermissionsService";

export const actions = {
  fetchPermissions: "FETCH_PERMISSIONS",
  fetchPermissionsSuccess: "FETCH_PERMISSIONS_SUCCESS",
  fetchPermissionsError: "FETCH_PERMISSIONS_ERROR"
};

export const fetchPermissions = () => dispatch => {
  const permissionService = new PermissionsService();

  dispatch({
    type: actions.fetchPermissions
  });

  permissionService
    .getPermissions()
    .then(permissions => {
      dispatch({
        type: actions.fetchPermissionsSuccess,
        payload: permissions
      });
    })
    .catch(err => {
      dispatch({
        type: actions.fetchPermissionsError,
        payload: err
      });
    });
};
