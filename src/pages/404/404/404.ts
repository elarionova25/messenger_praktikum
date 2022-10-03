import {Block} from "../../../core";


export class NotFoundErrorPage extends Block {
    render() {
        return `
        <div class="body">
    <div class="container">
        <div class="error-text">
            <p class="text title">
                <b>
                    Ошибка 404
                </b>
                <br>
                <span class="text subtitle">
                    Ой... Мы не можем найти страницу.
                </span>
        </div>
    </div>
</div>
        `
    }
}