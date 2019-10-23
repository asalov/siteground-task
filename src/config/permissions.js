const PERMISSIONS = {
  READ: "READ",
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE"
};

const keyExists = (permissions, key) => permissions.includes(key);

export const canRead = permissions => keyExists(permissions, PERMISSIONS.READ);

export const canCreate = permissions =>
  keyExists(permissions, PERMISSIONS.CREATE);

export const canUpdate = permissions =>
  keyExists(permissions, PERMISSIONS.UPDATE);

export const canDelete = permissions =>
  keyExists(permissions, PERMISSIONS.DELETE);
