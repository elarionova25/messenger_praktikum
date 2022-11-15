import Block from '../../core/Block';
import {validateForm} from "../../helpers/validateForm";
import './login.css';
import AuthController from '../../controllers/AuthController';
import {SignupData} from "../../api/AuthAPI";

// email:"test@btu.ru"
// first_name:"Екатерина"
// login:"elarionova25"
// password:"abcABC123$"
// newPassword: "ABCabc123&"
// phone:"+7 952 266-3200"
//"id": 64426,
// second_name:"Екатерина"

// email:"blabla12@mail.ru"
// first_name:"Ekaterina"
// login:"blabla12"
//ID: 84699
// password:"ABCabc123&"
// phone:"+7 952 266-3200"
// second_name:"blabla12"

export class LoginPage extends Block {
    static componentName = 'LoginPage';
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
                const loginEl = this.element?.querySelector('input[name="login"]') as HTMLInputElement;
                const passwordEl = this.element?.querySelector('input[name="password"]') as HTMLInputElement;

                const errorMessage = validateForm([
                    {type: loginEl.name, value: loginEl.value},
                    {type: passwordEl.name, value: passwordEl.value},
                ]);

                console.log(loginEl)
                this.setProps({
                    error: errorMessage || "",
                    values: {
                        login: loginEl.value,
                        password: passwordEl.value,
                    }
                });

                if (!errorMessage) {
                const data = this.props.values;
                console.log('DATA', data)
                AuthController.signin(data as SignupData);
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
        <br>
        <span style="color: #999999">First account: elarionova25/ABCabc123&</span>
        <br>
        <span style="color: #999999">Second account: blabla12/ABCabc123&</span>

        <div class="data">
        {{{ControllerInput
              type="text"
              name="login"
              placeholder="Введите логин пользователя"
              onInput=onInput
              onFocus=onFocus
              label="Логин"
              value="${this.props.login}"
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
            {{{ Button text="Войти" 
                       onClick=onSubmit
                       style="button__button"
            }}}
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
