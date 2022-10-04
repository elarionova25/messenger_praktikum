import Block from '../../core/Block';
import DefaultAvatar from "../../noimage.png";

import './avatar-input.css';

export class AvatarInput extends Block {


    protected render() {
        return `
        <div class="personal-image">
            <label class="label">
            <input type="file"/>
            <figure class="personal-figure">
             <img src="${DefaultAvatar}" class="personal-avatar" alt="avatar">
            <figcaption class="personal-figcaption">
            <img src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png">
            </figcaption>
            </figure>
            </label>
        </div>
        `
    }
}