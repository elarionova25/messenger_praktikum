import {Block} from "../../core";
import './register.css';
import {validateForm} from "../../helpers/validateForm";

export class RegisterPage extends Block {
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
            passwordRetryValue: '',
            onSubmit: () => {
                const emailEl = this.refs.emailControllerInputRef.props;
                const loginEl = this.refs.loginControllerInputRef.props;
                const nameEl = this.refs.nameControllerInputRef.props;
                const surnameEl = this.refs.surnameControllerInputRef.props;
                const phoneEl = this.refs.phoneControllerInputRef.props;
                const passwordEl = this.refs.passwordControllerInputRef.props;
                const passwordRetryEl = this.refs.passwordRetryControllerInputRef.props;

                const errorMessage = validateForm([
                    {type: 'login', value: loginEl.value},
                    {type: 'password', value: passwordEl.value},
                    {type: 'name', value: nameEl.value},
                    {type: 'surname', value: surnameEl.value},
                    {type: 'phone', value: phoneEl.value},
                    {type: 'email', value: emailEl.value},
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
                    if(passwordRetryEl.value === passwordEl.value)
                    this.setProps({
                        error: '',
                        loginValue: loginEl.value,
                        passwordValue: passwordEl.value,
                        emailValue: emailEl.value,
                        nameValue: nameEl.value,
                        surnameValue: surnameEl.value,
                        phoneValue: phoneEl.value,
                        passwordRetryValue: passwordRetryEl.value,
                    });
                    else {
                        this.setProps({
                            error: 'Пароли не совпадают',
                            loginValue: loginEl.value,
                            passwordValue: passwordEl.value,
                            emailValue: emailEl.value,
                            nameValue: nameEl.value,
                            surnameValue: surnameEl.value,
                            phoneValue: phoneEl.value,
                            passwordRetryValue: passwordRetryEl.value,
                        });
                    }
                }
            },
        })
    }

    render() {
        // language=hbs
        return `
            <div class="block">
                <div class="entry-form">
                    <div class="title">
                        <p class="title-text">Регистрация</p>
                    </div>
                    <div class="data">
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
                                name="name"
                                placeholder="Введите имя"
                                onInput=onInput
                                onFocus=onFocus
                                label="Имя"
                                value="${this.props.nameValue}"
                                ref="nameControllerInputRef"
                        }}}
                        {{{ControllerInput
                                type="text"
                                name="surname"
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
                    <div class="input-error">{{#if error}}{{error}}{{/if}}</div>
                    <div class="buttons">
                        {{{ Button text="Зарегистрироваться" onClick=onSubmit}}}
                        <button class="btn sign-in-btn">
                            <a href="/pages/login" class="sign-in-link">
                                Войти
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        `
    }
}