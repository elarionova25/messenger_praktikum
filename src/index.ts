import {NotFoundErrorPage} from "./pages/404/404";

require("babel-core/register");
import { Block, renderDOM, registerComponent }  from './core';
import Router from "./core/Router";
import './styles/style.css';

import LoginPage from "./pages/login";
import {RegisterPage} from "./pages/register/register";
import {ProfilePage} from "./pages/profile/profile";
import {DataEditPage} from "./pages/data-edit/data-edit";
import {PasswordChangePage} from "./pages/password-change/password-change";
import {MainPage} from "./pages/main/main";

import Button from './components/button';
import Link from './components/link';
import Input from './components/input';
import Layout from './components/layout';
import {ChatList} from "./components/chat-list/chat-list";
import {ChatElement} from "./components/chat-element/chat-element";
import {Chat} from "./components/chat/chat";
import AvatarInput from "./components/avatar-input";
import {Plug} from "./components/plug/plug";
import {Modal} from "./components/modals/modal";
import {Error} from "./components/error/error";
import {ControllerInput} from "./components/controller-input/controller-input";
import {SimpleInput} from "./components/simple-input/simple-input";
import {SendButton} from "./components/send-button/send-button";
import {ServerError} from "./pages/500/500";

registerComponent(Button);
registerComponent(Link);
registerComponent(Input);
registerComponent(Layout);
registerComponent(ChatList);
registerComponent(ChatElement);
registerComponent(Chat);
registerComponent(AvatarInput);
registerComponent(Plug);
registerComponent(Modal);
registerComponent(Error);
registerComponent(ControllerInput);
registerComponent(SimpleInput);
registerComponent(SendButton);

enum Routes {
    Main = '/',
    Register = '/register',
    Profile = '/profile',
    Login ='/login',
    Error404='/error404',
    Error500='/error500',
    DataEdit='/data-edit',
    PasswordChange='/password-change'
}

window.addEventListener("DOMContentLoaded", () => {
    Router
        .use(Routes.Main, MainPage)
        .use(Routes.Login, LoginPage)
        .use(Routes.Register, RegisterPage)
        .use(Routes.Profile, ProfilePage)
        .use(Routes.Error404, NotFoundErrorPage)
        .use(Routes.Error500, ServerError)
        .use(Routes.DataEdit, DataEditPage)
        .use(Routes.PasswordChange, PasswordChangePage)


    switch (window.location.pathname) {
        case Routes.Main: renderDOM(new MainPage()); break;
        case Routes.Register: renderDOM(new RegisterPage()); break;
        case Routes.Login:renderDOM(new LoginPage()); break;
        case Routes.Profile:renderDOM(new ProfilePage()); break;
        case Routes.Error404:renderDOM(new NotFoundErrorPage()); break;
        case Routes.Error500:renderDOM(new ServerError()); break;
        case Routes.DataEdit:renderDOM(new DataEditPage()); break;
        case Routes.PasswordChange:renderDOM(new PasswordChangePage()); break;
    }

    // try {
    //     await AuthController.fetchUser();
    //
    //     Router.start();
    //
    //     if (!isProtectedRoute) {
    //         Router.go(Routes.Profile)
    //     }
    // } catch (e) {
    //     Router.start();
    //
    //     if (isProtectedRoute) {
    //         Router.go(Routes.Main);
    //     }
    // }
});