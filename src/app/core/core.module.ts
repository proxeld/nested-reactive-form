import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { AppComponent } from './components/app/app.component';
import { HomepageModule } from "../homepage/homepage.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreRoutingModule,
    HomepageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class CoreModule { }
