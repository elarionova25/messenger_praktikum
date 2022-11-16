import {Block} from "../../core";
import './send-button.css'

interface SendButtonProps {
    className: string;
    onClick: () => void;
    name?: string;
}

export class SendButton extends Block {
    static componentName = 'SendButton';

    constructor({className, onClick, name}: SendButtonProps) {
        super({className, name, events: {click: onClick}});
    }

    render() {
        return `
        <div class="icon-wrap" name="{{name}}">
            <div class={{className}} >
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="2 -1 20 20" fill="none"
                    stroke="#FFFFFF" stroke-width="2" stroke-linecap="butt" stroke-linejoin="bevel">
                    <path d="M5 12h13M12 5l7 7-7 7"></path>
                </svg>
            </div>
        </div>
        `
    }
}