import Block from '../../core/Block';

import './button.css';

type ButtonProps = {
    text: string;
    onClick: () => void;
}


export class Button extends Block {
    static componentName = 'Button';

    constructor({text, onClick}: ButtonProps) {
        super({text, events: {click: onClick}});
    }

    protected render(): string {
        return `
    <div class="button-wrap">
        <button class="button__button" type="button">{{text}}</button>
    </div>
    `;
    }
}
