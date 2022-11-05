import Block from '../../core/Block';

import './message-element.css';

interface MessageElementProps {
    message: any;
}

export class MessageElement extends Block {
    constructor({message}: MessageElementProps) {
        super({message});

    }
//language=hbs
    protected render() {
        return `
    <div class="message-container message-container-outgoing">
            <div class="message message-outgoing">
                <div class="message-text">
                    {{message.content}}
                </div>
                <span class="message-time">{{message.time}}</span>
                <br>
                
                {{#if message.is_read}}
                    <span class="message-status">
                    Прочитано
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 20 20" fill="none"
                         stroke="#999999" stroke-width="1" stroke-linecap="butt" stroke-linejoin="arcs">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </span>
                {{/if}}
            </div>
        </div>
    `;
    }
}


