import {registerComponent, renderDOM} from "../../core";
import {LoginPage} from "./login";
import Input from "../../components/input";
import Button from "../../components/button";

export { LoginPage as default } from './login';

registerComponent(Input);
registerComponent(Button);

document.addEventListener("DOMContentLoaded", () => {
    renderDOM(new LoginPage());
})
