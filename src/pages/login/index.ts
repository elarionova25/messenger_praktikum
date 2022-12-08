import {registerComponent, renderDOM} from "../../core";
import {LoginPage} from "./login";
import Input from "../../components/input";
import Button from "../../components/button";
import {ControllerInput} from "../../components/controller-input/controller-input";
import {Error} from "../../components/error/error";
import Link from "../../components/link";

export { LoginPage as default } from './login';

registerComponent(Button);
registerComponent(ControllerInput);
registerComponent(Input);
registerComponent(Error);
registerComponent(Link);
