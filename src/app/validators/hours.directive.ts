import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from "@angular/forms";
import { HoursValidator } from "./hours.validator";

@Directive({
  selector: "[hours][ngModel]",
  providers: [{ provide: NG_VALIDATORS, useExisting: HoursDirective, multi: true }]
})
export class HoursDirective implements Validator {
  private validator: ((control: AbstractControl) => { [key: string]: any }) = HoursValidator;

  public validate(control: AbstractControl): { [key: string]: any } {
    // Just call the exported validation function.
    return this.validator(control);
  }
}
