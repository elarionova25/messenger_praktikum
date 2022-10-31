import Block from '../../core/Block';

import './avatar-input.css';

export class AvatarInput extends Block {

    protected render() {
        return `
        <div class="personal-image">
            <label class="label">
            <input type="file"/>
            <figure class="personal-figure">
             <img src="" class="personal-avatar" alt="avatar">
            <figcaption class="personal-figcaption">
            <img src="" alt="Аватар">
            </figcaption>
            </figure>
            </label>
        </div>
        `
    }
}