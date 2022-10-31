import {Block} from "../../core";
import './profile.css';
import AuthController from "../../controllers/AuthController";
import {withStore} from "../../core/Store";
import {User} from "../../api/AuthAPI";

interface ProfilePageProps {
    user: User | null;
}

export class ProfilePage extends Block {
    constructor(props: ProfilePageProps) {
        super(props);
        console.log(this.props.user)
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
                    <a href="./" class="back-btn" style="color: #999">
                        Назад
                    </a>
                </div>
                <div class="profile-container">
                    <div class="profile">
                        <div class="avatar-wrap">
                            <img src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png" alt="Аватар" class="profile-img">
                        </div>
                        <div class="name-wrap">
                            <p class="name">
                                <b>
                                    Екатерина
                                </b>
                            </p>
                        </div>
                        <div class="wrap">
                            <div class="info-wrap">
                                <p class="info-label">
                                    Почта
                                </p>
                                <p class="info">
                                    {{this.props.user.email}}
                                </p>
                            </div>
                            <div class="info-wrap">
                                <p class="info-label">
                                    Логин
                                </p>
                                <p class="info">
                                    test
                                </p>
                            </div>
                            <div class="info-wrap">
                                <p class="info-label">
                                    Имя
                                </p>
                                <p class="info">
                                    test
                                </p>
                            </div>
                            <div class="info-wrap">
                                <p class="info-label">
                                    Фамилия
                                </p>
                                <p class="info">
                                    test
                                </p>
                            </div>
                            <div class="info-wrap">
                                <p class="info-label">
                                    Имя в чате
                                </p>
                                <p class="info">
                                    test
                                </p>
                            </div>
                            <div class="info-wrap">
                                <p class="info-label">
                                    Телефон
                                </p>
                                <p class="info">
                                    test
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
                            <a href="/login" style="color: #FF0000;">Выйти</a>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}