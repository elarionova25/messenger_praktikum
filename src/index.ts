import OnboardingPage from "./pages/onBoarding";
import LoginPage from "./pages/login";

require("babel-core/register");
import { Block, renderDOM, registerComponent }  from './core';

import './styles/style.css';

import Button from './components/button';
import Link from './components/link';
import Input from './components/input';
import Layout from './components/layout';
import {ChatList} from "./components/chat-list/chat-list";
import {RegisterPage} from "./pages/register/register";
import {MainPage} from "./pages/main/main";
import {ChatElement} from "./components/chat-element/chat-element";
import {Chat} from "./components/chat/chat";
import {ProfilePage} from "./pages/profile/profile";
import {ProfileData} from "./components/profile-data/profile-data";
import {DataEditPage} from "./pages/data-edit/data-edit";
import AvatarInput from "./components/avatar-input";
import {PasswordChangePage} from "./pages/password-change/password-change";
import {Plug} from "./components/plug/plug";
import {Modal} from "./components/modals/modal";

registerComponent(Button);
registerComponent(Link);
registerComponent(Input);
registerComponent(Layout);
registerComponent(ChatList);
registerComponent(ChatElement);
registerComponent(Chat);
registerComponent(ProfileData);
registerComponent(AvatarInput);
registerComponent(Plug);
registerComponent(ProfileData);
registerComponent(Modal);

document.addEventListener("DOMContentLoaded", () => {
    renderDOM(new MainPage());
});