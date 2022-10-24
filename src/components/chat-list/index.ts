import {ChatList} from "./chat-list";
import {renderDOM} from "../../core";

document.addEventListener("DOMContentLoaded", () => {
    renderDOM(new ChatList());
});