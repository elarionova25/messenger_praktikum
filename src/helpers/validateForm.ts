export enum ValidateType {
    Login= 'login',
    Password = 'password'
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
                return  'can not be empty'
            } else if ( value.length < 4 ) {
                return 'make it longer'
            }
        }
    }
}