import {DataEditPage} from "./data-edit";
import {registerComponent, renderDOM} from "../../core";
import {ProfileData} from "../../components/profile-data/profile-data";
import {ProfilePage} from "../profile/profile";
import AvatarInput from "../../components/avatar-input";
import Input from "../../components/input";

registerComponent(AvatarInput);
registerComponent(Input);

document.addEventListener("DOMContentLoaded", () => {
    renderDOM(new DataEditPage());
});