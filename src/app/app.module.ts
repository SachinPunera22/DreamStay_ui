import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CitiesComponent } from './cities/cities.component';
import { LoginComponent } from './login/login.component';
import { PackageDetailComponent } from './package-detail/package-detail.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { PaymentComponent } from './payment/payment.component';
import { PackageComponent } from './package/package.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    FooterComponent,

    CitiesComponent,
    LoginComponent,
    PackageDetailComponent,
    UserComponent,
    SignUpComponent,
    PaymentComponent,
    PackageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
