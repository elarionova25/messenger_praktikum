import {ChatList} from "./chat-list";
import {registerComponent, renderDOM} from "../../core";
import {SimpleInput} from "../simple-input/simple-input";

registerComponent(SimpleInput);

document.addEventListener("DOMContentLoaded", () => {
    renderDOM(new ChatList());
});