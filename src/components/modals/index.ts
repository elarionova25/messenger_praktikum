import {Modal} from "./modal";
import {registerComponent} from "../../core";
import {ControllerInput} from "../controller-input/controller-input";
import Input from "../input";
import {Error} from "../error/error";
import {SimpleInput} from "../simple-input/simple-input";

registerComponent(ControllerInput);
registerComponent(Input);
registerComponent(Error);
registerComponent(SimpleInput);