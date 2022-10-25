import {Store, renderDOM, CoreRouter} from './core';
import {getScreenComponent, Screens} from './utils';

const routes = [
    {
        path: '/main',
        block: Screens.Main,
        shouldAuthorized: false,
    },
    {
        path: '/login',
        block: Screens.Login,
        shouldAuthorized: false,
    },
    {
        path: '/profile',
        block: Screens.Profile,
        //shouldAuthorized: true,
        shouldAuthorized: false,
    },
    {
        path: '/data-edit',
        block: Screens.DataEdit,
        shouldAuthorized: false,
//        shouldAuthorized: true,
    },
    {
        path: '/register',
        block: Screens.Register,
        shouldAuthorized: false,
        //shouldAuthorized: true,
    },
    {
        path: '/password-change',
        block: Screens.PasswordChange,
        shouldAuthorized: false,
        //shouldAuthorized: true,
    },
    {
        path: '*',
        block: Screens.Main,
        shouldAuthorized: false,
    },
];

export function initRouter(router: CoreRouter, store: Store<AppState>) {
    routes.forEach(route => {
        router.use(route.path, () => {
            const isAuthorized = Boolean(store.getState().user);
            const currentScreen = Boolean(store.getState().screen);

            if (isAuthorized || !route.shouldAuthorized) {
                store.dispatch({screen: route.block});
                return;
            }

            if (!currentScreen) {
                store.dispatch({screen: Screens.Main});
            }
        });
    });

    store.on('changed', (prevState, nextState) => {
        if (!prevState.appIsInited && nextState.appIsInited) {
            router.start();
        }

        if (prevState.screen !== nextState.screen) {
            const Page = getScreenComponent(nextState.screen);
            renderDOM(new Page({}));
            document.title = `${Page.componentName}`;
        }
    });
}
