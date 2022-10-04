import {RegisterPage} from "./register";
import {registerComponent, renderDOM} from "../../core";
import Input from "../../components/input";

registerComponent(Input);

document.addEventListener("DOMContentLoaded", () => {
    renderDOM(new RegisterPage());
})