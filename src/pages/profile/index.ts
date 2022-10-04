import {ProfilePage} from "./profile";
import {registerComponent, renderDOM} from "../../core";
import {ProfileData} from "../../components/profile-data/profile-data";

registerComponent(ProfileData);

document.addEventListener("DOMContentLoaded", () => {
    renderDOM(new ProfilePage());
});
