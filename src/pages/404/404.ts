import {Block} from "../../core";
import './404.css';


export class NotFoundErrorPage extends Block {
    static componentName = 'NotFoundErrorPage';

    render() {
        return `
        <div class="body">
    <div class="error-container">
        <div class="error-text">
            <p class="text title">
                <b>
                    Ошибка 404
                </b>
                <br>
                <span class="text subtitle">
                    Ой... Мы не можем найти страницу.
                </span>
                <br>
                <a href="/" class="link">На главную</a>
        </div>
    </div>
</div>
        `
    }
}