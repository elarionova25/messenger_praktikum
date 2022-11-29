import {Block} from "../../core";
import './profile.css';
import AuthController from "../../controllers/AuthController";
import store, {withStore} from "../../core/Store";
import {host} from "../../api/host";

type ProfilePageProps = {
    user: any;
}


export class ProfilePageBase extends Block {
    static componentName = 'ProfilePage';

    constructor({...props}: ProfilePageProps) {
        super({...props});
        this.setProps({
            onLogout:() => {
                AuthController.logout();
            }
        })
    }

    // language=hbs
    render() {
        return `
            <div class="container">
                <div class="back-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 19 19" fill="none" stroke="#999999"
                         stroke-width="3" stroke-linecap="butt" stroke-linejoin="arcs">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                    <a href="/" class="back-btn" style="color: #999">
                        Назад
                    </a>
                </div>
                <div class="profile-container">
                    <div class="profile">
                        <div class="avatar-wrap">
                            {{#if user.avatar}}
                                <img src="${host}/api/v2/resources/{{user.avatar}}" alt="avatar" class="profile-img">
                            {{else}}
                                <img src="https://archive.org/download/no-photo-available/no-photo-available.png" alt="avatar" class="profile-img">
                            {{/if}}
                        </div>
                        <div class="name-wrap">
                            <p class="name">
                                <b>
                                    {{user.first_name}}
                                </b>
                            </p>
                        </div>
                        <div class="wrap">
                            <div class="info-wrap">
                                <p class="info-label">
                                    Почта
                                </p>
                                <p class="info">
                                    {{user.email}}
                                </p>
                            </div>
                            <div class="info-wrap">
                                <p class="info-label">
                                    Логин
                                </p>
                                <p class="info">
                                    {{user.login}}
                                </p>
                            </div>
                            <div class="info-wrap">
                                <p class="info-label">
                                    Имя
                                </p>
                                <p class="info">
                                    {{user.first_name}}
                                </p>
                            </div>
                            <div class="info-wrap">
                                <p class="info-label">
                                    Фамилия
                                </p>
                                <p class="info">
                                    {{user.second_name}}
                                </p>
                            </div>
                            <div class="info-wrap">
                                <p class="info-label">
                                    Имя в чате
                                </p>
                                <p class="info">
                                    {{user.display_name}}
                                </p>
                            </div>
                            <div class="info-wrap">
                                <p class="info-label">
                                    Телефон
                                </p>
                                <p class="info">
                                    {{user.phone}}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="links-container">
                        <div class="settings-link">
                            <a href="/data-edit">Изменить данные</a>
                        </div>
                        <div class="settings-link">
                            <a href="/password-change">Изменить пароль</a>
                        </div>
                        <div class="settings-link">
                            {{{Button text="Выйти" 
                                      onClick=onLogout
                                      style="button__button"
                            }}} 
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}
const withUser = withStore((state) => ({user: {...(state.user || undefined)}}));

export const ProfilePage = withUser(ProfilePageBase);