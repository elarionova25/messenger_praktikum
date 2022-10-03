import {Block} from "../../core";
import DefaultImage from "../../noimage.png";
import "./password-change.css";


export class PasswordChangePage extends Block {
    render() {
        //language=hbs
        return `
            <div>
                <div class="back-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 19 19" fill="none" stroke="#999999"
                         stroke-width="3" stroke-linecap="butt" stroke-linejoin="arcs">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                    <a href="./" class="back-btn">
                        Назад
                    </a>
                </div>

                <div class="profile-container">
                    <div class="profile">
                        <div class="avatar-wrap">
                            <img src="${DefaultImage}" alt="Аватар" class="profile-img">
                        </div>
                        <div class="name-wrap">
                            <p class="name">
                                <b>
                                    Екатерина
                                </b>
                            </p>
                        </div>
                        <div class="wrap">
                            {{{ Input
                                    type="password"
                                    name="password"
                                    placeholder="Введите пароль"
                                    value="${this.props.loginValue}"
                                    label="Старый пароль"
                            }}}
                            {{{ Input
                                    type="password"
                                    name="password"
                                    placeholder="Введите пароль"
                                    value="${this.props.loginValue}"
                                    label="Новый пароль"
                            }}}
                            {{{ Input
                                    type="password"
                                    name="password"
                                    placeholder="Введите пароль"
                                    value="${this.props.loginValue}"
                                    label="Повторите новый пароль"
                            }}}
                        </div>
                    </div>

                    <div class="save-btn-wrap">
                        <button class="save-btn">
                            <a href="./" style="color:#fff">
                                Сохранить
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        `
    }
}