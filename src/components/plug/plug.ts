import {Block} from "../../core";
import './plug.css'

export class Plug extends Block {
    static componentName = 'Plug';

    render() {
        return `
        <div class="plug">
            <p class="plug-text">
               Выберите чат
            </p>
        </div>
        `
    }
}