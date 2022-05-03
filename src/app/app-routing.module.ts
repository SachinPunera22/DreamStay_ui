import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CitiesComponent } from './cities/cities.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { PackageDetailComponent } from './package-detail/package-detail.component';
import { PaymentComponent } from './payment/payment.component'; 
import { PackageComponent } from './package/package.component'; 
                                                                                                                                      

const routes: Routes = [
  { path: '', component: PackageComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-in', component: SignUpComponent },
  { path: 'cities/package-detail', component: PackageDetailComponent },
  { path: 'package-detail/:id', component: PackageDetailComponent },
  { path: 'payment/:id', component: PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
