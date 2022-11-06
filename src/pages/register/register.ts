import {Block} from "../../core";
import './register.css';
import {validateForm} from "../../helpers/validateForm";
import {SignupData} from "../../api/AuthAPI";
import AuthController from '../../controllers/AuthController';

export class RegisterPage extends Block {
    constructor() {
        super();
        this.setProps({
            error: '',
            values: {
                email: '',
                first_name: '',
                login: '',
                password: '',
                phone: '',
                second_name: '',
            },
            onSubmit: () => {
                const loginEl = this.element?.querySelector('input[name="login"]') as HTMLInputElement;
                const emailEl = this.element?.querySelector('input[name="email"]') as HTMLInputElement;
                const nameEl = this.element?.querySelector('input[name="name"]') as HTMLInputElement;
                const surnameEl = this.element?.querySelector('input[name="surname"]') as HTMLInputElement;
                const phoneEl = this.element?.querySelector('input[name="phone"]') as HTMLInputElement;
                const passwordEl = this.element?.querySelector('input[name="password"]') as HTMLInputElement;

                const errorMessage = validateForm([
                    {type: 'login', value: loginEl.value},
                    {type: 'password', value: passwordEl.value},
                    {type: 'name', value: nameEl.value},
                    {type: 'surname', value: surnameEl.value},
                    {type: 'phone', value: phoneEl.value},
                    {type: 'email', value: emailEl.value},
                ]);
                this.setProps({
                    error: errorMessage || "",
                    values: {
                        email: emailEl.value,
                        first_name: nameEl.value,
                        login: loginEl.value,
                        password: passwordEl.value,
                        second_name: surnameEl.value,
                        phone: phoneEl.value
                    }
                });

                //if(!errorMessage){
                    const data = this.props.values
                    AuthController.signup(data as SignupData);
               // }
            }
        })
    }

    render() {
        // language=hbs
        return `
            <div class="block">
                <div class="register-entry-form">
                    <div class="title">
                        <p class="title-text">Регистрация</p>
                    </div>
                    <div class="data">
                        {{{ControllerInput
                                type="text"
                                name="login"
                                placeholder="Введите логин"
                                onInput=onInput
                                onFocus=onFocus
                                label="Логин"
                                value="${this.props.login}"
                                ref="loginControllerInputRef"
                        }}}
                        {{{ControllerInput
                                type="text"
                                name="email"
                                placeholder="Введите email"
                                onInput=onInput
                                onFocus=onFocus
                                label="Email"
                                value="${this.props.email}"
                                ref="emailControllerInputRef"
                        }}}
                        
                        {{{ControllerInput
                                type="text"
                                name="name"
                                placeholder="Введите имя"
                                onInput=onInput
                                onFocus=onFocus
                                label="Имя"
                                value="${this.props.first_name}"
                                ref="nameControllerInputRef"
                        }}}
                        {{{ControllerInput
                                type="text"
                                name="surname"
                                placeholder="Введите фамилию"
                                onInput=onInput
                                onFocus=onFocus
                                label="Фамилия"
                                value="${this.props.second_name}"
                                ref="surnameControllerInputRef"
                        }}}
                        {{{ControllerInput
                                type="text"
                                name="phone"
                                placeholder="Введите телефон"
                                onInput=onInput
                                onFocus=onFocus
                                label="Телефон"
                                value="${this.props.phone}"
                                ref="phoneControllerInputRef"
                        }}}
                        {{{ControllerInput
                                type="password"
                                name="password"
                                placeholder="Введите пароль"
                                onInput=onInput
                                onFocus=onFocus
                                label="Пароль"
                                value="${this.props.password}"
                                ref="passwordControllerInputRef"
                        }}}
                    </div>
                    <div class="input-error">{{#if error}}{{error}}{{/if}}</div>
                    <div class="buttons">
                        {{{ Button text="Зарегистрироваться" 
                                   onClick=onSubmit
                                   style="button__button"
                        }}}
                        <button class="btn sign-in-btn">
                            <a href="/login" class="sign-in-link">
                                Войти
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        `
    }
}