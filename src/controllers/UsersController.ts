import API, {UsersAPI, ChangeData, ChangePassword} from '../api/UsersAPI';
import router from '../core/Router';

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
            console.error(e);
        }
    }

    async changepassword(data: ChangePassword) {
        try {
            await this.api.changepassword(data);
            router.go('/profile');
        } catch (e: any) {
            console.error(e);
        }
    }

    async changeavatar(data: FormData) {
        try {
            await this.api.changeavatar(data);
        } catch (e: any) {
            console.error(e);
        }
    }
}

export default new UsersController();
