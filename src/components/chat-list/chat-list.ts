import {Block} from "../../core";
import './chat-list.css'
import ChatsController from "../../controllers/ChatsController";
import {CreateChat} from "../../api/ChatsAPI";

type ChatListProps = {
    chats: any;
}

export class ChatList extends Block {
    static componentName = 'ChatList';

    constructor({chats}: ChatListProps) {
        super({chats});
        this.setProps({
            values: {
                title: '',
            },
            onCreate: () => {
                const chatNameEl = this.element?.querySelector('input[name="title"]') as HTMLInputElement;
                this.setProps({
                    values: {
                        title: chatNameEl.value,
                    }
                })
                const data = this.props.values;
                ChatsController.createchat(data as CreateChat)
            },
        })
    }

    // language=hbs
    render() {
        return `
            <div class="chats">
                <div class="header">
                    <div class="profile">
                        <a href="/profile" class="profile-text">
                            Профиль
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 19 19"
                                 fill="none"
                                 stroke="#999999" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M9 18l6-6-6-6"/>
                            </svg>
                        </a>
                        <br>
                    </div>
                    <form action="" method="get">
                        <input name="search" placeholder="Поиск..." type="search">
                        <button class="search-btn" type="submit"></button>
                    </form>
                    <div class="create-chat">
                        <a href="#openCreateChatModal" class="create-group">
                            Создать чат
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="-1 -5 24 24"
                                 fill="none"
                                 stroke="#999" stroke-width="2" stroke-linecap="butt" stroke-linejoin="bevel">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </a>
                        <br>
                    </div>
                </div>
                
                <div class="chats-list">
                    {{#each chats}}
                        {{{ChatElement 
                                chat=this
                        }}}
                    {{/each}}
                </div>

                {{#Modal
                        id='openCreateChatModal'
                        title='Создать чат'}}
                    {{{ Input
                            type="text"
                            name="title"
                            placeholder="Введите название чата"
                            onInput=onInput
                    }}}
                    <div class="buttons">
                        <button class="modal-btn">
                            {{{Button text="Создать чат"
                                      onClick=onCreate
                                      style="button__button"
                            }}}
                        </button>
                    </div>
                {{/Modal}}
            </div>
        `
    }
}