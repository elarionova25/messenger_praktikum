import {NotFoundErrorPage} from "./404";
import {renderDOM} from "../../core";


document.addEventListener("DOMContentLoaded", () => {
    renderDOM(new NotFoundErrorPage());
})