import {Block} from "../../core";


export class Plug extends Block {
    static componentName = 'Plug';

    render() {
        return `
        <div class="plug">
            <div class="text-wrap">
                Выберите чат чтобы отправить сообщение
            </div>
        </div>
        `
    }
}