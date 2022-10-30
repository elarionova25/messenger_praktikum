import Block from '../../core/Block';
import {validateForm} from "../../helpers/validateForm";
import './login.css';
import AuthController from '../../controllers/AuthController';
import {SignupData} from "../../api/AuthAPI";


// email:"test@btu.ru"
// first_name:"Екатерина"
// login:"elarionova25"
// password:"abcABC123$"
// phone:"+7 952 266-3200"
// second_name:"Екатерина"

export class LoginPage extends Block {
    constructor() {
        super();
        this.setProps({
            error: '',
            values: {
                login: '',
                password: '',
            },
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
                    login: loginEl.props.value,
                    password: passwordEl.props.value,
                });

                // if (!errorMessage) {
                    //const data = Object.fromEntries(values);
                    const data = this.props.values;
                    console.log('DATA', data)
                    AuthController.signin(data as SignupData);
                // }
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
              value="${this.props.values.login}"
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
