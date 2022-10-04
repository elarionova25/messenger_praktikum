import {RegisterPage} from "./register";
import {registerComponent, renderDOM} from "../../core";
import Input from "../../components/input";
import Button from "../../components/button";

registerComponent(Input);
registerComponent(Button)

document.addEventListener("DOMContentLoaded", () => {
    renderDOM(new RegisterPage());
})