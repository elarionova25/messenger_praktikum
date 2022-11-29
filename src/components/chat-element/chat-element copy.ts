import {Block} from "../../core";
import ChatsController from "../../controllers/ChatsController";
import store from "../../core/Store";
import {host} from "../../api/host";
import './chat-element.css'

type ChatElementProps = {
    chat: any;
    onClick: () => void;
}

export class ChatElement extends Block {
    // static componentName = 'ChatElement';

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
{{#ChatWrap chat=chat
            onClick=onClick
}}
<!--<div class="chat-element" id={{chat.id}}>-->
    {{#if chat.avatar}}
        <div class="wrapper avatar">
            <img src="${host}/api/v2/resources/{{chat.avatar}}" alt="avatar">
        </div>
        {{else}}
        <div class="wrapper avatar">
            <img src="https://archive.org/download/no-photo-available/no-photo-available.png" alt="avatar">
        </div>
    {{/if}}

    <div class="chat-wrap">
        <div class="name-message-wrap" id={{chat.id}}>
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
                    <br>
                </a>
            </div>
            <br>
            {{#if chat.unread_count}}
            <div class="new-number">
                <span class="badge">
                    {{chat.unread_count}}
                </span>
            </div>
            {{/if}}
        </div>
    </div>
<!--</div>-->
{{/ChatWrap}}
        `
    }
}