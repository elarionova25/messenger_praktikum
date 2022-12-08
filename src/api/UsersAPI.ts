import BaseAPI from './BaseAPI';
import {User} from "./AuthAPI";
import store from "../core/Store";

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

    changeavatar(data: FormData) {
        this.http.fetchPut('/profile/avatar', data)
            .then(data => {
                return data;
            });
    }

    create:any = undefined;
    update:any = undefined;
    delete:any = undefined;
}

export default new UsersAPI();
