import { NgModule } from '@angular/core';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  }
];

@NgModule({
  imports: []
})
export class HomepageModule { }
