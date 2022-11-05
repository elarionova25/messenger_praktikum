import {Block} from "../../core";
import './chat.css'
import {validateForm} from "../../helpers/validateForm";
import ChatsController from "../../controllers/ChatsController";
import store from "../../core/Store";

type ChatProps = {
    chat: any;
    chatUsers: [];
    chatOldMessages: any;
}

export class Chat extends Block {
    constructor({chat, chatUsers, chatOldMessages}: ChatProps) {
        super({chat, chatUsers, chatOldMessages});
        const token = store.getState().token;
        const currentUser = store.getState().user
        const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${currentUser.id}/${chat.id}/${token}`);
        console.log(store)
        socket.addEventListener('open', () => {
            console.log('Соединение установлено');
            socket.send(JSON.stringify({
                content: '0',
                type: 'get old',
            }));
        });

        socket.addEventListener('close', event => {
            if (event.wasClean) {
                console.log('Соединение закрыто чисто');
            } else {
                console.log('Обрыв соединения');
            }

            console.log(`Код: ${event.code} | Причина: ${event.reason}`);
        });

        socket.addEventListener('message', event => {
            console.log('Получены данные', event.data);
            chatOldMessages = event.data;
        });

        socket.addEventListener('error', event => {
            console.log('Ошибка', event.message);
        });

        this.setProps({
            message: '',
            onClick: () => {
                if(this.refs.sendButtonRef.props.className==="disabled") {
                    this.setProps({
                        error: 'Сообщение пустое',
                    })
                }
                const sendMessageEl = this.element?.querySelector('input[name="message"]') as HTMLInputElement;
                socket.send(JSON.stringify({
                    content: sendMessageEl.value,
                    type: 'message',
                }));
            },
            onBlur: () => {
                const messageEl = this.element?.querySelector('input[name="message"]') as HTMLInputElement;
                const errorMessage = validateForm( [{type: 'message', value: messageEl.value}])
                if(errorMessage){
                    this.setProps({
                        error: errorMessage,
                    })
                    this.refs.sendButtonRef.props.className="disabled";
                } else {
                    this.refs.sendButtonRef.props.className="circle";
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
            }
        })
    }


    render() {
        // language=hbs
        return `
        <div class="chat">
    <div class="header-chat">
        <div class="wrapper avatar">
            <img src="https://randomuser.me/api/portraits/men/32.jpg">
        </div>
        <div class="name">
            <p class="name main-name">{{chat.title}}</p>
            <br>
            Участники:
            {{#each chatUsers}}
                {{this.login}}
                <br>
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
                </ul>
            </div>
        </div>
    </div>
    <div class="messages-pool">
        <div class="messages-date">12 января</div>
        <div class="message-container message-container-outgoing">
            <div class="message message-outgoing">
                <div class="message-text">Привет!
                </div>
                <span class="message-time">13:00</span>
                <br>
                <span class="message-status">
                    Прочитано
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 20 20" fill="none"
                        stroke="#999999" stroke-width="1" stroke-linecap="butt" stroke-linejoin="arcs">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </span>
            </div>
        </div>
        <div class="message-container">
            <div class="message">
                <div class="message-text">HELOOOO234</div>
                <span class="message-time">13:30</span>
                <br>
                <span class="message-status">
                    Прочитано
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 20 20" fill="none"
                        stroke="#999999" stroke-width="1" stroke-linecap="butt" stroke-linejoin="arcs">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </span>
            </div>
        </div>
    </div>
    <div class="text-bar">
        <div class="icon-wrap">
            <label for="custom-file-upload">
                <input type="file">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="42" viewBox="0 0 24 24" fill="none"
                    stroke="#999999" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="arcs">
                    <path
                        d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48">
                    </path>
                </svg>
            </label>
        </div>
        <form class="text-bar-field">
<!--            <input type="text" placeholder="Введите сообщение" name="message">-->
        {{{ Input 
            type=text
            placeholder="Введите сообщение"
            onBlur=onBlur
            name="message"
        }}}
        </form>
        {{{ SendButton
                className="disabled"
                onClick=onClick
                ref="sendButtonRef"
        }}}
    </div>
            
    {{#Modal
            id='openAddPersonModal'
            title='Добавить пользователя'}}
        {{{ Input
                type="login"
                name="addUserlogin"
                placeholder="Введите логин"
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
                placeholder="Введите логин"
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
                <button class="yes-btn">
                    <a href="#close" style="color:#fff">
                        ДА!
                    </a>
                </button>
                <button class="no-btn">
                    <a href="#close" class="no-btn">
                        Нет
                    </a>
                </button>
            </div>
    {{/Modal}}
</div>
        `
    }
}