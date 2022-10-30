import {Block} from "../../core";
import './500.css'


export class ServerError extends Block {
    render() {
        return `
        <div class="body">
    <div class="error-containercontainer">
        <div class="error-text">
            <p class="text title">
                <b>
                    Ошибка 500
                </b>
                <br>
                <span class="text subtitle">
                    Мы уже фиксим.
                </span>
                <br>
                <a href="/" class="link">На главную</a>
        </div>
    </div>
</div>
        `
    }
}