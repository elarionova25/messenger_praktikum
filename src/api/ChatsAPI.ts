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

    create = undefined;
    update = undefined;
    delete = undefined;
}

export default new ChatsAPI();
