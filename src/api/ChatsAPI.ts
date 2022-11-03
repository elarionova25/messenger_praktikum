import BaseAPI from './BaseAPI';

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

    create = undefined;
    update = undefined;
    delete = undefined;
}

export default new ChatsAPI();
