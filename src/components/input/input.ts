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
  constructor( {...props}: InputProps) {
    super({...props});
  }

  protected render(): string {
    // language=hbs
    return `
        <input class="text-field__input" name="{{name}}" type="{{type}}" placeholder="{{placeholder}}" value="{{value}}"">
    `
  }
}
