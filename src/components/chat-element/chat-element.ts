import {Block} from "../../core";
import './chat-element.css'


export class ChatElement extends Block {
    static componentName = 'Chat Element';

    render() {
        return `
    <div class="chat-element">
    <div class="wrapper avatar">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar">
    </div>

    <div class="chat-wrap">
        <div class="name-message-wrap">
            <div class="sender-name">
                <p class="name">Tybie Kesley</p>
            </div>
            <div class="last-message">
                <p class="new-message">HELOOOO234</p>
            </div>
        </div>
        <div class="time-number-wrap">
            <div class="time">
                <time class="time-text">
                    13:30
                </time>
            </div>
            <br>
            <div class="new-number">
                <span class="badge">
                    1
                </span>
            </div>
        </div>
    </div>
</div>
        `
    }
}