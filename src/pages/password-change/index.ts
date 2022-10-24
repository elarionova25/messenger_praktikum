import {PasswordChangePage} from "./password-change";
import {registerComponent, renderDOM} from "../../core";
import Input from "../../components/input";
import {ControllerInput} from "../../components/controller-input/controller-input";
import {Error} from "../../components/error/error";
import Button from "../../components/button";

registerComponent(Input);
registerComponent(ControllerInput);
registerComponent(Error);
registerComponent(Button);

document.addEventListener("DOMContentLoaded", () =>{
    renderDOM(new PasswordChangePage());
})