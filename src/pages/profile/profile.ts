import {Block} from "../../core";
import './profile.css';

export class ProfilePage extends Block {
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
                    {{{ ProfileData }}}
                    <div class="links-container">
                        <div class="settings-link">
                            <a href="/pages/data-edit">Изменить данные</a>
                        </div>
                        <div class="settings-link">
                            <a href="/pages/password-change">Изменить пароль</a>
                        </div>
                        <div class="settings-link">
                            <a href="/pages/login" style="color: #FF0000;">Выйти</a>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}