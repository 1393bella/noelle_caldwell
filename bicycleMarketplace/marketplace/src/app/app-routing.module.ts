import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { BikesComponent } from './bikes/bikes.component';
import { BikeListComponent } from './bikes/bike-list/bike-list.component';
import { UserBikesComponent } from './bikes/user-bikes/user-bikes.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', redirectTo: '/bikes/list', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'bikes', component: BikesComponent, children: [
      { path: 'list' as 'dashboard', component: BikeListComponent },
      { path: 'myBikes', component: UserBikesComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
