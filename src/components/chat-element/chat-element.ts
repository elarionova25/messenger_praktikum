import {Block} from "../../core";


export class ChatElement extends Block {
    render() {
        return `
            <div class="chat-element">
    <div class="wrapper avatar">
        <img src="{{avatar}}">
    </div>

    <div class="chat-wrap">
        <div class="name-message-wrap">
            <div class="sender-name">
                <p class="name">Иван Иванов</p>
            </div>
            <div class="last-message">
                <p class="new-message">Привет</p>
            </div>
        </div>
        <div class="time-number-wrap">
            <div class="time">
                <time class="time-text">
                    12:15
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