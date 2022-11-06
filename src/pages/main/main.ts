import {Block} from "../../core";
import {withStore} from "../../core/Store";
import AuthController from "../../controllers/AuthController";
import ChatsController from "../../controllers/ChatsController";

export class MainPageBase extends Block {
    constructor() {
        super();
        AuthController.fetchUser();
        ChatsController.getChats();
    }

    // language=hbs
    render() {
        return `
            <div class="container">
                <div class="chat-list-wrap">
                    {{{ ChatList chats=this.chats}}}
                    {{#if selectedChat}}
                        {{{ Chat chat=selectedChat
                                 chatUsers=selectedChat.chatUsers
                                 chatOldMessages=selectedChat.oldMessages
                        }}}
                    {{else}}
                        {{{ Plug }}}
                    {{/if}}
                </div>
            </div>
        `
    }
}

const withChats = withStore((state) => ({...state}));
export const MainPage = withChats(MainPageBase);