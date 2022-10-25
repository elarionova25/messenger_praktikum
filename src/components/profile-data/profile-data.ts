import {Block} from "../../core";
import "./profile-data.css"


export class ProfileData extends Block {
    static componentName = 'Profile data';

    render(){
        return `
    <div class="profile">
    <div class="avatar-wrap">
        <img src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png" alt="Аватар" class="profile-img">
    </div>
    <div class="name-wrap">
        <p class="name">
            <b>
                Екатерина
            </b>
        </p>
    </div>
    <div class="wrap">
        <div class="info-wrap">
            <p class="info-label">
                Почта
            </p>
            <p class="info">
                test@mail.ru
            </p>
        </div>
        <div class="info-wrap">
            <p class="info-label">
                Логин
            </p>
            <p class="info">
                test
            </p>
        </div>
        <div class="info-wrap">
            <p class="info-label">
                Имя
            </p>
            <p class="info">
                test
            </p>
        </div>
        <div class="info-wrap">
            <p class="info-label">
                Фамилия
            </p>
            <p class="info">
                test
            </p>
        </div>
        <div class="info-wrap">
            <p class="info-label">
                Имя в чате
            </p>
            <p class="info">
                test
            </p>
        </div>
        <div class="info-wrap">
            <p class="info-label">
                Телефон
            </p>
            <p class="info">
                test
            </p>
        </div>
    </div>
</div>
        `
    }
}