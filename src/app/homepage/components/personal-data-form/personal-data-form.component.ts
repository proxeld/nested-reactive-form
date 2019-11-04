import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-personal-data-form',
  templateUrl: './personal-data-form.component.html',
  styleUrls: ['./personal-data-form.component.scss']
})
export class PersonalDataFormComponent implements OnInit {
  form: FormGroup;
  destroy$ = new Subject();
  colorOptions = [
    {id: 'red', label: 'Red', value: 'red'},
    {id: 'blue', label: 'Blue', value: 'blue'},
    {id: 'yellow', label: 'Yellow', value: 'yellow'},
    {id: 'pink', label: 'Pink', value: 'pink', disabled: true}
  ];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.createPersonalInfoForm();
    this.setupInterFormDependencies();
  }

  createPersonalInfoForm(): FormGroup {
    return this.fb.group({
      personalDataBasic: this.fb.control({
        firstName: 'Nancy',
        lastName: 'Calavera',
        email: 'nancy.calavera@up.com',
        password: 'admin',
        passwordRepeat: 'admin'
      }),
      registeredAddress: this.fb.control(null),
      residenceAddress: this.fb.control(null),
      sameAddress: this.fb.control(false),
      favoriteColor: this.fb.control('blue')
    });
  }

  setupInterFormDependencies() {
    const registeredAddressFormGroup = this.form.get('registeredAddress');
    const residenceAddressFormGroup = this.form.get('residenceAddress');
    const sameAddressControl = this.form.get('sameAddress');

    // same address checkbox
    sameAddressControl.valueChanges
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe((isSameAddressChecked) => {
        if (isSameAddressChecked) {
          residenceAddressFormGroup.setValue(registeredAddressFormGroup.value);
          residenceAddressFormGroup.disable();
        } else {
          residenceAddressFormGroup.enable();
        }
      });

    // correlation between registered address and address of residence
    registeredAddressFormGroup.valueChanges
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe((registeredAddress) => {
        const isSameAddressChecked = sameAddressControl.value;
        if (isSameAddressChecked) {
          residenceAddressFormGroup.setValue(registeredAddress);
        }
      });
  }

  onSubmitClick(): void {
    this.form.markAllAsTouched();
    this.form.get('personalDataBasic').markAllAsTouched();
  }
}
