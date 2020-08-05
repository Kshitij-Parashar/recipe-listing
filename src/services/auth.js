/**
 * Auth service for with authentication functions such 
 * as login, logout, isAuthenticated
 * @constructor
 */
class Auth {
  constructor() {
    this.autheticated = false;
  }
  login(cb) {
    this.autheticated = true;
  }
  logout(cb) {
    this.autheticated = false;
  }
  isAutenticated() {
    return this.autheticated;
  }
}

export default new Auth();
