import {Block} from "../../core";

export class MainPage extends Block {
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