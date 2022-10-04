import Block from '../../core/Block';
import {validateForm, ValidateType} from "../../helpers/validateForm";
import './login.css';

export class LoginPage extends Block {
    constructor() {
        super();

        this.setProps({
            error: '',
            loginValue: '',
            passwordValue: '',
            onSubmit: () => {
                const loginEl = this.element?.querySelector('input[name="login"]') as HTMLInputElement;
                const passwordEl = this.element?.querySelector('input[name="password"]') as HTMLInputElement;

                const errorMessage = validateForm([
                    {type: ValidateType.Login, value: loginEl.value},
                    {type: ValidateType.Password, value: passwordEl.value},
                ]);

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
                }
                console.log(errorMessage);
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
        {{{ Input
              type="text"
              name="login"
              placeholder="Введите логин"
              value="${this.props.loginValue}"
              label="Логин"
        }}}
        <br>
        {{{ Input
              type="password"
              name="password"
              placeholder="Введите пароль"
              value="${this.props.passwordValue}"
              label="Пароль"
        }}}
        </div>
        <div class="buttons">
            <button class="btn sign-in-btn">
                <a href="/" style="color:#fff">
                    Войти
                </a>
            </button>
            <br>
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
