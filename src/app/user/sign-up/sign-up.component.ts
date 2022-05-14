import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from '../../login/login.component';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  pass = '';
  rpassword = '';
  uniqueEmail = true;

  constructor(
    public userService: UserService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  onSubmit(form: NgForm) {
    const data = {
      fullName: form.value.fullName,
      email: form.value.email,
      password: form.value.password,
    };

    this.userService.createUser(data).subscribe(
      (res) => {
        this.openLoginDialog();
      },
      (err) => {
        this.uniqueEmail = false;
        setTimeout(() => {
          this.uniqueEmail = true;
        }, 3000);
        console.error(err);
      }
    );
  }
  openLoginDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'dialog-responsive';
    dialogConfig.backdropClass = 'backdropClass';

    const dialogRef = this.dialog.open(LoginComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((res) => {
      this.router.navigate(['']);
    });
  }

  ngOnInit(): void {}
}
