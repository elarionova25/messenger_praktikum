import {Block} from "../../core";
import ChatsController from "../../controllers/ChatsController";
import store from "../../core/Store";

type ChatElementProps = {
    chat: any;
    chatUsers: [];
    onClick: () => void;
}

export class ChatElement extends Block {
    static componentName = 'ChatElement';
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
                // необходимо, чтобы сохранялся порядок в ChatList
                ChatsController.getChats();
                ChatsController.getchatusers(chat.id).then((response) => {
                    store.set('selectedChat.chatUsers', response)
                })
                ChatsController.getchattoken(chat.id);
            }
        })
    }

    //language=hbs
    render() {
        return `
<div class="chat-element" id="">
    {{#if chat.avatar}}
        <div class="wrapper avatar">
            <img src="https://ya-praktikum.tech/api/v2/resources/{{chat.avatar}}" alt="avatar">
        </div>
        {{else}}
        <div class="wrapper avatar">
            <img src="https://archive.org/download/no-photo-available/no-photo-available.png" alt="avatar">
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