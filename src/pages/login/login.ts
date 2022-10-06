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
                console.log(123)
                const loginEl = this.element?.querySelector('input[name="login"]') as HTMLInputElement;
                const passwordEl = this.element?.querySelector('input[name="password"]') as HTMLInputElement;

                const errorMessage = validateForm([
                    {type: loginEl.name, value: loginEl.value},
                    {type: passwordEl.name, value: passwordEl.value},
                ]);
                console.log(errorMessage)

                if (errorMessage) {
                    this.setProps({
                        error: errorMessage,
                        loginValue: loginEl.value,
                        passwordValue: passwordEl.value,
                    });
                } else {
                    this.setProps({
                        error: '',
                        loginValue: loginEl.value,
                        passwordValue: passwordEl.value,
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
              value=""
              ref="loginControllerInputRef"
        }}}
            {{{ControllerInput
              type="text"
              name="password"
              placeholder="Введите пароль"
              onInput=onInput
              onFocus=onFocus
              label="Пароль"
              value=""
              ref="passwordInputRef"

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

// <div class="screen screen_theme_full">
//   <div class="screen__content">
//       {{{ AvatarInput }}}
//       {{{ Input
//         type="text"
//         name="login"
//         placeholder="Login"
//         value="${this.props.loginValue}"
//         label="Login"
//       }}}
//       {{{ Input
//               type="password"
//               name="password"
//               placeholder="password"
//               value="${this.props.passwordValue}"
//               label="Password"
//       }}}
//       {{#if error}}{{error}}{{/if}}
//       {{{ Button text="login" onClick=onSubmit}}}
//
//   </div>
// </div>

// <br>
//     {{{ Input
//     type="password"
//     name="password"
//     placeholder="Введите пароль"
//     value="${this.props.passwordValue}"
//     label="Пароль"
//     ref="passwordInput"
// }}}
