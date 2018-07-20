import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from "@angular/forms";
import { PhoneValidator } from "./phone.validator";

@Directive({
  selector: "[phone][ngModel]", // both phone and ngModel attribute required.
  providers: [{ provide: NG_VALIDATORS, useExisting: PhoneDirective, multi: true}] // Attach to the list of ng validators.
})
export class PhoneDirective implements Validator {
  private validator = PhoneValidator(); // Validator function defined in phone.validator.ts.

  validate(control: AbstractControl) : { [key: string]: any } {
    return this.validator(control);
  }
}
