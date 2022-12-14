import {Block} from "../../core";
import './chat.css'
import {validateForm} from "../../helpers/validateForm";
import ChatsController from "../../controllers/ChatsController";
import store from "../../core/Store";
import {host} from "../../api/host";
import e from "express";

type ChatProps = {
    chat: any;
    chatUsers: [];
    chatOldMessages: any;
}

export class Chat extends Block {
    static componentName = 'Chat';

    constructor({chat, chatUsers, chatOldMessages}: ChatProps) {
        super({chat, chatUsers, chatOldMessages});
        this.setProps({
            message: '',
            onSubmit: (event: SubmitEvent) => {
                event.preventDefault();
                if(this.refs.sendButtonRef.firstElementChild.className==="disabled") {
                    this.setProps({
                        error: 'Сообщение пустое',
                    })
                    console.log(this.props.error)
                }
                else {
                    const sendMessageEl = this.element?.querySelector('input[name="message"]') as HTMLInputElement;
                    store.getState().currentSocket.send(JSON.stringify({
                        content: sendMessageEl.value,
                        type: 'message',
                    }));
                    store.getState().currentSocket.send(JSON.stringify({
                        content: '0',
                        type: 'get old',
                    }));
                }
            },
            onInput: () => {
                const messageEl = this.element?.querySelector('input[name="message"]') as HTMLInputElement;
                const errorMessage = validateForm( [{type: 'message', value: messageEl.value}])
                const btnEl = this.element?.querySelector('button[name="sendBtn"]') as HTMLInputElement;
                if(errorMessage){
                    this.setProps({
                        error: errorMessage,
                    })
                    this.refs.sendButtonRef.firstElementChild.className="disabled";
                } else {
                    this.refs.sendButtonRef.firstElementChild.className="circle";
                }
            },
            onUserAdd: () => {
                const loginEl = this.element?.querySelector('input[name="addUserlogin"]') as HTMLInputElement;
                this.setProps({
                    values: {
                        users: [
                            Number(loginEl.value)
                        ],
                        chatId: chat.id
                    }
                })
                const data = this.props.values;
                ChatsController.addusertochat(data);
            },
            onChatDelete: () => {
                let data = {
                    chatId: chat.id,
                }
                ChatsController.deletechat(data);
            },
            onAvatarAdd: () => {
                const myUserForm = document.getElementById('myUserForm');
                const form = new FormData(myUserForm);
                form.append('chatId', chat.id);
                ChatsController.changechatavatar(form);
            }
        })
    }

    render() {
        // language=hbs
        return `
 <div class="chat">
    <div class="header-chat">
        <div class="wrapper avatar">
            {{#if chat.avatar}}
                    <img src="${host}/api/v2/resources/{{chat.avatar}}" alt="avatar">
            {{else}}
                    <img src="https://archive.org/download/no-photo-available/no-photo-available.png" alt="avatar">
            {{/if}}
        </div>
        <div class="name">
            <p class="name main-name">{{chat.title}}</p>
            <br>
            Участники:
            {{#each chatUsers}}
                {{this.login}}
            {{/each}}
        </div>
        <div class="settings dropdown">
            <div class="dropbtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="100%" viewBox="0 0 24 24" fill="none"
                    stroke="#999999" stroke-width="3" stroke-linecap="butt" stroke-linejoin="bevel">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                </svg>
            </div>
            <div class="dropdown-content">
                <a href="#openAddPersonModal">Добавить пользователя</a>
                <a href="#openDeletePersonModal">Удалить пользователя</a>
                <a href="#openDeleteModal">Удалить диалог</a>
                <a href="#openAddChatAvatarModal">Добавить аватар чата</a>
                </ul>
            </div>
        </div>
    </div>
    <div id="messages-container" class="msger-chat">
        {{#if chatOldMessages}}
<!--            <div class="messages-date">12 января</div>-->
            {{#each chatOldMessages}}
                {{{ MessageElement message=this}}}
            {{/each}}
            {{else}}
            <div class="messages-date">Сообщений нет</div>
        {{/if}}
    </div>
    <div class="text-bar">
        <div class="icon-wrap">
            <label for="custom-file-upload">
                <input class="input-chat-file" type="file">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="42" viewBox="0 0 24 24" fill="none"
                    stroke="#999999" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="arcs">
                    <path
                        d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48">
                    </path>
                </svg>
            </label>
        </div>
        <form id="send-form" class="text-bar-field">
        {{{ Input 
            type=text
            placeholder="Введите сообщение"
            onInput=onInput
            name="message"
        }}}
        </form>
        {{{ SendButton
                type="submit"
                name="sendBtn"
                onClick=onSubmit
                className="disabled"
                ref="sendButtonRef"
        }}}
    </div>
            
    {{#Modal
            id='openAddPersonModal'
            title='Добавить пользователя'}}
        {{{ Input
                type="login"
                name="addUserlogin"
                placeholder="Введите id пользователя"
        }}}
        <div class="buttons">
            <button class="modal-btn">
                {{{Button text="Добавить пользователя"
                          onClick=onUserAdd
                          style="button__button"
                }}}
            </button>
        </div>
    {{/Modal}}
    
    {{#Modal 
        id='openDeletePersonModal'
        title='Удалить пользователя'}}
        {{{ Input 
                type="login"
                name="login"
                placeholder="Введите id пользователя"
        }}}
         <div class="buttons">
                <button class="modal-btn">
                    <a href="#close" style="color:#fff">
                        Удалить
                    </a>
                </button>
         </div>
    {{/Modal}}
    
    {{#Modal id='openDeleteModal'}}
         <p>Вы действительно хотите удалить диалог?</p>
         <br>
            <div class="yes-no-buttons">
                {{{Button text="ДА!"
                          onClick=onChatDelete
                          style="button__button"
                }}}
                <button class="no-btn">
                    <a href="#close" class="no-btn">
                        Нет
                    </a>
                </button>
            </div>
    {{/Modal}}

    {{#Modal id='openAddChatAvatarModal'}}
        <p>Добавить аватар чата</p>
        <br>
        <div class="avatar-wrap">
            <form id="myUserForm">
                <input id="avatar" type="file" name="avatar" accept="image/*">
                <a href="#close">
                    {{{Button text="загрузить аватар"
                              onClick=onAvatarAdd
                              style="button__button"
                    }}}
                </a>
            </form>
            <span>Если был загружен аватар, необходимо перезагрузить страницу</span>
        </div>
    {{/Modal}}
</div>
        `
    }
}