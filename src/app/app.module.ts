import { MatDialogModule } from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import{MatToolbarModule}from '@angular/material/toolbar'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthInterceptor } from './shared/Interceptor/auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { CitiesComponent } from './cities/cities.component';
import { LoginComponent } from './login/login.component';
import { PackageDetailComponent } from './package-detail/package-detail.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { PackageComponent } from './package/package.component';
import { PackageListComponent } from './Admin/Packages/package-list/package-list.component';
import { SideNavComponent } from './Admin/side-nav/side-nav.component';
import { DataTablesModule } from 'angular-datatables';
import {
  NgxUiLoaderHttpModule,
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
} from 'ngx-ui-loader';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BookingStatusComponent } from './booking-status/booking-status.component';
import { AddPackageComponent } from './Admin/Packages/add-package/add-package.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { BookingListComponent } from './Admin/booking-list/booking-list.component';
import { CustomerListComponent } from './Admin/customer-list/customer-list.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: 'red',
  bgsOpacity: 0.5,
  bgsPosition: 'bottom-right',
  bgsSize: 60,
  bgsType: 'three-strings',
  blur: 5,
  delay: 0,
  fastFadeOut: true,
  fgsColor: '#58853f',
  fgsPosition: 'center-center',
  fgsSize: 60,
  fgsType: 'three-strings',
  gap: 24,
  logoPosition: 'center-center',
  logoSize: 120,
  logoUrl: '',
  masterLoaderId: 'master',
  overlayBorderRadius: '0',
  overlayColor: 'rgba(40, 40, 40, 0.8)',
  pbColor: 'red',
  pbDirection: 'ltr',
  pbThickness: 3,
  hasProgressBar: false,
  text: 'Loading',
  textColor: '#000000',
  textPosition: 'center-center',
  maxTime: -1,
  minTime: 300,
};
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
    PackageComponent,
    PackageListComponent,
    SideNavComponent,
    BookingStatusComponent,
    AddPackageComponent,
    AdminComponent,
    BookingListComponent,
    CustomerListComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatSidenavModule,
     MatToolbarModule,
    MatSliderModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    DataTablesModule,
    NgbModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxChartsModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
