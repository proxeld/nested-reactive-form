import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface RadioOption {
  id: string;
  label: string;
  value: any;
  disabled?: boolean;
}

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => RadioGroupComponent)
    }
  ]
})
export class RadioGroupComponent implements OnInit, ControlValueAccessor {
  @Input() label: string;
  @Input() name: string;
  @Input() id: string;
  @Input() options: RadioOption[];
  checkedValue: any;
  disabled: boolean;
  onChange: any;
  onTouched: any;

  constructor() {
  }

  ngOnInit() {
  }


  writeValue(value: any): void {
    console.log(value);
    this.checkedValue = value;
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
