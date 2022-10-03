import {Block} from "../../../core";


export class ServerError extends Block {
    render() {
        return `
        <div class="body">
    <div class="container">
        <div class="error-text">
            <p class="text title">
                <b>
                    Ошибка 500
                </b>
                <br>
                <span class="text subtitle">
                    Мы уже фиксим.
                </span>
        </div>
    </div>
</div>
        `
    }
}