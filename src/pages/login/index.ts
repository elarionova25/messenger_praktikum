import {registerComponent, renderDOM} from "../../core";
import {LoginPage} from "./login";
import Input from "../../components/input";

export { LoginPage as default } from './login';

registerComponent(Input);

document.addEventListener("DOMContentLoaded", () => {
    renderDOM(new LoginPage());
})
