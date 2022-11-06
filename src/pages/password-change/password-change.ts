import {Block} from "../../core";
import "./password-change.css";
import {validateForm} from "../../helpers/validateForm";
import AuthController from "../../controllers/AuthController";
import {ChangePassword, UsersAPI} from "../../api/UsersAPI";
import UsersController from "../../controllers/UsersController";
import {withStore} from "../../core/Store";

export class PasswordEditPageBase extends Block {
    constructor() {
        super();
        AuthController.fetchUser();
        this.setProps({
            error: '',
            values:{
                oldPassword: '',
                newPassword: '',
            },
            newPasswordRepeat: '',
            onSave: () => {
                console.log(this.refs.oldPasswordRef.props)

                const oldPasswordEl = this.element?.querySelector('input[name="password"]') as HTMLInputElement;
                const newPasswordEl = this.element?.querySelector('input[name="newPassword"]') as HTMLInputElement;
                const newRepeatPasswordEl = this.element?.querySelector('input[name="newPasswordRepeat"]') as HTMLInputElement;

                const errorMessage = validateForm([
                    {type: 'password', value: oldPasswordEl.value},
                    {type: 'newPassword', value: newPasswordEl.value},
                    {type: 'newPasswordRepeat', value: newRepeatPasswordEl.value},
                ]);

                this.setProps({
                    error: errorMessage || "",
                    values: {
                        oldPassword: oldPasswordEl.value,
                        newPassword: newPasswordEl.value,
                    },
                    newPasswordRepeat: newRepeatPasswordEl.value,
                });

                //console.log(this.props.values.oldPassword)

                const data = this.props.values;
                console.log('VALUES', this.props.values);
                UsersController.changepassword(data as ChangePassword)
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
                    <a href="/profile" class="back-btn">
                        Назад
                    </a>
                </div>

                <div class="password-change-container">
                    <div class="profile">
                        <div class="wrap">
                            {{{ControllerInput
                                    type="text"
                                    name="password"
                                    onInput=onInput
                                    onFocus=onFocus
                                    placeholder="Введите пароль"
                                    value="${this.props.oldPassword}"
                                    label="Старый пароль"
                                    ref="oldPasswordRef"
                            }}}
                            {{{ControllerInput
                                    type="text"
                                    name="newPassword"
                                    onInput=onInput
                                    onFocus=onFocus
                                    placeholder="Введите пароль"
                                    value="${this.props.newPassword}"
                                    label="Новый пароль"
                                    ref="newPasswordRef"
                            }}}
                            {{{ControllerInput
                                    type="text"
                                    name="newPasswordRepeat"
                                    onInput=onInput
                                    onFocus=onFocus
                                    placeholder="Введите пароль"
                                    value=""
                                    label="Повторите новый пароль"
                                    ref="newRepeatPasswordRef"
                            }}}
                        </div>
                    </div>
                    <div class="input-error">{{#if error}}{{error}}{{/if}}</div>
                    <div class="save-btn-wrap">
                        {{{ Button text="Cохранить" 
                                   onClick=onSave
                                   style="button__button"
                        }}}
                    </div>
                </div>
            </div>
        `
    }
}

const withUser = withStore((state) => ({ ...state.user }));
export const PasswordChangePage = withUser(PasswordEditPageBase);