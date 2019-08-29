import { Component, OnDestroy, OnInit, Self } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NgControl,
  ValidationErrors,
  Validator,
  Validators
} from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-personal-data-basic-control-group',
  templateUrl: './personal-data-basic-control-group.component.html',
  styleUrls: ['./personal-data-basic-control-group.component.scss']
})
export class PersonalDataBasicControlGroupComponent implements OnInit, OnDestroy, ControlValueAccessor, Validator {
  form: FormGroup;
  onTouched: () => {};
  destroy$ = new Subject();

  constructor(@Self() public controlDir: NgControl, private fb: FormBuilder) {
    this.form = this.createPersonalInfoForm();
    this.controlDir.valueAccessor = this;
  }

  ngOnInit() {
    // https://stackoverflow.com/questions/44730711/how-do-i-know-when-custom-form-control-is-marked-as-pristine-in-angular
    const self = this;
    const control = this.controlDir.control;
    const originalMarkAllAsTouched = control.markAllAsTouched;
    control.markAllAsTouched = function () {
      originalMarkAllAsTouched.apply(this);
      self.form.markAllAsTouched();
    };

    // setup validators
    const validators = control.validator ? [control.validator, this.validate.bind(this)] : this.validate.bind(this);
    control.setValidators(validators);
    control.updateValueAndValidity();
  }

  createPersonalInfoForm(): FormGroup {
    return this.fb.group({
      firstName: this.fb.control(null, [
        Validators.required, Validators.minLength(2), Validators.maxLength(80)
      ]),
      lastName: this.fb.control(null, [
        Validators.required, Validators.minLength(2), Validators.maxLength(80)
      ]),
      email: this.fb.control(null, [
        Validators.required, Validators.email
      ]),
      password: this.fb.control(null, [
        Validators.required
      ]),
      passwordRepeat: this.fb.control(null, [
        Validators.required
      ])
    });
  }

  writeValue(value: any): void {
    if (value) {
      this.form.setValue(value, {
        emitEvent: false
      });
    }
  }

  registerOnChange(fn: any): void {
    this.form.valueChanges.pipe(
      takeUntil(this.destroy$)
    ).subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.form.disable() : this.form.enable();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.form.valid ? null : {
      personalDataBasic: true
    };
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
  }

}
