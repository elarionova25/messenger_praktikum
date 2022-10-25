import LoginPage from "../pages/login";
import {ProfilePage} from "../pages/profile/profile";
import {BlockClass} from "../core/Block";
import {MainPage} from "../pages/main/main";
import {DataEditPage} from "../pages/data-edit/data-edit";
import {RegisterPage} from "../pages/register/register";
import {PasswordChangePage} from "../pages/password-change/password-change";

export enum Screens {
    Main = 'main',
    Login = 'login',
    Profile = 'profile',
    DataEdit = 'data-edit',
    Register = 'register',
    PasswordChange = 'password-change'
}

const map: Record<Screens, BlockClass<any>> = {
    [Screens.Main]: MainPage,
    [Screens.Login]: LoginPage,
    [Screens.Profile]: ProfilePage,
    [Screens.DataEdit]: DataEditPage,
    [Screens.Register]: RegisterPage,
    [Screens.PasswordChange]: PasswordChangePage,
};

export const getScreenComponent = (screen: Screens): BlockClass<any> => {
    return map[screen];
};
