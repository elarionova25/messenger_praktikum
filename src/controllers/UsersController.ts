import API, {UsersAPI, ChangeData} from '../api/UsersAPI';
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
}

export default new UsersController();
