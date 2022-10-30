import {Block} from "../../core";
import "./data-edit.css"
import {validateForm} from "../../helpers/validateForm";


export class DataEditPage extends Block {
    constructor() {
        super();
        this.setProps({
            error: '',
            emailValue: '',
            nameValue: '',
            surnameValue: '',
            phoneValue: '',
            loginValue: '',
            passwordValue: '',
            onSubmit: () => {
                const loginEl = this.element?.querySelector('input[name="login"]') as HTMLInputElement;
                const passwordEl = this.element?.querySelector('input[name="password"]') as HTMLInputElement;
                const nameEl = this.element?.querySelector('input[name="first_name"]') as HTMLInputElement;
                const surnameEl = this.element?.querySelector('input[name="second_name"]') as HTMLInputElement;
                const phoneEl = this.element?.querySelector('input[name="phone"]') as HTMLInputElement;
                const emailEl = this.element?.querySelector('input[name="email"]') as HTMLInputElement;

                const errorMessage = validateForm([
                    {type: 'login', value: loginEl.value},
                    {type: 'password', value: passwordEl.value},
                    {type: 'first_name', value: nameEl.value},
                    {type: 'second_name', value: surnameEl.value},
                    {type: 'phone', value: phoneEl.value},
                    {type: 'email', value: emailEl.value},
                ]);
                this.setProps({
                    error: errorMessage || "",
                    loginValue: loginEl.value,
                    passwordValue: passwordEl.value,
                    emailValue: emailEl.value,
                    nameValue: nameEl.value,
                    surnameValue: surnameEl.value,
                    phoneValue: phoneEl.value,
                });
            }
        })
    }

    render(){
        //language=hbs
        return `
        <div>
        <div class="back-button">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 19 19" fill="none" stroke="#999999"
        stroke-width="3" stroke-linecap="butt" stroke-linejoin="arcs">
        <path d="M15 18l-6-6 6-6" />
    </svg>
    <a href="/profile" class="back-btn" style="color: #999">
        Назад
    </a>
    </div>

    <div class="profile-container">
        <div class="profile">
            <div class="avatar-wrap">
                {{{ AvatarInput }}}
            </div>
            <div class="name-wrap">
                <p class="name">
                    <b>
                        Екатерина
                    </b>
                </p>
            </div>
            <div class="wrap">
                {{{ControllerInput
                        type="text"
                        name="email"
                        placeholder="Введите email"
                        onInput=onInput
                        onFocus=onFocus
                        label="Email"
                        value="${this.props.emailValue}"
                        ref="emailControllerInputRef"
                }}}
                {{{ControllerInput
                        type="text"
                        name="login"
                        placeholder="Введите логин"
                        onInput=onInput
                        onFocus=onFocus
                        label="Логин"
                        value="${this.props.loginValue}"
                        ref="loginControllerInputRef"
                }}}
                {{{ControllerInput
                        type="text"
                        name="first_name"
                        placeholder="Введите имя"
                        onInput=onInput
                        onFocus=onFocus
                        label="Имя"
                        value="${this.props.nameValue}"
                        ref="nameControllerInputRef"
                }}}
                {{{ControllerInput
                        type="text"
                        name="second_name"
                        placeholder="Введите фамилию"
                        onInput=onInput
                        onFocus=onFocus
                        label="Фамилия"
                        value="${this.props.surnameValue}"
                        ref="surnameControllerInputRef"
                }}}
                {{{ControllerInput
                        type="text"
                        name="phone"
                        placeholder="Введите телефон"
                        onInput=onInput
                        onFocus=onFocus
                        label="Телефон"
                        value="${this.props.phoneValue}"
                        ref="phoneControllerInputRef"
                }}}
                {{{ControllerInput
                        type="password"
                        name="password"
                        placeholder="Введите пароль"
                        onInput=onInput
                        onFocus=onFocus
                        label="Пароль"
                        value="${this.props.passwordValue}"
                        ref="passwordControllerInputRef"
                }}}
                {{{ControllerInput
                        type="password"
                        name="passwordRetry"
                        placeholder="Введите пароль"
                        onInput=onInput
                        onFocus=onFocus
                        label="Пароль (ещё раз)"
                        value="${this.props.passwordRetryValue}"
                        ref="passwordRetryControllerInputRef"
                }}}
            </div>
        </div>

        <div class="save-btn-wrap">
            <a href="/profile" style="color:#fff" class="save-btn">
                Сохранить
            </a>
        </div>
    </div>        
</div>
        `
    }
}