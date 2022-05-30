import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { PackageDetailComponent } from './package-detail/package-detail.component';
import { PackageComponent } from './package/package.component'; 
import { PackageListComponent } from './Admin/Packages/package-list/package-list.component';                                  
import { BookingStatusComponent } from './booking-status/booking-status.component';

const routes: Routes = [
  { path: '', component: PackageComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'sign-in', component: SignUpComponent },
  { path: 'cities/package-detail', component: PackageDetailComponent },
  { path: 'package-detail/:id', component: PackageDetailComponent },
  { path: 'booking-status/:id', component: BookingStatusComponent },
  { path: 'admin',  component: PackageListComponent },
  { path: '**', redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
