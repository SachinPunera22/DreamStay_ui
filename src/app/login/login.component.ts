import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../shared/models/user.model';
import{MatDialogRef}from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 
})
export class LoginComponent implements OnInit {
  passed = true;

  public User: User = {} as User;
  constructor(public authService: AuthService, private router: Router,private dialogRef: MatDialogRef<LoginComponent>) {}

  onSubmit(form: NgForm) {
    const data = {
      email: form.value.email,
      password: form.value.password,
    };

    this.authService.login(data).subscribe({
      next: (res) => {
        let user = JSON.stringify(res.user);
        console.log('token from frontend:' + res.token);
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', user);
        this.dialogRef.close();
        // this.router.navigate(['']);

      },

      error: (err) => {
        this.passed = false;
        setTimeout(() => {
          this.passed = true;
        }, 3000);
        console.error(err);
      },
    });
  }
  ngOnInit(): void {}
}
