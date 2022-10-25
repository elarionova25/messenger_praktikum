import {Block} from "../../core";

export class MainPage extends Block {
    static componentName = 'Чат';
    // language=hbs
    render() {
        return`
            <div class="container">
                <div class="chat-list-wrap">
                {{{ ChatList }}}
                {{{ Chat }}}
                </div>
            </div>
        `
    }
}