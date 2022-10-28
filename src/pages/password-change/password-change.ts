import {Block} from "../../core";
import "./password-change.css";
import {validateForm} from "../../helpers/validateForm";


export class PasswordChangePage extends Block {
    constructor() {
        super();

        this.setProps({
            error: '',
            oldPasswordValue: '',
            newPasswordValue: '',
            newPasswordRepeatValue: '',
            onSubmit: () => {
                const oldPasswordEl = this.refs.oldPasswordRef.props;
                const newPasswordEl = this.refs.newPasswordRef.props;
                const newRepeatPasswordEl = this.refs.newRepeatPasswordRef.props;

                const errorMessage = validateForm([
                    {type: 'password', value: oldPasswordEl.value},
                    {type: 'newPassword', value: newPasswordEl.value},
                    {type: 'newPasswordRepeat', value: newRepeatPasswordEl.value},
                ]);

                this.setProps({
                    error: errorMessage || "",
                    oldPasswordValue: oldPasswordEl.value,
                    newPasswordValue: newPasswordEl.value,
                    newPasswordRepeatValue: newRepeatPasswordEl.value,
                });
                }
        })
    }

    render() {
        //language=hbs
        return `
            <div>
                <div class="back-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 19 19" fill="none" stroke="#999999"
                         stroke-width="3" stroke-linecap="butt" stroke-linejoin="arcs">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                    <a href="./" class="back-btn">
                        Назад
                    </a>
                </div>

                <div class="profile-container">
                    <div class="profile">
                        <div class="avatar-wrap">
                            <img src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png" alt="Аватар" class="profile-img">
                        </div>
                        <div class="name-wrap">
                            <p class="name">
                                <b>
                                    Екатерина
                                </b>
                            </p>
                        </div>
                        <div class="wrap">
                            {{{ControllerInput
                                    type="password"
                                    name="password"
                                    onInput=onInput
                                    onFocus=onFocus
                                    placeholder="Введите пароль"
                                    value="${this.props.loginValue}"
                                    label="Старый пароль"
                                    ref="oldPasswordRef"
                            }}}
                            {{{ControllerInput
                                    type="password"
                                    name="newPassword"
                                    onInput=onInput
                                    onFocus=onFocus
                                    placeholder="Введите пароль"
                                    value="${this.props.loginValue}"
                                    label="Новый пароль"
                                    ref="newPasswordRef"
                            }}}
                            {{{ControllerInput
                                    type="password"
                                    name="newPasswordRepeat"
                                    onInput=onInput
                                    onFocus=onFocus
                                    placeholder="Введите пароль"
                                    value="${this.props.loginValue}"
                                    label="Повторите новый пароль"
                                    ref="newRepeatPasswordRef"
                            }}}
                        </div>
                    </div>
                    <div class="input-error">{{#if error}}{{error}}{{/if}}</div>
                    <div class="save-btn-wrap">
                        {{{ Button text="Cохранить" onClick=onSubmit}}}
                    </div>
                </div>
            </div>
        `
    }
}