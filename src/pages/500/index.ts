import {ServerError} from "./500";
import {renderDOM} from "../../core";


document.addEventListener("DOMContentLoaded", () => {
    renderDOM(new ServerError());
})