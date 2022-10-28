import {CoreRouter} from "./core/Router/CoreRouter";

require("babel-core/register");
import { Block, renderDOM, registerComponent }  from './core';
import {Store} from "./core/Store";
import { initApp } from './services/initApp';
import { defaultState } from './store';
import { initRouter } from './router';

import './style.css';

import {MainPage} from "./pages/main/main";

import Button from './components/button';
import Link from './components/link';
import Input from './components/input';
import Layout from './components/layout';
import {ChatList} from "./components/chat-list/chat-list";
import {ChatElement} from "./components/chat-element/chat-element";
import {Chat} from "./components/chat/chat";
import {ProfileData} from "./components/profile-data/profile-data";
import AvatarInput from "./components/avatar-input";
import {Plug} from "./components/plug/plug";
import {Modal} from "./components/modals/modal";
import {Error} from "./components/error/error";
import {ControllerInput} from "./components/controller-input/controller-input";
import {SimpleInput} from "./components/simple-input/simple-input";
import {SendButton} from "./components/send-button/send-button";
import {PathRouter} from "./core/Router/PathRouter";

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
registerComponent(Error);
registerComponent(ControllerInput);
registerComponent(SimpleInput);
registerComponent(SendButton);

declare global {
    interface Window {
        store: Store<AppState>;
        router: CoreRouter;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const store = new Store<AppState>(defaultState);
    const router = new PathRouter();

    /**
     * Помещаем роутер и стор в глобальную область для доступа в хоках with*
     * @warning Не использовать такой способ на реальный проектах
     */
    window.router = router;
    window.store = store;

    renderDOM(new MainPage({}));

    store.on('changed', (prevState, nextState) => {
        if (process.env.DEBUG) {
            console.log(
                '%cstore updated',
                'background: #222; color: #bada55',
                nextState,
            );
        }
    });

    initRouter(router, store);

    store.dispatch(initApp);
});