import {Block} from "../../core";
import './modal.css';


export class Modal extends Block {
    static componentName = 'Modal';

    render() {
        return `
        <div id="{{id}}" class="modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title"> {{title}}</h3>
                        <a href="#close" title="Close" class="close">×</a>
                    </div>
                    <div class="modal-body">
                     <div data-slot="1">
                    </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}