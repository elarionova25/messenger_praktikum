import {Block} from "../../core";
import store, {withStore} from "../../core/Store";
import ChatsController from "../../controllers/ChatsController";

export class MainPage extends Block {
    static componentName = 'MainPage';

    constructor() {
        super({});
        ChatsController.getChats();
        console.log('Store', store)
    }

    // language=hbs
    render() {
        return `
            <div class="container">
                <div class="chat-list-wrap">
                    {{{ ChatList }}}
                    {{{ Chat }}}
                </div>
            </div>
        `
    }
}