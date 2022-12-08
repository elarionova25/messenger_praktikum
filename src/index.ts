import {NotFoundErrorPage} from "./pages/404/404";

require("babel-core/register");
import { Block, renderDOM, registerComponent}  from './core';
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
import store, {Store} from "./core/Store";
import {MessageElement} from "./components/message-element/message-element";
import {ChatWrap} from "./components/chat-wrap/chat-wrap";
import AuthController from "./controllers/AuthController";

registerComponent(MainPage);
registerComponent(RegisterPage);
registerComponent(LoginPage);
registerComponent(ProfilePage);
registerComponent(DataEditPage);
registerComponent(PasswordChangePage);

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
registerComponent(MessageElement);
registerComponent(ChatWrap)

declare global {
    interface Window {
        store: Store;
    }
}

enum Routes {
    Main = '/',
    Register = '/register',
    Profile = '/profile',
    Login ='/login',
    DataEdit='/data-edit',
    PasswordChange='/password-change'
}

window.addEventListener("DOMContentLoaded", async () => {

    if (store.getState().user === undefined && window.location.pathname!='/register') {
        try {
            await AuthController.fetchUser();
        } catch (e: any) {
            console.log('error_index')
        }
    }

    Router
        .use(Routes.Main, MainPage)
        .use(Routes.Login, LoginPage)
        .use(Routes.Register, RegisterPage)
        .use(Routes.Profile, ProfilePage)
        .use(Routes.DataEdit, DataEditPage)
        .use(Routes.PasswordChange, PasswordChangePage)

    switch (window.location.pathname) {
        case Routes.Main: {
            renderDOM(new MainPage());
            break;
        }
        case Routes.Register: {
            renderDOM(new RegisterPage());
            break;
        }
        case Routes.Login: {
            renderDOM(new LoginPage());
            break;
        }
        case Routes.Profile: {
            // @ts-ignore
            renderDOM(new ProfilePage());
            break;
        }
        case Routes.DataEdit: {
            // @ts-ignore
            renderDOM(new DataEditPage());
            break;
        }
        case Routes.PasswordChange: {
            // @ts-ignore
            renderDOM(new PasswordChangePage());
            break;
        }
        default: {
            renderDOM(new NotFoundErrorPage());
            break;
        }
    }
});