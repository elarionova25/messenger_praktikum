import Block from '../../core/Block';

import './message-element.css';

interface MessageElementProps {
    message: any;
}

export class MessageElement extends Block {
    constructor({message}: MessageElementProps) {
        super({message});

    }

    protected render() {
        return `
    <div class="button-wrap">
        <button class="{{style}}" type="button">{{text}}</button>
    </div>
    `;
    }
}


