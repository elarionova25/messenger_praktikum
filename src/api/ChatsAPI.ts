import BaseAPI from './BaseAPI';
import store from "../core/Store";
import WebSocketController from "../controllers/WebSocketController";

export interface CreateChat {
    title: string;
}

export interface DeleteChat {
    chatId: number;
}

export interface Chat {
     id: number,
     title: string,
     avatar: string,
     unread_count: number,
     last_message: {},
}

export interface AddUsers {
    users: [],
    chatId: number,
}


export class ChatsAPI extends BaseAPI {
    constructor() {
        super('/chats');
    }

    read(): Promise<Chat> {
        return this.http.get('');
    }

    createchat(data: CreateChat) {
        return this.http.post('', data);
    }

    deletechat(data: DeleteChat) {
        return this.http.delete('', data);
    }

    addusertochat(data: AddUsers) {
        return this.http.put('/users', data);
    }

    getchatusers(id: number){
        return this.http.get('/'+id+'/users');
    }

    getchattoken(id: number) {
        this.http.fetchPost(`/token/${id}`)
            .then((response:any) => {
                store.set('token', response.token);
                WebSocketController.createsocket(id)
            })
    }

    create = undefined;
    update = undefined;
    delete = undefined;
}

export default new ChatsAPI();
