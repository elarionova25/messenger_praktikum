export enum ValidateType {
    Login= 'login',
    Password = 'password',
    Name = 'name',
    Surname = 'surname',
    Email = 'email',
    Phone = 'phone'
}

type ValidateRule = {
    type: ValidateType,
    value: string;
}
export function validateForm(rules: ValidateRule[]) {

    for (let i=0; i < rules.length; i++) {
        const { type, value } = rules[i];

        if ( type === ValidateType.Login ) {
            if ( value.length === 0 ) {
                return  'Поле Логин не может быть пустым'
            } else if ( value.length < 4 ) {
                return 'Логин должен содержать больше 3х символов'
            }
        }
        if ( type === ValidateType.Password ) {
            if ( value.length === 0 ) {
                return  'Поле Пароль не может быть пустым'
            } else if ( value.length < 4 ) {
                return 'Пароль должен содержать больше 3х символов'
            }
        }
        if ( type === ValidateType.Name ) {
            if ( value.length === 0 ) {
                return  'Поле Имя не может быть пустым'
            }
        }
        if ( type === ValidateType.Surname ) {
            if ( value.length === 0 ) {
                return  'Поле Фамилия не может быть пустым'
            }
        }
    }
}