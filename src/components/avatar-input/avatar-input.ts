import Block from '../../core/Block';

import './avatar-input.css';

export class AvatarInput extends Block {
    static componentName = 'Avatar Input';

    protected render() {
        return `
        <div class="personal-image">
            <label class="label">
            <input type="file"/>
            <figure class="personal-figure">
             <img src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png" class="personal-avatar" alt="avatar">
            <figcaption class="personal-figcaption">
            <img src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png" alt="Аватар">
            </figcaption>
            </figure>
            </label>
        </div>
        `
    }
}