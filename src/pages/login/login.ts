import Block from '../../core/Block';
import {validateForm, ValidateType} from "../../helpers/validateForm";

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
    <div class="screen screen_theme_full">
      <div class="screen__content">
          {{{ AvatarInput }}}
          {{{ Input 
            type="text"
            name="login"
            placeholder="Login"
            value="${this.props.loginValue}"
            label="Login"
          }}}
          {{{ Input
                  type="password"
                  name="password"
                  placeholder="password"
                  value="${this.props.passwordValue}"
                  label="Password"
          }}}
          {{#if error}}{{error}}{{/if}}
          {{{ Button text="login" onClick=onSubmit}}}
          
      </div>
    </div>
    `;
    }
}
