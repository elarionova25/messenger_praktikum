import {Block} from "../../core";
import './register.css';
import {validateForm, ValidateType} from "../../helpers/validateForm";

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
                const loginEl = this.element?.querySelector('input[name="login"]') as HTMLInputElement;
                const passwordEl = this.element?.querySelector('input[name="password"]') as HTMLInputElement;
                const nameEl = this.element?.querySelector('input[name="name"]') as HTMLInputElement;
                const surnameEl = this.element?.querySelector('input[name="surname"]') as HTMLInputElement;
                const phoneEl = this.element?.querySelector('input[name="phone"]') as HTMLInputElement;
                const emailEl = this.element?.querySelector('input[name="email"]') as HTMLInputElement;
                const passwordRetryEl = this.element?.querySelector('input[name="passwordRetry"]') as HTMLInputElement;

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
                        {{{ Input
                                type="text"
                                name="email"
                                placeholder="Введите email"
                                value="${this.props.emailValue}"
                                label="Email"
                        }}}
                        {{{ Input
                                type="text"
                                name="login"
                                placeholder="Введите логин"
                                value="${this.props.loginValue}"
                                label="Логин"
                        }}}
                        {{{ Input
                                type="text"
                                name="name"
                                placeholder="Введите имя"
                                value="${this.props.nameValue}"
                                label="Имя"
                        }}}
                        {{{ Input
                                type="text"
                                name="surname"
                                placeholder="Введите фамилию"
                                value="${this.props.surnameValue}"
                                label="Фамилия"
                        }}}
                        {{{ Input
                                type="text"
                                name="phone"
                                placeholder="Введите телефон"
                                value="${this.props.phoneValue}"
                                label="Телефон"
                        }}}
                        {{{ Input
                                type="password"
                                name="password"
                                placeholder="Введите пароль"
                                value="${this.props.passwordValue}"
                                label="Пароль"
                        }}}
                        {{{ Input
                                type="password"
                                name="passwordRetry"
                                placeholder="Введите пароль"
                                value="${this.props.passwordRetryValue}"
                                label="Пароль (ещё раз)"
                        }}}
                    </div>
                    <div class="input-error">{{#if error}}{{error}}{{/if}}</div>
                    <div class="buttons">
<!--                        <button class="btn register-btn">-->
<!--                            <a href="/" style="color:#fff">-->
<!--                                Зарегистрироваться-->
<!--                            </a>-->
<!--                        </button>-->
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