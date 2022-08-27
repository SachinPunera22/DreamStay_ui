import { DashboardComponent } from './Admin/dashboard/dashboard.component';
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
import { SideNavComponent } from './Admin/side-nav/side-nav.component'; 
import { AdminComponent } from './Admin/admin/admin.component';
import { CustomerListComponent } from './Admin/customer-list/customer-list.component';
import { BookingListComponent } from './Admin/booking-list/booking-list.component';

const routes: Routes = [
  { path: '', component: PackageComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'sign-in', component: SignUpComponent },
  { path: 'cities/package-detail', component: PackageDetailComponent },
  { path: 'package-detail/:id', component: PackageDetailComponent },
  { path: 'booking-status/:id', component: BookingStatusComponent },
  { path: 'admin',  component: AdminComponent ,children: [
    {
      path:'', component: PackageListComponent
    },
    {
      path:'customer-list', component: CustomerListComponent
    },
    {
      path:'booking-list', component: BookingListComponent
    },{
      path:'dashboard', component: DashboardComponent
    }
  ]},
  { path: '**', redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
