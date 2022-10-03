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
            onSubmit: () => {
                const loginEl = this.element?.querySelector('input[name="login"]') as HTMLInputElement;
                const passwordEl = this.element?.querySelector('input[name="password"]') as HTMLInputElement;
                const nameEl = this.element?.querySelector('input[name="name"]') as HTMLInputElement;
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
                                value="${this.props.loginValue}"
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
                                value="${this.props.loginValue}"
                                label="Имя"
                        }}}
                        {{{ Input
                                type="text"
                                name="surname"
                                placeholder="Введите фамилию"
                                value="${this.props.loginValue}"
                                label="Фамилия"
                        }}}
                        {{{ Input
                                type="text"
                                name="phone"
                                placeholder="Введите телефон"
                                value="${this.props.loginValue}"
                                label="Телефон"
                        }}}
                        {{{ Input
                                type="password"
                                name="password"
                                placeholder="Введите пароль"
                                value="${this.props.loginValue}"
                                label="Пароль"
                        }}}
                        {{{ Input
                                type="password"
                                name="password"
                                placeholder="Введите пароль"
                                value="${this.props.loginValue}"
                                label="Пароль (ещё раз)"
                        }}}
                    </div>
                    <div class="buttons">
                        <button class="btn register-btn">
                            <a href="./index.hbs" style="color:#fff">
                                Зарегистрироваться
                            </a>
                        </button>
                        <br>
                        <button class="btn sign-in-btn">
                            <a href="./login.hbs" class="sign-in-link">
                                Войти
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        `
    }
}