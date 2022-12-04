import {Block} from "../../core";
import ChatsController from "../../controllers/ChatsController";
import store, {withStore} from "../../core/Store";
import {host} from "../../api/host";
import './chat-element.css'
import {Chat} from "../../api/ChatsAPI";

type ChatElementProps = {
    chat: any;
    onClick: () => void;
    selectedChat: Chat;
}

export class ChatElementBase extends Block {
    static componentName = 'ChatElement';

    constructor({chat, selectedChat, onClick}: ChatElementProps) {
        super({chat, selectedChat, events: {click: onClick}});
        this.setProps({
            onDelete: () => {
                let data = {
                    chatId: chat.id,
                }
                ChatsController.deletechat(data);
            },
            onClick: async () => {
                store.set('selectedChat', chat.id);
                ChatsController.getchatusers(chat.id).then((response) => {
                    store.set('chatUsers', response)

                })
            }
        })
    }

    //language=hbs
    render() {
        return `
{{#ChatWrap chat=chat
            onClick=onClick
}}
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
            {{#if chat.unread_count}}
            <div class="new-number">
                <span class="badge">
                    {{chat.unread_count}}
                </span>
            </div>
            {{/if}}
        </div>
    </div>
{{/ChatWrap}}
        `
    }
}
export const withSelectedChat = withStore(state => ({selectedChat: (state.chats || []).find(({id}) => id === state.selectedChat)}));

export const ChatElement = withSelectedChat(ChatElementBase);