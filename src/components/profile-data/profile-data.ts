import {Block} from "../../core";
import DefaultProfileImage from "../../noimage.png";
import "./profile-data.css"


export class ProfileData extends Block {
    render(){
        return `
    <div class="profile">
    <div class="avatar-wrap">
        <img src="${DefaultProfileImage}" alt="Аватар" class="profile-img">
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