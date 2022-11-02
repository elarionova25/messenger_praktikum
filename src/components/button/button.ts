import Block from '../../core/Block';

import './button.css';

interface ButtonProps {
  text: string;
  onClick: () => void;
  style: string;
}

export class Button extends Block {
  constructor({text, style, onClick}: ButtonProps) {
    super({text, style, events: {click: onClick}});

  }

  protected render(): string {
    return `
    <div class="button-wrap">
        <button class="{{style}}" type="button">{{text}}</button>
    </div>
    `;
  }
}


