import {PasswordChangePage} from "./password-change";
import {registerComponent, renderDOM} from "../../core";
import Input from "../../components/input";

registerComponent(Input);

document.addEventListener("DOMContentLoaded", () =>{
    renderDOM(new PasswordChangePage());
})