import { BookingService } from './../shared/services/booking.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageService } from '../shared/services/package.service';
import { Package } from '../shared/models/package.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.css'],
})
export class PackageDetailComponent implements OnInit {
  tittle = 'd';
  id: string;
  session: any;
  loggedIn: boolean;

  public package: Package = {} as Package;

  constructor(
    public PackageService: PackageService,
    public BookingService: BookingService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.checkUser();
  }

  checkUser() {
    if (!localStorage.getItem('user')) {
      this.loggedIn = false;
      return false;
    } else {
      this.loggedIn = true;
      return true;
    }
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.PackageService.getPackage(this.id).subscribe({
      next: (data: Package) => {
        this.package = data;
        console.log('package:' + this.package);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  openLoginDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'dialog-responsive';
    dialogConfig.backdropClass = 'backdropClass';

    const dialogRef = this.dialog.open(LoginComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((res) => {
      if (this.checkUser()) 
      this.bookTour();
      //TODO: PROCESSING TEXT SHOULD BE THERE AND BOOK TOUR BUTTON SHOULD BE DISABLED 

    });
  }
  bookTour() {
    if (this.checkUser()) {
      this.id = this.route.snapshot.params['id'];

      this.BookingService.getSession(this.id).subscribe({
        next: (data) => {
          this.session = data;
          this.stripeCheckout(this.id);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
     else this.openLoginDialog();
  }

  async stripeCheckout(id: any) {

     //TODO: PROCESSING TEXT SHOULD BE THERE AND BOOK TOUR BUTTON SHOULD BE DISABLED 

    const stripe = await loadStripe(
      'pk_test_51KvS1OSCANH8NHofN0c2cHIWgHJlAKnAjr7wbvHG3seTqi8QPEveK3PMtj3PYIRkUuitHnYnCeVwEknWhscOspV800lmewBqPK'
    )
    await stripe.redirectToCheckout({
      sessionId: this.session.session.id,
    });
  }
}
