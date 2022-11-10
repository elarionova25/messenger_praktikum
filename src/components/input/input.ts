import Block from '../../core/Block';

import './input.css';

interface InputProps {
  onInput?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  name?: string;
  label?: string;
  value?: string;
}

export class Input extends Block {
    static componentName = 'Input';
    constructor({onInput, onFocus, onBlur, type, placeholder, name, label, value}: InputProps) {
    super({type, placeholder, name, label, value, events: {input: onInput, focus: onFocus, blur: onBlur}});
  }

  protected render(): string {
    // language=hbs
    return `
        <input class="text-field__input" name="{{name}}" type="{{type}}" placeholder="{{placeholder}}" value="{{value}}"">
    `
  }
}
