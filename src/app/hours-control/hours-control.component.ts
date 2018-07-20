import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, FormControl } from "@angular/forms";
import { HoursValidator } from "../validators/hours.validator"

@Component({
  selector: 'app-hours-control',
  templateUrl: './hours-control.component.html',
  styleUrls: ['./hours-control.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => HoursControlComponent),
    multi: true
  }, {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => HoursControlComponent),
    multi: true
  }]
})
export class HoursControlComponent implements ControlValueAccessor {
  public hours = 0;
  private validateFn = HoursValidator;
  private onChange = (v: any) => {}; // default handler does nothing, see "registerOnChange".

  public update() {
    this.onChange(this.hours);
  }

  public keypress($event) {
    if ($event.key === "ArrowUp") {
      this.setValue(.25);
    } else if ($event.key === "ArrowDown") {
      this.setValue(-.25);
    }
  }

  public setValue(change: number) {
    this.hours += change;
    this.update();
  }

  public validate(control: FormControl) {
    return this.validateFn(control);
  }

  // Three methods below is a ControlValueAccessor interface implementation.
  public writeValue(value: any) {
    if (value !== undefined) {
      this.hours = value;
    }
  }

  // Is called by Angular.
  public registerOnChange(fn) {
    this.onChange = fn;
  }

  public registerOnTouched() {}
}
