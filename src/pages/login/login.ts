import Block from '../../core/Block';
import {validateForm} from "../../helpers/validateForm";
import './login.css';

export class LoginPage extends Block {
    constructor() {
        super();
        this.setProps({
            error: '',
            loginValue: '',
            passwordValue: '',
            onInput: () => console.log('input'),
            onFocus: () => console.log('focus'),
            onSubmit: () => {
                const loginEl = this.refs.loginControllerInputRef;
                const passwordEl = this.refs.passwordControllerInputRef;

                const errorMessage = validateForm([
                    {type: loginEl.props.name, value: loginEl.props.value},
                    {type: passwordEl.props.name, value: passwordEl.props.value},
                ]);

                this.setProps({
                    error: errorMessage || "",
                    loginValue: loginEl.props.value,
                    passwordValue: passwordEl.props.value,
                });

                if (!errorMessage) {
                    console.log('form is ready to send');
                    console.log(this.props)
                }
            },
        })
    }


    render() {
        // language=hbs format=false
        return `
    <div class="block">
    <div class="entry-form">
        <div class="title">
            <p class="title-text">Вход</p>
        </div>
        <div class="data">
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
              type="password"
              name="password"
              placeholder="Введите пароль"
              onInput=onInput
              onFocus=onFocus
              label="Пароль"
              value="{{value}}"
              ref="passwordControllerInputRef"
        }}}
        </div>
        
        <div class="error-message">
         {{#if error}}
                {{error}}
            {{/if}}
        </div>
        
        <div class="buttons">
            {{{ Button text="Войти" onClick=onSubmit}}}
            <button class="btn sign-in-btn">
                <a href="/register" class="sign-in-link">
                    Нет аккаунта?
                </a>
            </button>
        </div>
    </div>
    </div>
    `;
    }
}
