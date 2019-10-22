import config from "config/config";

class PermissionsService {
  constructor() {
    this.endpoint = `${config.apiEndpoint}/permissions`;
  }

  async getPermissions() {
    return fetch(this.endpoint).then(response => response.json());
  }
}

export default PermissionsService;
