import SOCKET, {WebSocketAPI} from "../api/WebSocketAPI";
import router from "../core/Router";

export class WebSocketController {
    private readonly socket: WebSocketAPI;

    constructor() {
        this.socket = SOCKET;
    }

    async createsocket(chatId: number) {
        try {
            await this.socket.createsocket(chatId);
        } catch (e: any) {
            console.error(e);
            router.go('/error500');
        }
    }
}

export default new WebSocketController();
