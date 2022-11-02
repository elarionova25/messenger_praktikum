import {Block} from "../../core";
import {Chat} from "../chat/chat";
import ChatsController from "../../controllers/ChatsController";
import {CreateChat} from "../../api/ChatsAPI";

type ChatElementProps = {
    chat: any;
    onClick: () => void;
}


export class ChatElement extends Block {
    constructor({chat}: ChatElementProps) {
        super({chat});
        this.setProps({
            onDelete: () => {
                let data = {
                    chatId: chat.id,
                }
                ChatsController.deletechat(data);
            },
        })
    }

    //language=hbs
    render() {
        return `
<div class="chat-element">
    {{#if avatar}}
        <div class="wrapper avatar">
            <img src="https://ya-praktikum.tech/api/v2/resources/{{avatar}}" alt="avatar">
        </div>
        {{else}}
        <div class="wrapper avatar">
            <img src="./noimage.png" alt="avatar">
        </div>
    {{/if}}
    

    <div class="chat-wrap">
        <div class="name-message-wrap">
            <div class="sender-name">
                <p class="name">{{chat.title}}</p>
            </div>
            <div class="last-message">
                <p class="new-message">{{chat.last_message}}</p>
            </div>
        </div>
        <div class="time-number-wrap">
            <div class="time">
                <a class="time-text">
                    {{{ Button text="Удалить"
                               onClick=onDelete
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