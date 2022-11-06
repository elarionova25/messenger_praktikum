import Block from '../../core/Block';

import './message-element.css';
import store from "../../core/Store";

interface MessageElementProps {
    message: any;
}

export class MessageElement extends Block {
    constructor({message}: MessageElementProps) {
        super({message});
        const currentUser = store.getState().user
        this.setProps({
            time: this.modifyDate(message.time),
            outGoing: message.user_id === currentUser.id
        })
    }

    protected modifyDate(date: string) {
        const dateExample = new Date(date);
        var date = dateExample.getFullYear()+'-'+(dateExample.getMonth()+1)+'-'+dateExample.getDate();
        var time = dateExample.getHours() + ":" + dateExample.getMinutes();
        var dateTime = date+' '+time;
        return dateTime;

    }

//language=hbs
    protected render() {
        return `
            {{#if outGoing}}
                <div class="message-container message-container-outgoing">
                <div class="message message-outgoing">
            {{else}}
                <div class="message-container">
                <div class="message">
            {{/if}}
                <div class="message-text">
                    {{message.content}}
                </div>
                <span class="message-time">{{time}}</span>
                <br>
                
                {{#if message.is_read}}
                    <span class="message-status">
                    Прочитано
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 20 20" fill="none"
                         stroke="#999999" stroke-width="1" stroke-linecap="butt" stroke-linejoin="arcs">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </span>
                {{/if}}
            </div>
        </div>
    `;
    }
}


