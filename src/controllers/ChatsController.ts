import API, {AddUsers, CreateChat, DeleteChat} from '../api/ChatsAPI';
import {ChatsAPI} from "../api/ChatsAPI";
import store from "../core/Store";
import MessagesController from "./MessagesController";

export class ChatsController {
    private readonly api: ChatsAPI;

    constructor() {
        this.api = API;
    }

    async getChats() {
        try {
            const chats = await this.api.read();

            chats.map(async (chat) => {
                const token = await this.getchattoken(chat.id);
                await MessagesController.connect(chat.id, token);
                // let i =0;
                // const users = await this.getchatusers(chat.id);
                // store.set(`chats.${chat.id}`, users);
                // i++;
            });
            store.set('chats', chats);
        } catch (e: any) {
            console.error("fetch chat error")
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
        return this.api.getchattoken(id);
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
