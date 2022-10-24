// export enum ValidateType {
//     Login= 'login',
//     Password = 'password',
//     Name = 'name',
//     Surname = 'surname',
//     Email = 'email',
//     Phone = 'phone'
// }

// type ValidateRule = {
//     type: ValidateType,
//     value: string;
// }

type ValidateRule = {
    type: string,
    value: string;
}

export function validateForm(rules: ValidateRule[]) {

    for (let i=0; i < rules.length; i++) {
        const { type, value } = rules[i];

        if ( type === 'login' ) {
            if ( value.length === 0 ) {
                return  'Поле Логин не может быть пустым'
            } else {
                const regex = new RegExp('^(\\d*[a-z][a-z\\d]*){3,20}$');
                if(!(regex.test(value))){
                    return 'Логин должен быть на латинице, больше 3х символов и не состоять только из цифр'
                }
            }
        }
        if ( type === 'password' ) {
            if ( value.length === 0 ) {
                return  'Поле Пароль не может быть пустым'
            } else {
                // qwerty false
                // qwertyuiop false
                // abcABC123$ true
                const regex = new RegExp(/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,40}$/);
                if(!(regex.test(value))){
                    return 'Cлабый пароль';
                }
            }
        }
        if ( type === 'first_name' ) {
            if ( value.length === 0 ) {
                return  'Поле Имя не может быть пустым'
            } else {
                const regex = new RegExp('^[A-ZА-Я][A-zА-я-]{3,16}$');
                if(!(regex.test(value))){
                    return 'Имя должно содержать больше 3х символов, начинаться с заглавной буквы и не содержать цифры и специальные символы'
                }
            }
        }
        if ( type === 'second_name' ) {
            if ( value.length === 0 ) {
                return  'Поле Фамилия не может быть пустым'
            } else {
                const regex = new RegExp('^[A-ZА-Я][A-zА-я-]{3,16}$');
                if(!(regex.test(value))){
                    return 'Имя должно содержать больше 3х символов, начинаться с заглавной буквы и не содержать цифры и специальные символы'
                }
            }
        }
        if ( type === 'email' ) {
            if ( value.length === 0 ) {
                return  'Поле Email не может быть пустым'
            } else {
                // correct-email@mail.com true
                // CORRECT.email@mail123.com true
                // incorrect-email@mail false
                const regex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i);
                if(!(regex.test(value))){
                    return 'Неверный email'
                }
            }
        }
        if ( type === 'phone' ) {
            if ( value.length === 0 ) {
                return  'Поле Телефон не может быть пустым'
            } else {
                // (212) 348-2626 true
                // +1 832-393-1000 true
                // +1 202-456-11-11 false
                const regex = new RegExp(/^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/);
                if(!(regex.test(value))){
                    return 'Неверный телефон'
                }
            }
        }

        if ( type === 'message' ) {
            if ( value.length === 0 ) {
                return  'Сообщение не может быть пустым'
            }
        }

        if ( type === 'newPassword'|| type === 'newPasswordRepeat') {
            if ( value.length === 0 ) {
                return  'Поле Новый пароль не может быть пустым'
            }
            else if ( value.length < 4 ) {
                return 'Новый пароль должен содержать больше 3х символов'
            }
        }
    }
}