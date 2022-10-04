import {Block} from "../../core";
import "./data-edit.css"
import {validateForm, ValidateType} from "../../helpers/validateForm";


export class DataEditPage extends Block {
    constructor() {
        super();

        this.setProps({
            error: '',
            emailValue: '',
            nameValue: '',
            surnameValue: '',
            phoneValue: '',
            loginValue: '',
            passwordValue: '',
            onSubmit: () => {
                const loginEl = this.element?.querySelector('input[name="login"]') as HTMLInputElement;
                const passwordEl = this.element?.querySelector('input[name="password"]') as HTMLInputElement;
                const nameEl = this.element?.querySelector('input[name="name"]') as HTMLInputElement;
                const surnameEl = this.element?.querySelector('input[name="surname"]') as HTMLInputElement;
                const phoneEl = this.element?.querySelector('input[name="phone"]') as HTMLInputElement;
                const emailEl = this.element?.querySelector('input[name="email"]') as HTMLInputElement;


                const errorMessage = validateForm([
                    {type: ValidateType.Login, value: loginEl.value},
                    {type: ValidateType.Password, value: passwordEl.value},
                    {type: ValidateType.Name, value: nameEl.value},
                    {type: ValidateType.Surname, value: surnameEl.value},
                    {type: ValidateType.Phone, value: phoneEl.value},
                    {type: ValidateType.Email, value: emailEl.value},


                ]);

                if (errorMessage) {
                    this.setProps({
                        error: errorMessage,
                        loginValue: loginEl.value,
                        passwordValue: passwordEl.value,
                        emailValue: emailEl.value,
                        nameValue: nameEl.value,
                        surnameValue: surnameEl.value,
                        phoneValue: phoneEl.value,
                    });
                } else {
                    this.setProps({
                        error: '',
                        loginValue: loginEl.value,
                        passwordValue: passwordEl.value,
                        emailValue: emailEl.value,
                        nameValue: nameEl.value,
                        surnameValue: surnameEl.value,
                        phoneValue: phoneEl.value,
                    });
                }
                console.log(errorMessage);
            },
        })
    }

    render(){
        //language=hbs
        return `
        <div>
        <div class="back-button">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 19 19" fill="none" stroke="#999999"
        stroke-width="3" stroke-linecap="butt" stroke-linejoin="arcs">
        <path d="M15 18l-6-6 6-6" />
    </svg>
    <a href="./profile.hbs" class="back-btn" style="color: #999">
        Назад
    </a>
    </div>

    <div class="profile-container">
        <div class="profile">
            <div class="avatar-wrap">
                {{{ AvatarInput }}}
            </div>
            <div class="name-wrap">
                <p class="name">
                    <b>
                        Екатерина
                    </b>
                </p>
            </div>
            <div class="wrap">
                {{{ Input
                                type="text"
                                name="email"
                                placeholder="Введите email"
                                value="${this.props.loginValue}"
                                label="Email"
                        }}}
                        {{{ Input
                                type="text"
                                name="login"
                                placeholder="Введите логин"
                                value="${this.props.loginValue}"
                                label="Логин"
                        }}}
                        {{{ Input
                                type="text"
                                name="name"
                                placeholder="Введите имя"
                                value="${this.props.loginValue}"
                                label="Имя"
                        }}}
                        {{{ Input
                                type="text"
                                name="surname"
                                placeholder="Введите фамилию"
                                value="${this.props.loginValue}"
                                label="Фамилия"
                        }}}
                        {{{ Input
                                type="text"
                                name="phone"
                                placeholder="Введите телефон"
                                value="${this.props.loginValue}"
                                label="Телефон"
                        }}}
                        {{{ Input
                                type="password"
                                name="password"
                                placeholder="Введите пароль"
                                value="${this.props.loginValue}"
                                label="Пароль"
                        }}}
                        {{{ Input
                                type="password"
                                name="password"
                                placeholder="Введите пароль"
                                value="${this.props.loginValue}"
                                label="Пароль (ещё раз)"
                        }}}
            </div>
        </div>

        <div class="save-btn-wrap">
            <a href="/pages/profile" style="color:#fff" class="save-btn">
                Сохранить
            </a>
        </div>
    </div>        
</div>
        `
    }
}