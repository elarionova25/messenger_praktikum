import {DataEditPage} from "./data-edit";
import {registerComponent, renderDOM} from "../../core";
import AvatarInput from "../../components/avatar-input";
import Input from "../../components/input";
import {ControllerInput} from "../../components/controller-input/controller-input";
import {Error} from "../../components/error/error";

registerComponent(AvatarInput);
registerComponent(Input);
registerComponent(ControllerInput);
registerComponent(Error);

document.addEventListener("DOMContentLoaded", () => {
    renderDOM(new DataEditPage());
});