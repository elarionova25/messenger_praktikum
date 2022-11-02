import BaseAPI from './BaseAPI';

export interface CreateChat {
    title: string;
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

    create = undefined;
    update = undefined;
    delete = undefined;
}

export default new ChatsAPI();
