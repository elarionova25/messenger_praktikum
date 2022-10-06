import Block from '../../core/Block';
import Input from "../input";
import './controller-input.css';
import {validateForm} from "../../helpers/validateForm";

interface ControllerInputProps {
    onInput?: () => void;
    onFocus?: () => void;
    type?: 'text' | 'password' | 'email';
    placeholder?: string;
    value?: string;
    error?: string;
    name?: string;
    label?: string;
}

export class ControllerInput extends Block {
    constructor({...props}: ControllerInputProps) {
        super({
            ...props,
            error: '',
            value: '',
            onBlur: (e: FocusEvent) => {
                let inputEl = e.target as HTMLInputElement;
                let errorMessage = validateForm( [{type: inputEl.name, value: inputEl.value}]);
                if(errorMessage){
                    this.setProps( {
                        error: errorMessage,
                        value: inputEl.value,
                    })
                } else {
                    this.setProps( {
                        error: '',
                        value: inputEl.value,
                    })
                }
                this.refs.inputRef.props.value= inputEl.value;
            }
        });
    }

    protected render(): string {
        // language=hbs
        return `
      <div class="text-field">
          <div class="label">
              <span>
                  {{label}}:
              </span>
          </div>
          {{{ Input 
            name="{{name}}"
            type="{{type}}"
            placeholder="{{placeholder}}"
            onFocus=onFocus
            onInput=onInput
            onBlur=onBlur
            value=""
            ref="inputRef"
          }}}
          {{{Error text=error}}}
      </div>
    `
    }
}
