import {Block} from "../../core";
import './chat-wrap.css';

type ChatWrapProps = {
    chat: any;
    onClick: () => void;
}

export class ChatWrap extends Block {
    static componentName = 'ChatWrap';

    constructor({chat, onClick}: ChatWrapProps) {
        super({chat, events: {click: onClick}});

    }

    //language=hbs
    render() {
        return `
            <div id={{chat.id}} >
                <div class="chat-element" data-slot="1">
                
                </div>
            </div>
        `
    }
}