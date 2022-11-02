import {Block} from "../../core";
import './chat-list.css'
import ChatsController from "../../controllers/ChatsController";
import {CreateChat} from "../../api/ChatsAPI";
import store from "../../core/Store";

type ChatListProps = {
    chats: any;
}

export class ChatList extends Block {
    constructor({chats}: ChatListProps) {
        super({chats});
        this.setProps({
            values: {
                title: 'THE BEST CHAT',
            },
            onCreate: () => {
                const data = this.props.values;
                ChatsController.createchat(data as CreateChat)
            },
            onSelectChat: () => {
                console.log(1233)
            }
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
                        <a href="#openAddPersonModal" class="create-group">
                            Создать группу
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
                        <a href="/error404">Страница 404</a>
                        <br>
                        <a href="/error500">Страница 500</a>
                        {{{Button text="Создать чат"
                                  onClick=onCreate
                                  style="button__button"
                        }}}
                    </div>
                </div>
                
                <div class="chats-list">
                    {{#each chats}}
                        {{{ ChatElement 
                                chat=this
                                onClick=onSelectChat
                        }}}
                    {{/each}}
                </div>

                {{#Modal
                        id='openAddPersonModal'
                        title='Добавить пользователя'}}
                    {{{ Input
                            type="login"
                            name="login"
                            placeholder="Введите логин"
                    }}}
                    <div class="buttons">
                        <button class="modal-btn">
                            <a href="#close" style="color:#fff">
                                Добавить
                            </a>
                        </button>
                    </div>
                {{/Modal}}
            </div>
        `
    }
}