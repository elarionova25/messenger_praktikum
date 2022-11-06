import API, {AuthAPI, SigninData, SignupData} from '../api/AuthAPI';
import store from '../core/Store';
import router from '../core/Router';
import {renderDOM} from "../core";
import LoginPage from "../pages/login";

export class AuthController {
  private readonly api: AuthAPI;

  constructor() {
    this.api = API;
  }

  async signin(data: SigninData) {
    try {
      await this.api.signin(data);
      router.go('/profile');
    } catch (e: any) {
      console.error(e);
      router.go('/error500');
    }
  }

  async signup(data: SignupData) {
    try {
      await this.api.signup(data);

      await this.fetchUser();

      router.go('/profile');
    } catch (e: any) {
      console.error(e.message);
      router.go('/error500');
    }
  }

  async fetchUser() {
    const user = await this.api.read();

    store.set('user', user);
  }

  async logout() {
    try {
      await this.api.logout();
      router.go('/login');
      renderDOM(new LoginPage())
    } catch (e: any) {
      console.error(e.message);
      router.go('/error500');
    }
  }
}

export default new AuthController();
