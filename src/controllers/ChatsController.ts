import API, {CreateChat} from '../api/ChatsAPI';
import {ChatsAPI} from "../api/ChatsAPI";
import router from '../core/Router';
import store from "../core/Store";
import {ChangeData} from "../api/UsersAPI";

export class ChatsController {
    private readonly api: ChatsAPI;

    constructor() {
        this.api = API;
    }

    async getChats() {
        const chats = await this.api.read();
        store.set('chats', chats);
        return chats;
    }

    async createchat(data: CreateChat) {
        try {
            await this.api.createchat(data);
        } catch (e: any) {
            console.error(e);
        }
    }
}

export default new ChatsController();
