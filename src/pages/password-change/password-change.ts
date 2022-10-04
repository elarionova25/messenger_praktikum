import {Block} from "../../core";
import DefaultImage from "../../noimage.png";
import "./password-change.css";
import {validateForm, ValidateType} from "../../helpers/validateForm";


export class PasswordChangePage extends Block {
    constructor() {
        super();

        this.setProps({
            error: '',
            oldPasswordValue: '',
            newPasswordValue: '',
            onSubmit: () => {
                const loginEl = this.element?.querySelector('input[name="oldPassword"]') as HTMLInputElement;
                const passwordEl = this.element?.querySelector('input[name="newPassword"]') as HTMLInputElement;
                const nameEl = this.element?.querySelector('input[name="newPassword"]') as HTMLInputElement;
                const surnameEl = this.element?.querySelector('input[name="surname"]') as HTMLInputElement;
                const phoneEl = this.element?.querySelector('input[name="phone"]') as HTMLInputElement;
                const emailEl = this.element?.querySelector('input[name="email"]') as HTMLInputElement;


                const errorMessage = validateForm([
                    {type: ValidateType.Login, value: loginEl.value},
                    {type: ValidateType.Password, value: passwordEl.value},
                    {type: ValidateType.Name, value: nameEl.value},
                    {type: ValidateType.Surname, value: surnameEl.value},
                    {type: ValidateType.Phone, value: phoneEl.value},
                    {type: ValidateType.Email, value: emailEl.value},


                ]);

                if (errorMessage) {
                    this.setProps({
                        error: errorMessage,
                        loginValue: loginEl.value,
                        passwordValue: passwordEl.value,
                        emailValue: emailEl.value,
                        nameValue: nameEl.value,
                        surnameValue: surnameEl.value,
                        phoneValue: phoneEl.value,
                    });
                } else {
                    this.setProps({
                        error: '',
                        loginValue: loginEl.value,
                        passwordValue: passwordEl.value,
                        emailValue: emailEl.value,
                        nameValue: nameEl.value,
                        surnameValue: surnameEl.value,
                        phoneValue: phoneEl.value,
                    });
                }
                console.log(errorMessage);
            },
        })
    }

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
                                    name="oldPassword"
                                    placeholder="Введите пароль"
                                    value="${this.props.loginValue}"
                                    label="Старый пароль"
                            }}}
                            {{{ Input
                                    type="password"
                                    name="newPassword"
                                    placeholder="Введите пароль"
                                    value="${this.props.loginValue}"
                                    label="Новый пароль"
                            }}}
                            {{{ Input
                                    type="password"
                                    name="newPasswordRepeat"
                                    placeholder="Введите пароль"
                                    value="${this.props.loginValue}"
                                    label="Повторите новый пароль"
                            }}}
                        </div>
                    </div>

                    <div class="save-btn-wrap">
                        <button class="save-btn">
                            <a href="/pages/profile/" style="color:#fff">
                                Сохранить
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        `
    }
}