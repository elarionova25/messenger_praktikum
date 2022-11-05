import BaseAPI from './BaseAPI';
import store from "../core/Store";

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
        const host = 'https://ya-praktikum.tech';
        fetch(`${host}/api/v2/chats/token/${id}`, {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
        })
            .then(response => response.json())
            .then(data => {
                store.set('token', data.token)
            });
    }

    create = undefined;
    update = undefined;
    delete = undefined;
}

export default new ChatsAPI();
