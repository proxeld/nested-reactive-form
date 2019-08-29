import { Component, Input, OnDestroy, OnInit, Self } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NgControl,
  ValidationErrors,
  Validator, Validators
} from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-address-control-group',
  templateUrl: './address-control-group.component.html',
  styleUrls: ['./address-control-group.component.scss']
})
export class AddressControlGroupComponent implements OnInit, OnDestroy, ControlValueAccessor, Validator {
  @Input() id: string;
  form: FormGroup;
  onTouched: () => {};
  destroy$ = new Subject();


  constructor(@Self() private controlDir: NgControl, private fb: FormBuilder) {
    this.form = this.createAddressForm();
    this.controlDir.valueAccessor = this;
  }

  ngOnInit() {
    const control = this.controlDir.control;
    const validators = control.validator ? [control.validator, this.validate.bind(this)] : this.validate.bind(this);
    const originalMarkAllAsTouched = control.markAllAsTouched;
    const self = this;
    control.markAllAsTouched = function () {
      originalMarkAllAsTouched.apply(this);
      self.form.markAllAsTouched();
    };

    control.setValidators(validators);
    control.updateValueAndValidity();
  }

  createAddressForm(): FormGroup {
    return this.fb.group({
      street: this.fb.control(null, [Validators.required]),
      city: this.fb.control(null, []),
      state: this.fb.control(null, []),
      zipCode: this.fb.control(null, [Validators.minLength(5), Validators.maxLength(5)])
    });
  }

  writeValue(value: any): void {
    if (value) {
      this.form.setValue(value);
    }
  }

  registerOnChange(fn: any): void {
    this.form.valueChanges
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.form.disable() : this.form.enable();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.form.valid ? null : {
      addressControlGroup: true
    };
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
