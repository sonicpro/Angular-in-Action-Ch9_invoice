import { AbstractControl, ValidatorFn } from "@angular/forms"

const expression = /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/;

export function PhoneValidator() : ValidatorFn {
    // returns a function that takes AbstractControl and returns indexable object.
    return (control: AbstractControl): { [key: string]: any } =>
        {
            const valid = expression.test(control.value) && control.value.length < 15;
            return valid ? null : { phone: true };
        };
}