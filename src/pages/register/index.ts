import {RegisterPage} from "./register";
import {registerComponent, renderDOM} from "../../core";
import Input from "../../components/input";
import Button from "../../components/button";
import {ControllerInput} from "../../components/controller-input/controller-input";
import {Error} from "../../components/error/error";

registerComponent(Input);
registerComponent(ControllerInput);
registerComponent(Error);
registerComponent(Button);

document.addEventListener("DOMContentLoaded", () => {
    renderDOM(new RegisterPage());
})