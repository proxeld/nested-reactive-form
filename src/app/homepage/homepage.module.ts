import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PersonalDataFormComponent } from './components/personal-data-form/personal-data-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PersonalDataBasicControlGroupComponent } from './components/personal-data-basic-control-group/personal-data-basic-control-group.component';
import { AddressControlGroupComponent } from './components/address-control-group/address-control-group.component';


@NgModule({
  declarations: [
    HomepageComponent,
    PersonalDataFormComponent,
    PersonalDataBasicControlGroupComponent,
    AddressControlGroupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class HomepageModule {
}
