import store from "../core/Store";

export class WebSocketAPI {
    createsocket(chatId: number, token: string) {
        // const token = store.getState().token;

        const currentUser = store.getState().user

        const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${currentUser.id}/${chatId}/${token}`);
        store.set('currentSocket', socket)
        socket.addEventListener('open', () => {
            console.log('Соединение установлено');
            socket.send(JSON.stringify({
                content: '0',
                type: 'get old',
            }));
        });

        socket.addEventListener('close', event => {
            if (event.wasClean) {
                console.log('Соединение закрыто чисто');
            } else {
                console.log('Обрыв соединения');
            }
            console.log(`Код: ${event.code} | Причина: ${event.reason}`);
        });

        socket.addEventListener('message', event => {
            const data = JSON.parse(event.data);
            store.set('selectedChat.oldMessages', data)
        });

        socket.addEventListener('error', event => {
            console.log('Ошибка', event.message);
        });
    }
}

export default new WebSocketAPI();
