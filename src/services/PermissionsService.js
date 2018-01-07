import config from '../config/config';

class PermissionsService {
  constructor() {
    this.endpoint = `${config.apiEndpoint}/permissions`;
    this.permissions = [];

    this.getPermissions().then(data => {
      this.permissions = data;
    });
  }

  getPermissions() {
    return fetch(this.endpoint)
          .then(response => response.json());
  }

  keyExists(key) {
    return this.permissions.includes(key);
  }

  canRead() {
    return this.keyExists('READ');
  }

  canCreate() {
    return this.keyExists('CREATE');
  }

  canUpdate() {
    return this.keyExists('UPDATE');
  }

  canDelete() {
    return this.keyExists('DELETE');
  }
}

export default PermissionsService;
