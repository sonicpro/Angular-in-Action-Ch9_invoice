// Defines a validator function to validate the number is it is rounded to quater hour.
import { AbstractControl, ValidatorFn } from "@angular/forms"

export function HoursValidator(control: AbstractControl) : { [key: string]: any } {
    return Number.isInteger(control.value * 4) ? null : { hours: true };
}