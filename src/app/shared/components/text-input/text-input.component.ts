import { Component, ElementRef, Input, OnInit, Self, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit, ControlValueAccessor {
  @Input() label: string;
  @Input() name: string;
  @Input() id: string;
  @ViewChild('input', {static: true}) input: ElementRef;
  disabled: boolean;
  onChange: any;
  onTouched: any;

  get isRequired() {
    const validator = this.controlDir.control.validator && this.controlDir.control.validator({} as AbstractControl);
    return validator && validator.required;
  }

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  ngOnInit() {
    const control = this.controlDir.control;
    control.updateValueAndValidity({
      onlySelf: true
    });
  }

  writeValue(value: any): void {
    this.input.nativeElement.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
