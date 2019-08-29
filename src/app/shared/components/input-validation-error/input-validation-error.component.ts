import { Component, Input, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { ERROR_MESSAGES } from './input-error-messages.data';

@Component({
  selector: 'app-input-validation-error',
  templateUrl: './input-validation-error.component.html',
  styleUrls: ['./input-validation-error.component.scss']
})
export class InputValidationErrorComponent implements OnInit {
  @Input() control: NgControl;
  @Input() hidden: boolean;

  constructor() {
  }

  get errorType(): string | null {
    return this.control.errors ? Object.keys(this.control.errors)[0] : null;
  }

  get errorMessage(): string {
    return this.errorType ? ERROR_MESSAGES[this.errorType] || this.errorType : null;
  }

  get errorArgs(): object {
    return this.errorType ? this.control.errors[this.errorType] : null;
  }

  ngOnInit() {
  }

}
