import {getMe, postLogin} from '../api/users';

export const auth = {
  isAuthenticated: false,
  authenticate(email, password) {
    return postLogin(email, password)
      .then((data) => {
        localStorage.token = data.token;
        this.isAuthenticated = true;
      })
      .catch(() => {
        localStorage.token = '';
        localStorage.firstName = '';
        this.isAuthenticated = false;
      });
  },
  signout() {
    this.isAuthenticated = false;
    localStorage.token = '';
    localStorage.firstName = '';
  },
  checkToken() {
    return getMe()
      .then((data) => {
        this.isAuthenticated = true;
        localStorage.firstName = data.firstName;
      })
      .catch(() => {
        this.isAuthenticated = false;
        localStorage.token = '';
        localStorage.firstName = '';
      });
  },
};
