import {Block} from "../../core";
import ChatsController from "../../controllers/ChatsController";
import store from "../../core/Store";

type ChatElementProps = {
    chat: any;
    chatUsers: [];
    currentUser: any;
    onClick: () => void;
}

export class ChatElement extends Block {
    constructor({chat, onClick}: ChatElementProps) {
        super({chat, events: {click: onClick}});
        this.setProps({
            onDelete: () => {
                let data = {
                    chatId: chat.id,
                }
                ChatsController.deletechat(data);
            },
            onClick: () => {
                store.set('selectedChat', chat);
                ChatsController.getchatusers(chat.id).then((response) => {
                    store.set('selectedChat.chatUsers', response)
                })
                ChatsController.getchattoken(chat.id);
                console.log(store)
                console.log('CHAT', chat)
                // const currentUser = store.getState().user;
                // const token = store.getState().token;
                // const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${currentUser.id}/${chat.id}/${token}`);
                //
                // socket.addEventListener('open', () => {
                //     console.log('Соединение установлено');
                //
                //     socket.send(JSON.stringify({
                //         content: 'Моё первое сообщение миру!',
                //         type: 'message',
                //     }));
                // });
                //
                // socket.addEventListener('close', event => {
                //     if (event.wasClean) {
                //         console.log('Соединение закрыто чисто');
                //     } else {
                //         console.log('Обрыв соединения');
                //     }
                //
                //     console.log(`Код: ${event.code} | Причина: ${event.reason}`);
                // });
                //
                // socket.addEventListener('message', event => {
                //     console.log('Получены данные', event.data);
                // });
                //
                // socket.addEventListener('error', event => {
                //     console.log('Ошибка', event.message);
                // });
            }
        })
    }

    //language=hbs
    render() {
        return `
<div class="chat-element" id="">
    {{#if avatar}}
        <div class="wrapper avatar">
            <img src="https://ya-praktikum.tech/api/v2/resources/{{avatar}}" alt="avatar">
        </div>
        {{else}}
        <div class="wrapper avatar">
            <img src="/noimage.png" alt="avatar">
        </div>
    {{/if}}

    <div class="chat-wrap">
        <div class="name-message-wrap">
            <div class="sender-name">
                <p class="name">{{chat.title}}</p>
            </div>
            <div class="last-message">
                <p class="new-message">{{chat.last_message.content}}</p>
            </div>
        </div>
        <div class="time-number-wrap">
            <div class="time">
                <a class="time-text">
                    {{{ Button text="Удалить"
                               onClick=onDelete
                               style="delete-btn"
                    }}}

                    {{{ Button text="Открыть"
                               onClick=onClick
                               style="delete-btn"
                    }}}
                </a>
            </div>
            <br>
            <div class="new-number">
                <span class="badge">
                    {{chat.unread_count}}
                </span>
            </div>
        </div>
    </div>
</div>
        `
    }
}