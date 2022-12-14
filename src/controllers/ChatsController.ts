import API, {AddUsers, CreateChat, DeleteChat} from '../api/ChatsAPI';
import {ChatsAPI} from "../api/ChatsAPI";
import router from '../core/Router';
import store from "../core/Store";

export class ChatsController {
    private readonly api: ChatsAPI;

    constructor() {
        this.api = API;
    }

    async getChats() {
        try {
            const chats = await this.api.read();
            store.set('chats', chats);
        } catch (e: any) {
            console.log('error');
        }
    }

    async createchat(data: CreateChat) {
        try {
            await this.api.createchat(data);
        } catch (e: any) {
            console.log('error');
        }
        this.getChats();
    }

    async deletechat(data: DeleteChat){
        try {
            await this.api.deletechat(data);
        } catch (e: any) {
            console.log('error');
        }
        this.getChats()
    }

    async addusertochat(data: AddUsers) {
        try {
            await this.api.addusertochat(data);
        } catch (e: any) {
            console.log('error');
        }
    }

    async getchatusers(id: number) {
        const users = await this.api.getchatusers(id);
        return users;
    }

    async getchattoken(id: number) {
        try {
            await this.api.getchattoken(id);
        } catch (e: any) {
            console.log('error');
        }
    }

    async changechatavatar(data: FormData) {
        try {
            await this.api.changechatavatar(data);
        } catch (e: any) {
            console.log('error');
        }
    }
}

export default new ChatsController();
