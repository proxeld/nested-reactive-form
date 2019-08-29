import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routes as homepageRoutes } from '../homepage/homepage-routing.module';


const routes: Routes = [
  {
    path: '',
    children: homepageRoutes
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
