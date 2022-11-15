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
      router.go('/');
    } catch (e: any) {
      console.log('error');
    }
  }

  async signup(data: SignupData) {
    try {
      await this.api.signup(data);
      await this.fetchUser();
      router.go('/');
    } catch (e: any) {
        console.log('error');
    }
  }

  async fetchUser() {
      try {
          const user = await this.api.read();
          store.set('user', user);
      } catch (e: any) {
          console.log('error');
          router.go('/login')
          // router.go('/register');
      }
  }

  async logout() {
    try {
      await this.api.logout();
      router.go('/login');
      renderDOM(new LoginPage())
    } catch (e: any) {
        console.log('error');
    }
  }
}

export default new AuthController();
