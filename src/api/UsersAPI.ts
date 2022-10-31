import BaseAPI from './BaseAPI';
import {User} from "./AuthAPI";

export interface ChangeData {
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string;
}

export interface ChangePassword {
    oldPassword: string,
    newPassword: string
}

export class UsersAPI extends BaseAPI {
    constructor() {
        super('/user');
    }

    read(): Promise<User> {
        return this.http.get('/user');
    }

    changedata(data: ChangeData) {
        return this.http.put('/profile', data);
    }

    changepassword(data: ChangePassword) {
        return this.http.put('/password', data);
    }


    create = undefined;
    update = undefined;
    delete = undefined;
}

export default new UsersAPI();
