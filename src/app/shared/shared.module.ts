import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './components/text-input/text-input.component';
import { InputValidationErrorComponent } from './components/input-validation-error/input-validation-error.component';
import { InterpolatePipe } from './pipes/interpolate.pipe';



@NgModule({
  declarations: [
    TextInputComponent,
    InputValidationErrorComponent,
    InterpolatePipe
  ],
  exports: [
    TextInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
