import API, {UsersAPI, ChangeData, ChangePassword} from '../api/UsersAPI';
import router from '../core/Router';
import ChatsController from "./ChatsController";

export class UsersController {
    private readonly api: UsersAPI;

    constructor() {
        this.api = API;
    }

    async changedata(data: ChangeData) {
        try {
            await this.api.changedata(data);
            router.go('/profile');
        } catch (e: any) {
            console.log('error');
        }
    }

    async changepassword(data: ChangePassword) {
        try {
            await this.api.changepassword(data);
            router.go('/profile');
        } catch (e: any) {
            console.log('error');
        }
    }

    async changeavatar(data: FormData) {
        try {
            await this.api.changeavatar(data);
            ChatsController.getChats();
        } catch (e: any) {
            console.log('error');
        }
    }
}

export default new UsersController();
