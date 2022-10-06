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

                console.log(loginEl);
                const errorMessage = validateForm([
                    {type: loginEl.props.name, value: loginEl.props.value},
                    {type: passwordEl.props.name, value: passwordEl.props.value},
                ]);

                console.log(this.refs.loginControllerInputRef.refs.InputRef)

                if (errorMessage) {
                    this.setProps({
                        error: errorMessage,
                        loginValue: loginEl.props.value,
                        passwordValue: passwordEl.props.value,
                    });
                } else {
                    this.setProps({
                        error: '',
                        loginValue: loginEl.props.value,
                        passwordValue: passwordEl.props.value,
                    });
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
              type="text"
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
        {{{ Button text='Войти' onClick=onSubmit}}}
            <button class="btn sign-up-btn">
                <a href="/pages/register" class="sign-up-link">
                    Нет аккаунта?
                </a>
            </button>
        </div>
    </div>
    </div>
    `;
    }
}

// console.log(123)
// const loginEl = this.element?.querySelector('input[name="login"]') as HTMLInputElement;
// const passwordEl = this.element?.querySelector('input[name="password"]') as HTMLInputElement;
//
// const errorMessage = validateForm([
//     {type: loginEl.name, value: loginEl.value},
//     {type: passwordEl.name, value: passwordEl.value},
// ]);
// console.log(errorMessage)
//
// if (errorMessage) {
//     this.setProps({
//         error: errorMessage,
//         loginValue: loginEl.value,
//         passwordValue: passwordEl.value,
//     });
// } else {
//     this.setProps({
//         error: '',
//         loginValue: loginEl.value,
//         passwordValue: passwordEl.value,
//     });
//     console.log('form is ready to send');
//     console.log(this.props)
// }
