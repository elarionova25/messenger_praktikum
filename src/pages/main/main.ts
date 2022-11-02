import {Block} from "../../core";
import store, {withStore} from "../../core/Store";
import AuthController from "../../controllers/AuthController";
import ChatsController from "../../controllers/ChatsController";

export class MainPageBase extends Block {
    constructor() {
        super();
        AuthController.fetchUser();
        ChatsController.getChats();
        // let receivedChats: any = [];
        // ChatsController.getChats().then((value: any) => {
        //     console.log(value.length)
        //     value.forEach((item: any) => {
        //         receivedChats.push(item)
        //     })
        // })
        // console.log('RECEIVED CHATS', receivedChats)
        // this.setProps({
        //     chats: receivedChats,
        // })
        // this.setProps({
        //     chatsToSend: store.getState().chats,
        // })
        // console.log('MAIN PROPS CHATS', this.props.chats)
    }
    // language=hbs
    render() {
        return`
            <div class="container">
                <div class="chat-list-wrap">
                {{{ ChatList chats=this.chats}}}
                {{{ Chat }}}
                </div>
            </div>
        `
    }
}
const withChats = withStore((state) => ({ ...state}));
export const MainPage = withChats(MainPageBase);